<script>
export default {
  name: 'Portfolio',
  data() {
    return {
      posts: [],
      tagFilter: "all",
      tagList: {},
      tagName: [],
    };
  },
  async fetch() {
    const pl = [];
    this.posts = await this
      .$content('portfolio')
      .without(['body'])
      .sortBy('createdAt', 'desc')
      .fetch();

    this.posts.forEach(function(post) {
      pl.push(post.type);
    });
    this.tagName = [...new Set(pl.sort())];
    const obj = pl.reduce((allNum, num) => {
      if (num in allNum) {
        allNum[num]++;
      } else {
        allNum[num] = 1;
      }
      return allNum;
    }, {});
    this.tagList = obj;
  },
};
</script>

<template>
  <div class="main pfl">
    <div class="hd-i-w"></div>
    <section :data-selected="tagFilter" class="area-tf mt-3">
      <div v-if="tagFilter === 'all'">
        <h3>
          {{ $t("portfolio") }}
        </h3>
        <p>{{ $t("tagss-3") }}</p>
      </div>
      <div v-else>
        <h3>
          {{ $t("aboutwork-1") }} {{ $t(`${tagFilter}`) }} {{ $t("aboutwork-2") }}
        </h3>
        <p>{{ $t("tagss-1") }}{{ $t(`${tagFilter}`) }}{{ $t("tagss-2") }}</p>
      </div>

      <div class="d-flex mt-4 justify-content-center">
        <div class="bg-primary-lighten d-inline-flex rounded" style="width: 4rem; height: 0.25rem;"></div>
      </div>

      <fieldset class="px-3 mb-5 mt-3">
        <div class="d-inline-block">
          <input id="tagsChoice1" v-model="tagFilter" type="radio" name="tagsChoice" value="all">
          <label for="tagsChoice1" class="mx-1">
            {{ $t("all") }} ({{ Object.keys(tagList).length }})
          </label>
        </div>

        <div v-for="(tn, index) of tagName" :key="index" class="d-inline-block">
          <input :id="`tagsChoice${index + 2}`" v-model="tagFilter" type="radio" name="tagsChoice" :value="tn">
          <label :for="`tagsChoice${index + 2}`" class="mx-1">
            {{ $t(`${tn}`) }}
            (<span v-if="tagList[`${tn}`]">{{ tagList[`${tn}`] }}</span>
            <span v-else>0</span>)
          </label>
        </div>
      </fieldset>
    </section>

    <div ref="wksc" class="works-wrapper d-flex flex-wrap">
      <PortfolioItem v-for="(post, index) of posts" :key="index" :post="post"></PortfolioItem>
    </div>
  </div>
</template>