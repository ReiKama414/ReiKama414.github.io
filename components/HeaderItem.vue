<script>
export default {
  props: {
    snb: Boolean,
  },
  emits: ["update:snb"],
  data() {
    return {
      ThemeChecked: false,
      lang: [
        { lg: "zh-CHT", lgt: "繁體中文" },
        { lg: "zh-CHS", lgt: "简体中文" },
        { lg: "en", lgt: "English" },
        { lg: "ja", lgt: "日本語" },
      ],
      tnb: this.snb,
    };
  },
  beforeMount() {
    if (localStorage.getItem("theme") === "true") {
      this.ThemeChecked = true;
      document.documentElement.setAttribute("data-theme", "dark");
    }
  },
  methods: {
    NBToggle() {
      this.tnb = !this.tnb;
      this.$emit("update:snb", this.tnb);
    },
    ThemeChange() {
      if (this.ThemeChecked) {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
      }
      localStorage.setItem("theme", this.ThemeChecked);
    },
  },
};
</script>

<template>
  <header class="km-header">
    <div class="hctn container-md">
      <div class="hl">
        <button class="navtoggle ms-1 me-1" @click="NBToggle">
          <img alt="" src="~/assets/images/icons/icon-menu.svg" />
        </button>
        <NuxtLink :to="localePath('/')">
          <img alt="" src="~/assets/images/logo.png" />
        </NuxtLink>
      </div>
      <div class="hr">
        <label class="switch mb-0" for="switch">
          <input
            id="switch"
            v-model="ThemeChecked"
            type="checkbox"
            name="switch"
            @change="ThemeChange"
          />
          <div class="time">
            <span class="day">
              <img alt="" src="~/assets/images/icons/icon-sun.svg" />
              <img alt="" src="~/assets/images/icons/icon-moon.svg" />
            </span>
          </div>
        </label>
        <div class="dropdown">
          <button>
            <img alt="" src="~/assets/images/icons/icon-translate.svg" />
          </button>
          <ul>
            <li v-for="(l, index) in lang" :key="index">
              <a href="#" @click.prevent.stop="$i18n.setLocale(l.lg)">
                {{ l.lgt }}
              </a>
            </li>
          </ul>
        </div>
        <NuxtLink :to="localePath('/search')" class="search">
          <fa :icon="['fa-solid', 'magnifying-glass']" />
        </NuxtLink>
      </div>
    </div>
  </header>
</template>