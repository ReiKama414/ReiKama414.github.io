<script>
export default {
  name: 'Search',
  data() {
    return {
      posts: [],
      searchQuery: '',
      toolsJg: false,
      tagsList: [],
      tagsSelected: '',
      categoryList: ['all', 'tech', 'daily', 'portfolio', 'resource'],
      categorySelected: 'all',
      ctbList: ['rangea', 'ranget', 'ranged', 'ranget+d'],
      memeList: [],
      memeState: true,
      memeGifLength: 6,
      memePngLength: 15,
      sortType: 'createdAtTime',
      isReverse: false,
      showcontentTB: "ranget+d",
      showdescription: true,
      page: 1,
      pageSize: 7,
      startIndex: 0,
      endIndex: 7, // same as pageSize
    };
  },
  async fetch() {
    if (this.categorySelected === 'all') {
      this.posts = await this
        .$content('', { deep: true })
        .only(['title', 'category', 'tags', 'slug', 'createdAtTime', 'body', 'description'])
        .sortBy('createdAtTime', 'desc')
        .search(this.searchQuery)
        .fetch();
    } else {
      this.posts = await this
        .$content(this.categorySelected)
        .only(['title', 'category', 'tags', 'slug', 'createdAtTime', 'body', 'description'])
        .sortBy('createdAtTime', 'desc')
        .search(this.searchQuery)
        .fetch();
    }
    const tl = [];
    this.posts.forEach(function(post) {
      post.tags.forEach(function(pt) {
        tl.push(pt.toLowerCase());
      });
    });
    this.tagsList = [...new Set(tl)];
    this.tagsSelected = '';
  },
  head() {
    return {
      title: this.searchQuery ? `${this.$i18n.t('searchresultsforUP')} ${this.searchQuery} ${this.$i18n.t('searchresultsforDN')} | Kama's Blog` : `${this.$i18n.t('search')} | Kama's Blog`,
      htmlAttrs: {
        lang: this.$i18n.t('localeSetting'),
      },
      meta: [
        { hid: 'description', name: 'description', content: this.$i18n.t('indexmd') },
        { property: 'og:title', content: this.searchQuery ? `${this.$i18n.t('searchresultsforUP')} ${this.searchQuery} ${this.$i18n.t('searchresultsforDN')} | Kama's Blog` : `${this.$i18n.t('search')} | Kama's Blog`, },
        { property: 'og:description', content: this.$i18n.t('indexmd') },
        { property: 'og:locale', content: this.$i18n.t('localeSetting') }
      ],
    };
  },
  computed: {
    MemeRandom() {
      if (!this.memeState) return;
      this.ChangeState(false);
      return this.memeList[Math.floor(Math.random() * this.memeList.length)];
    },
    tagsAllCheck() {
      return this.tagsSelected.length === this.tagsList.length;
    },
    filteredPosts() {
      let postsList = '';
      if (!this.searchQuery || this.searchQuery === '') {
        postsList = this.posts;
      } else {
        let Searchmode = null;

        const strArr = this.searchQuery.split(' ');
        const arr = [];
        if (this.showcontentTB !== 'rangea') {
          strArr.forEach((str) => {
            this.posts.forEach((post) => {
              const query = str.toLowerCase();
              switch(this.showcontentTB) {
                case 'ranget':
                  Searchmode = post.title.toLowerCase().includes(query);
                  break;
                case 'ranged':
                  Searchmode = post.description.toLowerCase().includes(query);
                  break;
                default:
                  Searchmode = post.title.toLowerCase().includes(query) || post.description.toLowerCase().includes(query);
                  break;
              };
              if (Searchmode) {
                arr.push(post);
              };
            });
          });
          postsList = [...new Set(arr)];
        } else {
          postsList = this.posts;
        };
      };
      if (this.tagsSelected.length > 0) {
        const arr2 = [];
        postsList.forEach((post) => {
          const lower = post.tags.map(element => {
            return element.toLowerCase();
          });
          if (this.tagsSelected.some(el => lower.includes(el))) {
            arr2.push(post);
          }
          postsList = arr2;
        });
      };
      if (postsList.length > 0) {
        this.ChangeState(true);
      }
      return postsList;
    },
    isEmpty() {
      return this.filteredPosts.length === 0;
    },
    sortData() {
      const type = this.sortType;
      const state = this.isReverse;
      const arr = this.filteredPosts.slice().sort(function(x, y) {
        if (state) return x[type] < y[type] ? -1 : 1;
        else return x[type] > y[type] ? -1 : 1;
      });
      return arr;
    },
    CountResult() {
      return this.sortData.length;
    },
    pages() {
      return Math.ceil(this.sortData.length / this.pageSize);
    },
    HistoryList() {
      if (this.CountResult < this.pageSize) return this.sortData;
      else return this.sortData.slice(this.startIndex, this.endIndex);
    },
  },
  watch: {
    categorySelected: '$fetch',
    searchQuery: '$fetch',
  },
  mounted() {
    for (let i = 1; i <= this.memePngLength; i++) {
      this.memeList.push(`jpgmeme${i}.jpg`);
      if (i <= this.memeGifLength) {
        this.memeList.push(`meme${i}.gif`);
      }
    };
    if (this.$route.query.page) {
      this.updatePage(Number(this.$route.query.page));
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
    ClearSearchValue() {
      this.searchQuery = '';
    },
    ChangeType(type) {
      if (this.sortType === type) {
        this.isReverse = !this.isReverse;
      } else {
        this.isReverse = false;
      }
      this.sortType = type;
    },
    ChangeState(state) {
      this.memeState = state;
    },
    updatePage(pageIndex) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      this.startIndex = (pageIndex - 1) * this.pageSize;
      this.endIndex = pageIndex * this.pageSize;
      this.page = pageIndex;
      this.$router.push({ query: { page: this.page } });
    },
  },
};
</script>

