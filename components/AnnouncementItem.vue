<script>
export default {
  data() {
    return {
      noticeArr: [
        { title: '分享你的想法！全新建立的留言系統，等你來發掘！' },
        { title: '貼文下方新增查看更多相關貼文功能，帶你走過更豐富多元的世界！' },
        { title: '右上搜尋功能，輕鬆搜尋，一鍵即現，讓你快速找到你所需的資訊！' },
      ],
      number: 0,
      isHover: false,
      timer: null,
    };
  },
  computed: {
    noticeList() {
      return {
        id: this.number,
        text: this.noticeArr[this.number].title,
      };
    },
  },
  mounted() {
    this.startScroll();
  },
  methods: {
    startScroll() {
      this.timer = setTimeout(() => {
        if (this.number === this.noticeArr.length - 1) {
          this.number = 0;
        } else {
          this.number += 1;
        }
        this.startScroll();
      }, 3000);
    },
    stopScroll() {
      clearTimeout(this.timer);
    },
  },
};
</script>

<template>
  <div class="notice-box" @mouseover="stopScroll" @mouseleave="startScroll">
    <img src="~/assets/images/icons/marketing-speaker-svgrepo-com.svg" class="mr-2" />
    <transition name="notice-slide">
      <p :key="noticeList.id" class="notice-item">
        {{ noticeList.text }}
      </p>
    </transition>
  </div>
</template>

<style lang="sass" scoped>
.notice-box
  position: relative
  overflow: hidden
  text-align: center
  margin-bottom: 2rem
  padding: .25rem 0
  width: 100%
  height: 2.85rem
  font-size: .95rem
  color: #FFF
  background-color: #FFAC78F0
  background-image: linear-gradient(90deg, #FFAC78F0 0%, #FF6155 55%, #FF7E90 100%)
  // box-shadow: rgb(240 91 46 / 40%) 0px 4px, rgb(240 91 46 / 30%) 0px 8px, rgb(240 91 46 / 20%) 0px 12px, rgb(240 91 46 / 10%) 0px 16px, rgb(240 91 46 / 5%) 0px 24px
  border-radius: 1.85rem
  @media (max-width: 768px)
    font-size: 0.85rem
  img
    position: absolute
    left: .85rem
    width: 1.5rem
    height: 1.85rem
    transform: translateY(.25rem)
    filter: invert(1)

[data-theme= "dark"]
  .notice-box
    background-image: linear-gradient(90deg, rgb(133 89 63 / 94%) 0%, #8D3B35 55%, #974F59 100%)
    box-shadow: rgb(133 54 31 / 40%) 0px 4px, rgb(133 54 31 / 30%) 0px 8px, rgb(133 54 31 / 20%) 0px 12px, rgb(133 54 31 / 10%) 0px 16px, rgb(133 54 31 / 5%) 0px 24px

.notice-item 
  position: absolute
  overflow: hidden
  text-overflow: ellipsis
  white-space: nowrap
  padding: 0 1.25rem 0 3rem
  top: 0
  width: 100%
  height: 2.85rem
  line-height: 2.85rem
.notice-slide-enter-active,
.notice-slide-leave-active 
  transition: all 0.8s linear
.notice-slide-enter 
  top: 30px
.notice-slide-leave-to 
  top: -30px
</style>