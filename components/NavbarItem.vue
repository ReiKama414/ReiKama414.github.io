<script>
export default {
  data() {
    return {
      menuList: [
        { title: "home", icon: "home.svg", route: "/" },
        { title: "tech", icon: "blog.svg", route: "/tech" },
        { title: "daily", icon: "daily.svg", route: "/daily" },
        { title: "tags", icon: "tags.svg", route: "/1" },
        { title: "work", icon: "work.svg", route: "/1" },
        { title: "resource", icon: "resource.svg", route: "/1" },
        { title: "about", icon: "about.svg", route: "/1" },
        { title: "log", icon: "log.svg", route: "/1" },
      ],
    };
  },
};
</script>

<template>
  <nav class="nl">
    <ul class="nb">
      <li v-for="(ml, index) in menuList" :key="index">
        <NuxtLink :to="localePath(`${ml.route}`)">
          <img :src="require(`~/assets/images/icons/icon-${ml.icon}`)" :alt="`${ml.title} menu icon`" />
          <span> {{ $t(`${ml.title}`) }} </span>
        </NuxtLink>
      </li>
    </ul>
    <p> {{ $t('other') }} </p>
    <ul class="nb">
      <li>
        <a href="#">
          <img src="~/assets/images/icons/icon-world.svg" alt="" />
          <span> {{ $t('world') }} </span>
        </a>
      </li>
    </ul>
  </nav>
</template>