<template>
  <div class="main pfl overflow-hidden pg-search" :class="{FTshow: toolsJg, FThide: !toolsJg}">
    <!-- <CatHeaderItem :imgsrc="'art8'" /> -->

    <div class="filterWrp">
      <div>
        <div class="d-flex w-100">
          <div class="ftbtnWrp d-inline-flex">
            <button type="button">
              <div class="ftbtnIcon"></div>
              <span></span>
            </button>
          </div>
          <div class="d-inline-flex flex-fill">
            <input v-model.trim="searchQuery" type="text" autocomplete="off" placeholder="Search..." />
          </div>
          <button type="reset" class="cancelBtn" @click="ClearSearchValue">
            <img alt="Filter Icon" src="~/assets/images/icons/icon-cancel.svg" />
          </button>
          <button type="button" class="filterSHBtn" @click="ToolsToggle">
            <img alt="Filter Icon" src="~/assets/images/icons/icon-filter.svg" />
          </button> 
        </div>
      </div>
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
            <v-list-item v-bind="attrs" v-on="on" @click="updatePage(1)">
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
            <v-list-item v-slot="{ active }" v-bind="attrs" v-on="on" @click="updatePage(1)">
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

      <fieldset class="d-flex flex-wrap text-left mt-4">
        <label v-for="ctb of ctbList" :key="ctb">
          <input v-model="showcontentTB" type="radio" :value="ctb" @click="updatePage(1)">
          {{ $t(ctb) }}
        </label>
        <legend>{{ $t('searchrange') }}</legend>
      </fieldset>
      
      <fieldset class="d-flex flex-wrap text-left">
        <label>
            <input v-model="showdescription" type="checkbox">
            {{ $t('description') }}
        </label>
        <legend>{{ $t('display') }}</legend>
      </fieldset>
    </div>

    <div class="al card-widget px-3 py-4 mx-3">
      <div v-if="isEmpty" class="nonequery text-left p-3">
        <p>{{ $t('nonesamtc1') }}
          <b>
            {{ searchQuery }}
          </b>
          {{ $t('nonesamtc2') }}
        </p>
        <ul>
          <li><span>{{ $t('nonesamtc3') }}</span></li>
          <li><span>{{ $t('nonesamtc4') }}</span></li>
          <li><span>{{ $t('nonesamtc5') }}</span></li>
        </ul>
        <p>{{ $t('nonesamtc6') }}</p>
        <h5 class="text-center font-weight-bold">{{ $t('noresultsmtcq') }}</h5>
        <h5 class="text-center font-weight-bold">¯\_(ツ)_/¯</h5>
        <div v-if="MemeRandom" class="w-100 text-center my-4">
          <img alt="no way" :src="require('~/assets/images/fun/' + MemeRandom)" />
        </div>
        <hr />
        <button @click="ClearSearchValue"><span>{{ $t('goback') }}</span></button>
      </div>
      <article v-else class="d-flex flex-wrap justify-content-between">
        <div class="resultsCounter col-12 text-left px-2">
          <span v-if="!searchQuery">{{ $t('totalofarticlesUP') }} {{ CountResult }} {{ $t('totalofarticlesDN') }}</span>
          <span v-else>
            <span v-if="$i18n.locale === 'en'">
              About
              <span v-if="CountResult > 1">
                {{ startIndex + 1 }}-<span v-if="endIndex <= CountResult">{{ endIndex }}</span><span v-else>{{ CountResult }}</span> of
              </span>
              {{ CountResult }}
              result<span v-if="CountResult > 1">s</span> for "<b>{{ searchQuery }}</b>"
            </span>
            <span v-else>
              {{ $t('nonesamtc7') }}<b>{{ searchQuery }}</b>{{ $t('nonesamtc8') }} {{ CountResult }} <span v-if="CountResult > 1">{{ $t('nonesamtc9') }} {{ startIndex + 1 }} ~ <span v-if="endIndex <= CountResult">{{ endIndex }}</span><span v-else>{{ CountResult }}</span></span>
              {{ $t('nonesamtc10') }}
            </span>
          </span>
        </div>
        <!-- <p class="mb-0 p-2 wpx-45">
          編號
        </p> -->
        <p class="mb-0 p-2 flex-fill text-left" @click="ChangeType('title')">
          {{ $t('title') }}
          <span v-if="sortType === 'title'" :class="{'inverse': isReverse}">
            <fa :icon="['fa-solid', 'arrow-up-wide-short']" />
            <!-- <fa v-else :icon="['fa-solid', 'arrow-up-z-a']" class="ml-1" /> -->
          </span>
        </p>
        <p class="mb-0 p-2 custom-mw1 text-right" @click="ChangeType('createdAtTime')">
          <span v-if="sortType === 'createdAtTime'" :class="{'inverse': isReverse}">
            <fa :icon="['fa-solid', 'arrow-up-wide-short']" />
            <!-- <fa v-else :icon="['fa-solid', 'arrow-up-9-1']" class="ml-1" /> -->
          </span>
          {{ $t('date') }}
        </p>
      </article>
      <SearchItem v-for="post of HistoryList" :key="post.slug" :post="post" :keyword="searchQuery" :showd="showdescription" :searchrange="showcontentTB"></SearchItem>
      <v-app v-if="CountResult > pageSize" class="mt-3">
        <v-pagination
          v-model="page"
          :length="pages"
          :total-visible="7"
          circle
          prev-icon="mdi-arrow-left"
          next-icon="mdi-arrow-right"
          @input="updatePage"
        ></v-pagination>
      </v-app>
    </div>
  </div>
</template>