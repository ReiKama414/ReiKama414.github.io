<script>
import moment from 'moment';
export default {
  props: {
    post: {
      type: [Array, Object],
      default() {
          return {}
      },
    },
    keyword: {
      type: String,
      default: null,
    },
    showd: {
      type: Boolean,
      default: true,
    },
    searchrange: {
      type: String,
      default: null,
    },
  },
  methods: {
    formatDate(date) {
      return moment(date).format('YYYY-MM-DD');
    },
    replaceKey(query, content) {
      content = content.replace(/</g, '&lt;').replace(/>/g, '&gt;');
      if (!query || query === '') return content;
      const paren = ['\\', '\/', '[', ']', '(', ')'];
      for (let i = 0; i < paren.length; i++) {
        query = query.replace(paren[i], `\\${paren[i]}`);
      }
      return content.replace(new RegExp(query.replace(/</g, '&lt;').replace(/>/g, '&gt;'), 'gi'), match => `<mark>${match}</mark>` );
    },
  },
};
</script>

<template>
  <article class="search-item d-flex justify-content-between flex-wrap">
    <!-- <span class="pl-1 pr-3 wpx-45">{{ index }}</span> -->
    <div class="col-12 mt-2 header">
      <a :href="`https://${host}/reikama/blog/${post.slug}`" :title="post.title" class="flex-fill text-left">
        <span v-if="searchrange !== 'ranged'" v-html="replaceKey(keyword, post.title)"></span>
        <span v-else> {{ post.title }} </span>
      </a>
      <!-- <nuxt-link :to="localePath(`/blog/${post.slug}`)" :title="post.title" class="flex-fill text-left" >
          <span v-if="searchrange !== 'ranged'" v-html="replaceKey(keyword, post.title)"></span>
          <span v-else> {{ post.title }} </span>
      </nuxt-link> -->
      <div class="pl-2 custom-mw1">
          <fa :icon="['fa-solid', 'pen']" class="mr-1" />
          <span>{{ formatDate(post.createdAt) }}</span>
      </div>
    </div>
    <div v-if="showd" class="col-12 text-left content mb-2 mt-1">
      <span v-if="searchrange !== 'ranget'" v-html="replaceKey(keyword, post.description)"></span>
      <span v-else> {{ post.description }} </span>
    </div>
  </article>
</template>
