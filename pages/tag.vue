<script>
export default {
  name: 'Tags',
  data() {
    return {
      posts: [],
      tagsList: [],
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
};
</script>

<template>
  <div class="main">
    <CatHeaderItem :imgsrc="'art3.jpg'" />
    <div class="tagspg-wpr card-widget">
      <h3 class="mb-3"> {{ $t("tags") }} </h3>
      <div class="d-flex flex-wrap justify-content-start">
        <div v-for="(tag, key, index) of tagsList" :key="index" class="tags-item mr-2">
          <NuxtLink :to="localePath(`/tags/${key}`)" class="tags">
            <div v-if="$te(key)"> {{ $t(`${key}`) }} </div>
            <div v-else> {{ key }} </div>
            <div> {{ tag }} </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>