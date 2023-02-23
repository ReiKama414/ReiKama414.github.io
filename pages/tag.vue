<script>
export default {
  name: 'Tags',
  data() {
    return {
      posts: [],
      tagsList: [],
      loadState: true,
    };
  },
  async fetch() {
    const tl = [];
    this.posts = await this
      .$content('', { deep: true })
      .only(['tags'])
      .fetch();
    this.posts.forEach(function(post) {
        post.tags.forEach(function(pt) {
            tl.push(pt.toLowerCase());
        });
    });
    const obj = tl.sort().reduce((allNum, num) => {
      if (num in allNum) {
        allNum[num]++;
      } else {
        allNum[num] = 1;
      }
      return allNum;
    }, {});
    this.tagsList = obj;
  },
  head() {
    return {
      title: `${this.$i18n.t('tags')} | Kama's Blog`,
      htmlAttrs: {
        lang: this.$i18n.t('localeSetting'),
      },
      meta: [
        { hid: 'description', name: 'description', content: this.$i18n.t('indexmd') },
        { property: 'og:title', content: `${this.$i18n.t('tags')} | Kama's Blog` },
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
  <div class="main position-relative">
    <div v-if="loadState" class="position-absolute w-100">
      <div class="SkeletonCarouse mb-4"></div>
    </div>
    <div class="niam" :class="{show: !loadState}">
      <CatHeaderItem :imgsrc="'art3'" />
    </div>
    <div class="tagspg-wpr card-widget">
      <h3 v-if="loadState" class="mb-3"></h3>
      <h3 v-else class="mb-3"> {{ $t("tags") }} </h3>
      <div class="d-flex flex-wrap justify-content-start">
        <div v-for="(tag, key) of tagsList" :key="key" class="tags-item mr-2">
          <NuxtLink :to="localePath(`/tags/${key}`)" class="tags" :class="{load: loadState}">
            <div v-if="$te(key)"> {{ $t(`${key}`) }} </div>
            <div v-else> {{ key }} </div>
            <div> {{ tag }} </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>