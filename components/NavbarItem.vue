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
        { title: "languagelearning", icon: "languagelearning.svg", route: "/languagelearning" },
      ],
      showImage: true,
    };
  },
  methods: {
    onImageError() {
      this.showImage = false
    }
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
        <!-- NuxtLink :to="localePath('/world')" -->
        <a href="/Globe">
          <img src="~/assets/images/icons/icon-world.svg" alt="" />
          <span> {{ $t('world') }} </span>
        </a>
      </li>
    </ul>

    <div v-if="showImage" class="dividing_line"></div>

    <div v-if="showImage" class="visitor d-flex flex-wrap overflow-hidden">

      <h5 class="mb-0">{{ $t('visitorcount') }}</h5>

      <a href="https://info.flagcounter.com/TcCJ" target="_blank">
        <img src="https://s11.flagcounter.com/mini/n8F2/bg_E8E8E8/txt_000000/border_E8E8E8/flags_0/" alt="Flag Counter" @error="onImageError">
      </a>

      <a href="https://info.flagcounter.com/TcCJ" target="_blank" class="m__lighten">
        <img src="https://s01.flagcounter.com/count/TcCJ/bg_E8E8E8/txt_000000/border_E8E8E8/columns_1/maxflags_44/viewers_3/labels_1/pageviews_0/flags_0/percent_0/" alt="Flag Counter" @error="onImageError">
      </a>

      <a href="https://info.flagcounter.com/TcCJ" target="_blank" class="m__darken">
        <img src="https://s01.flagcounter.com/count/TcCJ/bg_191212/txt_FFFFFF/border_191212/columns_1/maxflags_44/viewers_3/labels_1/pageviews_0/flags_0/percent_0/" alt="Flag Counter" @error="onImageError">
      </a>
    </div>

  </nav>
</template>
