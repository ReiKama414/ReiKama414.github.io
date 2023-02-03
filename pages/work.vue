<script>
export default {
  name: 'Portfolio',
  data() {
    return {
      posts: [],
      tagFilter: "all",
      tagList: {},
      tagName: [],
      loadState: true,
    };
  },
  async fetch() {
    const pl = [];
    this.posts = await this
      .$content('portfolio')
      .without(['body'])
      .sortBy('createdAtTime', 'desc')
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
  head() {
    return {
      title: `${this.$i18n.t('work')} | Kama's Blog`,
      htmlAttrs: {
        lang: this.$i18n.t('localeSetting'),
      },
      meta: [
        { hid: 'description', name: 'description', content: this.$i18n.t('indexmd') },
        { property: 'og:title', content: `${this.$i18n.t('work')} | Kama's Blog` },
        { property: 'og:description', content: this.$i18n.t('indexmd') },
        { property: 'og:locale', content: this.$i18n.t('localeSetting') }
      ],
    };
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
          this.loadState = false;
      }, 1800);
    });
  },
};
</script>

<template>
  <div class="main pfl position-relative">
    <div class="hd-i-w"></div>
    <section :data-selected="tagFilter" class="area-tf mt-3">
      <div v-if="loadState">
        <h3 class="mx-auto"></h3>
        <p class="mx-auto"></p>
      </div>
      <div v-else-if="tagFilter === 'all'">
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
        <div class="d-inline-block" :class="{skeleton: loadState}">
          <input id="tagsChoice1" v-model="tagFilter" type="radio" name="tagsChoice" value="all">
          <label for="tagsChoice1" class="mx-1">
            {{ $t("all") }} ({{ Object.keys(tagList).length }})
          </label>
        </div>

        <div v-for="(tn, index) of tagName" :key="index" class="d-inline-block" :class="{skeleton: loadState}">
          <input :id="`tagsChoice${index + 2}`" v-model="tagFilter" type="radio" name="tagsChoice" :value="tn">
          <label :for="`tagsChoice${index + 2}`" class="mx-1">
            {{ $t(`${tn}`) }}
            (<span v-if="tagList[`${tn}`]">{{ tagList[`${tn}`] }}</span>
            <span v-else>0</span>)
          </label>
        </div>
      </fieldset>
    </section>

    
    <div v-if="loadState" class="SkeletonPortfolio works-wrapper d-flex flex-wrap position-absolute w-100">
      <div v-for="n in posts.length" :key="n" class="area-wks px-2">
        <div class="wks-card p-0 card-widget">
          <div class="imgWpr"></div>
        </div>
      </div>
    </div>

    <div ref="wksc" :class="{show: !loadState}" class="niam works-wrapper d-flex flex-wrap position-relative">
      <PortfolioItem v-for="(post, index) of posts" :key="index" :post="post"></PortfolioItem>
    </div>
  </div>
</template>