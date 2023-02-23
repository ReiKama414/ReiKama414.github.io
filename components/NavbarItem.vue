<script>
export default {
  data() {
    return {
      menuList: [
        { title: "home", icon: "home.svg", route: "/" },
        { title: "tech", icon: "blog.svg", route: "/tech" },
        { title: "daily", icon: "daily.svg", route: "/daily" },
        { title: "tags", icon: "tags.svg", route: "/tag" },
        { title: "work", icon: "work.svg", route: "/work" },
        { title: "resource", icon: "resource.svg", route: "/resource" },
        { title: "about", icon: "about.svg", route: "/about" },
        { title: "log", icon: "log.svg", route: "/log" },
      ],
    };
  },
};
</script>

<template>
  <nav class="nl">
    <ul class="nb">
      <li v-for="ml in menuList" :key="ml.title">
        <NuxtLink :to="localePath(`${ml.route}`)">
          <img :src="require(`~/assets/images/icons/icon-${ml.icon}`)" :alt="`${ml.title} menu icon`" />
          <span> {{ $t(`${ml.title}`) }} </span>
        </NuxtLink>
      </li>
    </ul>
    <p> {{ $t('other') }} </p>
    <ul class="nb">
      <li>
        <NuxtLink :to="localePath('/world')">
          <img src="~/assets/images/icons/icon-world.svg" alt="" />
          <span> {{ $t('world') }} </span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>