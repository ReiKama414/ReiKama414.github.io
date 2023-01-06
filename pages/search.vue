<script>
export default {
  name: 'Search',
  data() {
    return {
      posts: [],
      queryText: '',
      searchQuery: null,
      toolsJg: false,
      tagsList: [],
      tagsSelected: '',
      categoryList: ['all', 'tech', 'daily', 'work', 'resource'],
      categorySelected: 'all',
      memeList: [],
      memeGifLength: 3,
      memePngLength: 7,
      memeRd: 'meme1.gif',
    };
  },
  async fetch() {
    this.posts = await this
      .$content('', { deep: true })
      .only(['title', 'category', 'tags', 'slug', 'createdAt', 'body'])
      .sortBy('createdAt', 'desc')
      .fetch();
    const tl = [];
    this.posts.forEach(function(post) {
      post.tags.forEach(function(pt) {
        tl.push(pt.toLowerCase());
      });
    });
    this.tagsList = [...new Set(tl)];
  },
  computed: {
    tagsAllCheck() {
      return this.tagsSelected.length === this.tagsList.length;
    },
    filteredPosts() {
      if (!this.searchQuery || this.searchQuery === '') return this.posts;
      
      const strArr = this.searchQuery.split(' ');
      const arr = [];
      strArr.forEach((str) => {
        this.posts.forEach((post) => {
          const query = str.toLowerCase();
          if (post.title.toLowerCase().includes(query)) {
            arr.push(post);
          };
        });
      });
      return [...new Set(arr)];

      // return this.posts.filter(post => {
      //   const query = this.searchQuery.toLowerCase();
      //   return post.title.toLowerCase().includes(query);
      // });
    },
    isEmpty () {
      return this.filteredPosts.length === 0;
    },
  },
  mounted() {
    for (let i = 1; i <= this.memePngLength; i++) {
      this.memeList.push(`jpgmeme${i}.jpg`);
      if (i <= this.memeGifLength) {
        this.memeList.push(`meme${i}.gif`);
      }
    };
  },
  methods: {
    ToolsToggle() {
      this.toolsJg = !this.toolsJg;
    },
    TagsToggle() {
      this.$nextTick(() => {
        if (this.tagsAllCheck) this.tagsSelected = [];
        else this.tagsSelected = this.tagsList.slice();
      });
    },
    GetSearchValue() {
      this.searchQuery = this.queryText;
      this.MemeRandom();
    },
    ClearSearchValue() {
      this.queryText = '';
    },
    GobackSearchValue() {
      this.searchQuery = this.queryText = '';
    },
    MemeRandom() {
      this.memeRd = this.memeList[Math.floor(Math.random() * this.memeList.length)];
    },
  },
};
</script>

<template>
  <div class="main pfl overflow-hidden pg-search" :class="{FTshow: toolsJg}">
    <!-- <CatHeaderItem :imgsrc="'art8.jpg'" /> -->

    <div class="filterWrp">
      <form @submit.prevent="GetSearchValue">
        <div class="d-flex w-100">
          <div class="d-inline-flex flex-fill">
            <input v-model.trim="queryText" type="text" autocomplete="off" placeholder="Search..." />
          </div>
          <button type="reset" class="cancelBtn" @click="ClearSearchValue">
            <img alt="Filter Icon" src="~/assets/images/icons/icon-cancel.svg" />
          </button>
          <div class="ftbtnWrp d-inline-flex">
            <button type="submit">
              <div class="ftbtnIcon"></div>
              <span></span>
            </button>
          </div>
          <button type="button" class="filterSHBtn" @click="ToolsToggle">
            <img alt="Filter Icon" src="~/assets/images/icons/icon-filter.svg" />
          </button> 
        </div>
      </form>
    </div>

    <div class="filterSHWrp m-4">
      <v-app>
        <v-select
          v-model="categorySelected"
          :items="categoryList"
          :label="$t('category')"
          chips
          dense
        >
          <template #item="{ item, attrs, on }">
            <v-list-item v-bind="attrs" v-on="on">
              <v-list-item-content>
                <v-list-item-title>
                  {{ $t(item) }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
          <template #selection="{ item }">
            <v-chip link>
              <span>{{ $t(item) }}</span>
            </v-chip>
          </template>
        </v-select>
        <v-select
          v-model="tagsSelected"
          :items="tagsList"
          :label="$t('tags')"
          multiple
          chips
          dense
          clearable
          hide-details
        >
          <template #prepend-item>
            <v-list-item
              ripple
              @mousedown.prevent
              @click="TagsToggle"
            >
              <v-list-item-content>
                <v-list-item-title>
                  Select All
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider class="m-0"></v-divider>
          </template>
          <template #item="{ item, attrs, on }">
            <v-list-item v-slot="{ active }" v-bind="attrs" v-on="on">
              <v-list-item-action>
                <v-checkbox :ripple="false" :input-value="active"></v-checkbox>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title v-if="$te(item)">
                  {{ $t(item) }}
                </v-list-item-title>
                <v-list-item-title v-else>
                  {{ item }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
          <template #selection="{ item, index }">
            <v-chip v-if="$te(item)" link close close-icon="mdi-close-outline" @click:close="tagsSelected.splice(index, 1)">
              <span>{{ $t(item) }}</span>
            </v-chip>
            <v-chip v-else link close close-icon="mdi-close-outline" @click:close="tagsSelected.splice(index, 1)">
              <span>{{ item }}</span>
            </v-chip>
          </template>
        </v-select>
      </v-app>
      {{ searchQuery }}
      {{ queryText }}
      {{ categorySelected }}
      {{ tagsSelected }}
    </div>

    <div class="al card-widget px-3 py-4 mx-3">
      <div v-if="isEmpty" class="nonequery text-left p-3">
        <p>Your search "
          <b>
            {{searchQuery}}
          </b>
          " did not match any documents. Search suggestions:
        </p>
        <ul>
          <li><span>Make sure all words are spelled correctly.</span></li>
          <li><span>Try different keywords.</span></li>
          <li><span>Try more general keywords.</span></li>
        </ul>
        <p>Or you just want to see this sentence ...</p>
        <h5 class="text-center font-weight-bold">No results match that query !!!</h5>
        <h5 class="text-center font-weight-bold">¯\_(ツ)_/¯</h5>
        <div class="w-100 text-center my-4">
          <img alt="no way" :src="require('~/assets/images/fun/' + memeRd)" />
        </div>
        <hr />
        <button @click="GobackSearchValue"><span>Go back</span></button>
      </div>
      <article v-else class="d-flex justify-content-between">
        <p class="mb-0 p-2 wpx-45">編號</p>
        <p class="mb-0 p-2 flex-fill text-left">標題</p>
        <p class="mb-0 p-2">日期</p>
      </article>
      <SearchItem v-for="(post, index) of filteredPosts" :key="index" :post="post" :index="posts.length - index" :keyword="searchQuery"></SearchItem>
    </div>
  </div>
</template>