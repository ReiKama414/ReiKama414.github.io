<script>
export default {
  props: {
    pl: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      profileList: ["MyLive2D.png", "MyPaint.png"],
    };
  },
  computed: {
    profilerandom() {
      return this.profileList[Math.floor(Math.random() * 2)];
    },
  },
};
</script>

<template>
  <div class="card-widget">
    <div class="author-profile">
      <div>
        <img
          alt="profile photo"
          :src="require('~/assets/images/profile/' + profilerandom)"
        />
      </div>
      <div class="pt-3 pb-3">Kama</div>
      <div>
        <fa :icon="['fa-solid', 'location-dot']" style="margin-right: .25rem" />
        Tainan, Taiwan
      </div>
    </div>
    <div class="info-data mt-4 mb-3">
      <div class="info-data-item">
        <div> {{ $t("article") }} </div>
        <div>{{ pl }}</div>
      </div>
      <div class="info-data-item">
        <div> {{ $t("tags") }} </div>
        <div>0</div>
      </div>
      <div class="info-data-item">
        <div> {{ $t("work") }} </div>
        <div>0</div>
      </div>
    </div>
    <div class="urlList">
      <a href="https://github.com/ReiKama414?tab=repositories" target="_blank">
        <fa :icon="['fa-brands', 'github']" />
      </a>
      <a href="https://codepen.io/Rei_Kama414" target="_blank">
        <fa :icon="['fa-brands', 'codepen']" />
      </a>
      <a
        href="https://discordapp.com/users/871649191338860564https://discordapp.com/users/871649191338860564"
        target="_blank"
      >
        <fa :icon="['fa-brands', 'discord']" />
      </a>
    </div>
  </div>
</template>
