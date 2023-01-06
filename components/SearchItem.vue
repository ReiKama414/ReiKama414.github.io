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
    index: {
      type: Number,
      default: 0,
    },
    keyword: {
      type: String,
      default: null,
    },
  },
  methods: {
    formatDate(date) {
      return moment(date).format('YYYY-MM-DD');
    },
    replaceLG(text) {
      return text.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    },
    replaceKey(query, content) {
      query = this.replaceLG(query);
      content = this.replaceLG(content);
      if (!query || query === '') return content;
      const paren = ['\\', '\/', '[', ']', '(', ')'];
      for (let i = 0; i < paren.length; i++) {
        query = query.replace(paren[i], `\\${paren[i]}`);
      }
      return content.replace(new RegExp(query, 'gi'), match => `<b>${match}</b>` );
    },
  },
};
</script>

<template>
  <article class="search-item d-flex justify-content-between">
    <span class="pl-1 pr-3 wpx-45">{{ index }}</span>
    <nuxt-link :to="localePath(`/blog/${post.slug}`)" :title="post.title" class="flex-fill text-left" >
        <!-- {{ replaceKey(keyword, post.title) }} -->
        <span v-html="replaceKey(keyword, post.title)"></span>
    </nuxt-link>
    <div class="pl-2">
        <fa :icon="['fa-solid', 'pen']" class="mr-1" />
        <span>{{ formatDate(post.createdAt) }}</span>
    </div>
  </article>
</template>
