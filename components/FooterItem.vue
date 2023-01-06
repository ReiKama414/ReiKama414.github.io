<script>
export default {
  computed: {
    GetYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<template>
  <footer>
    <p>Copyrights © {{ GetYear }} <a href="/about" target="__blank">Kama</a>, All Rights Reserved.</p>
  </footer>
</template>