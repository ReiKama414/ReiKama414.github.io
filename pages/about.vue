<script>
import moment from 'moment';
export default {
  name: 'About',
  data() {
    return {
      skill_Proficiency: ["React.js", "Vue.js", "NuxtJS", "Javascript", "jQuery", "Node.js", "Python", "HTML5", "Css3", "RWD", "Sass", "Less", "Bootstrap", "BootstrapVue", "TailwindCSS", "Vuetify", "AJAX", "Json", "Git", "Markdown", "App Inventor"],
      skill_Familiarity: ["Swift", "Java", "C", "C++", "CSharp", "ASP.NET", "Unity2D", "Django", "VB.NET", "Flask", "PHP", "PostCss", "MaterializeCSS", "TypeScript"],
      skill_Tools: ["VSCode", "VisualStudio2017_2019_2022", "Anaconda", "Notepad++", "PyCharm", "colab", "Xcode", "Android (Android Studio)", "Sourcetree", "GitHub", "GitHubPages", "Heroku", "Trello", "WinSCP", "Proteus", "Arduino", "Raspberry Pi"],
      skill_Database: ["MSSQL", "MySQL", "GoogleSheets", "MongoDB", "PostgreSQL"],
      skill_Office: ["Word", "Excel", "PowerPoint", "Outlook", "OneDrive", "Teams"],
      hobbies: [
        { icon: 'puzzle-piece', title: 'Puzzle', },
        { icon: 'cube', title: 'Mini Blocks', },
        { icon: 'screwdriver-wrench', title: 'DIY Furniture', },
        { icon: 'box-archive', title: 'Collect', },
        { icon: 'book', title: 'Reading', },
        { icon: 'gamepad', title: 'PC games', },
        { icon: 'paw', title: 'Pet', },
        { icon: 'palette', title: 'Paint', },
        { icon: 'film', title: 'Movie', },
        { icon: 'headphones', title: 'Music', },
      ],
      wkeList: [
        {
            img: "company-rosati.webp",
            title: "Front-end developer",
            jobname: "榮興自動化科技股份有限公司",
            begindate: "2023/4",
            enddate: "",
            jobtitle: "前端工程師",
            jobwhere: "臺南市歸仁區",
            content: "",
            contentlist: [
                "負責串接 API 、程式邏輯、功能需求規劃、前端版面規劃與頁面呈現",
                "改善現有專案，進行可重用性元件的設計，並進行更靈活的版面配置重構工作",
                "優化前端效能，減少載入時間與不必要的程式耗能，實現快速的網頁加載",
                "同PM、後端工程師與UI/UX設計師合作針對企劃需求進行優化與改善",
                "專案管理團隊 Git 版本控制",
                "熱衷與同事技術交流，共同提升合作開發效率",
            ],
            skills: ["React", "JavaScript", "HTML", "Sass/Scss", "Css", "Bootstrap", "WebSocket", "Git"],
        },
        {
            img: "company-taipay.webp",
            title: "Front-end developer",
            jobname: "台景達金融科技股份有限公司",
            begindate: "2022/6",
            enddate: "2023/3",
            jobtitle: "軟體設計工程師",
            jobwhere: "臺北市內湖區",
            content: "",
            contentlist: [
                "負責串接 API 與客製化專案維護與開發",
                "將產品從原型開發至正式上線，並同後端工程師與UI/UX設計師合作針對企劃需求進行優化與改善",
                "開發跨平台的響應式網頁(RWD)，確保在桌面、平板和手機等不同設備上均能良好運行",
                "使用 Sourcetree 進行專案管理團隊 Git 版本控制",
                "熱衷與同事技術分享，共同改善開發效率",
            ],
            skills: ["JavaScript", "jQuery", "HTML", "Sass/Scss", "Css", "ajax", "API", "ASP.NET", "C#", "Sourcetree", "Git"],
        }, {
            img: "company-stust.webp",
            title: "Teaching Assistant (TA)",
            jobname: "南臺學校財團法人南臺科技大學",
            begindate: "2021/9",
            enddate: "2022/5",
            jobtitle: "",
            jobwhere: "臺南市永康區",
            content: "",
            contentlist: [
                "文書處理、簡報製作",
                "跑公文及協助教授出課後習題",
                "批改學生作業、監考與成績資料輸入",
                "指導課堂及課後討論教材內容並進行問題解答",
            ],
            skills: ["規劃與執行教學活動", "文書處理╱排版能力", "文件或資料輸入建檔處理", "設計規劃教材及教具"],
        }, {
            img: "company-moli.webp",
            title: "Part-time worker",
            jobname: "魔力牛牛排館",
            begindate: "2019/6",
            enddate: "2021/4",
            jobtitle: "",
            jobwhere: "臺南市安南區",
            content: "",
            contentlist: [
                "接待服務、結帳收銀、點餐、介紹餐點及帶位",
                "現場臨機應變處理",
                "製作前菜餐點與點心、送餐",
                "周邊環境清潔、收拾內外場維持乾淨整潔狀態",
            ],
            skills: [],
        },
      ],
      todaytime: moment().format("YYYY-MM"),
      state_readmore: false,
    };
  },
  head() {
    return {
      title: `${this.$i18n.t('about')} | Kama's Blog`,
      htmlAttrs: {
        lang: this.$i18n.t('localeSetting'),
      },
      meta: [
        { hid: 'description', name: 'description', content: this.$i18n.t('indexmd') },
        { property: 'og:title', content: `${this.$i18n.t('about')} | Kama's Blog` },
        { property: 'og:description', content: this.$i18n.t('indexmd') },
        { property: 'og:locale', content: this.$i18n.t('localeSetting') }
      ],
    };
  },
  methods: {
    CountYear(end, start) {
      return moment(end).diff(start, "years");
    },
    CountMonth(end, start) {
      const diffyear = moment(end).diff(start, "years");
      const diffmonth = moment(end).diff(start, "months");
      return (diffmonth + 1) - (12 * diffyear);
    },
    ToggleReadmore() {
      this.state_readmore = !this.state_readmore;
    },
  },
};
</script>
<template>
    <div class="main pfl">
        <div class="about-bg"></div>
        
        <div class="about-content">
            <div class="circles">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                
                <aside class="warning">
                    <span>View in Chrome, Firefox or Safari for the best effect!</span>
                </aside>
            </div>
            <h2 class="font-weight-bold">Kama</h2>
            <p class="intro m-auto">A front-end developer obsessed with crafting and sharing beautiful experiences.</p>
            <div class="local font-weight-bold mt-2">
                <fa :icon="['fa-solid', 'location-dot']" style="margin-right: .25rem" title="Location"/>
                Tainan, Taiwan
            </div>
            <div class="profile-card-social mt-3 mb-3">
                <a
                  href="#"
                  target="_blank"
                  class="pcs-facebook"
                  title="Facebook"
                >
                    <fa :icon="['fa-brands', 'facebook-f']" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  class="pcs-twitter"
                  title="Twitter"
                >
                    <fa :icon="['fa-brands', 'twitter']" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  class="pcs-instagram"
                  title="Instagram"
                >
                    <fa :icon="['fa-brands', 'instagram']" />
                </a>
                <a
                  href="https://github.com/ReiKama414?tab=repositories"
                  target="_blank"
                  class="pcs-github"
                  title="Github"
                >
                    <fa :icon="['fa-brands', 'github']" />
                </a>
                <a
                  href="https://codepen.io/Rei_Kama414"
                  target="_blank"
                  class="pcs-codepen"
                  title="Codepen"
                >
                    <fa :icon="['fa-brands', 'codepen']" />
                </a>
                <a
                  href="https://discordapp.com/users/871649191338860564https://discordapp.com/users/871649191338860564"
                  target="_blank"
                  class="pcs-discord"
                  title="Discord"
                >
                    <fa :icon="['fa-brands', 'discord']" />
                </a>
                <a
                  href="mailto:milu77704@gmail.com"
                  target="_blank"
                  class="pcs-mail"
                  title="Mail"
                >
                    <fa :icon="['fa-solid', 'envelope']" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  class="pcs-weixin"
                  title="WeChat"
                >
                    <fa :icon="['fa-brands', 'weixin']" />
                </a>
            </div>
            <p>* {{ $t('profilecardsocial') }} σ`∀´)σ *</p>
            <!-- About Me -->
            <div class="divided-line p-r d-flex mt-5 font-weight-bold text-uppercase">
                <span class="px-4">● About Me</span>
            </div>
            <div class="d-flex flex-wrap justify-content-center">
                <div class="col-10 px-2">
                    <div class="inner-wrapper mt-4 text-left px-3" :class="{readmore: state_readmore}">
                        {{ $t('aboutme1') }}

                        {{ $t('aboutme2') }} 

                        {{ $t('aboutme3') }}

                        Personality Test：<a href="https://www.16personalities.com/ch/infj-%E4%BA%BA%E6%A0%BC" target="_blank" class="ud">INFJ-A / INFJ-T (提倡者/Advocate/提唱者)</a> (Reference(?))
                        Contact Information：<a href="mailto:milu77704@gmail.com" target="_blank" class="ud">milu77704@gmail.com</a>
                    </div>

                    <div class="btn-grp mt-3 mx-auto">
                        <button class="rm-btn font-weight-bold" title="Read More" @click="ToggleReadmore">
                            <span v-if="state_readmore">Read Less</span>
                            <span v-else>Read More</span>
                        </button>
                    </div>
                </div>
            </div>
            <!-- About Site -->
            <div class="divided-line p-l d-flex mt-5 font-weight-bold text-uppercase">
                <span class="px-4">About Site ●</span>
            </div>
            <div class="d-flex flex-wrap justify-content-center">
                <div class="col-10 px-2">
                    <div class="inner-wrapper site mt-4 text-left px-3">
                        {{ $t('aboutsite1') }}
                        
                        <b>{{ $t('aboutsite2') }}</b>
                        
                        <br /><br />

                        <mark>🎃 {{ $t('aboutsite3') }}：</mark> {{ $t('aboutsite4') }}
                    </div>
                </div>
            </div>
            <!-- Skill -->
            <div class="divided-line p-r d-flex mt-5 font-weight-bold text-uppercase">
                <span class="px-4">● Skills</span>
            </div>
            <div class="d-flex flex-wrap justify-content-center">
                <div class="col-10 px-2">
                    <div class="skill-wrapper mt-4">
                        <h3 class="mb-3">Programming Language</h3>
                        <h5 class="mb-3"><span>Proficiency</span></h5>
                        <div class="d-flex flex-wrap mb-4">
                            <div v-for="sn in skill_Proficiency" :key="sn" class="skill-item">
                                <picture>
                                    <source :srcset="require('~/assets/images/icons/logo-' + sn + '.webp')" type="image/webp">
                                    <img :alt="'logo ' + sn" :src="require('~/assets/images/icons/logo-' + sn + '.png')" :title="sn"/>
                                </picture>
                            </div>
                        </div>
                        <h5 class="mb-3"><span>Familiarity</span></h5>
                        <div class="d-flex flex-wrap mb-4">
                            <div v-for="sn in skill_Familiarity" :key="sn" class="skill-item">
                                <picture>
                                    <source :srcset="require('~/assets/images/icons/logo-' + sn + '.webp')" type="image/webp">
                                    <img :alt="'logo ' + sn" :src="require('~/assets/images/icons/logo-' + sn + '.png')" :title="sn"/>
                                </picture>
                            </div>
                        </div>
                        <h5 class="mb-3"><span>Tools</span></h5>
                        <div class="d-flex flex-wrap mb-3">
                            <div v-for="sn in skill_Tools" :key="sn" class="skill-item">
                                <picture>
                                    <source :srcset="require('~/assets/images/icons/logo-' + sn + '.webp')" type="image/webp">
                                    <img :alt="'logo ' + sn" :src="require('~/assets/images/icons/logo-' + sn + '.png')" :title="sn"/>
                                </picture>
                            </div>
                        </div>
                        <h3 class="mb-3">Database</h3>
                        <div class="d-flex flex-wrap justify-content-center mb-3">
                            <div v-for="sn in skill_Database" :key="sn" class="skill-item">
                                <picture>
                                    <source :srcset="require('~/assets/images/icons/logo-' + sn + '.webp')" type="image/webp">
                                    <img :alt="'logo ' + sn" :src="require('~/assets/images/icons/logo-' + sn + '.png')" :title="sn"/>
                                </picture>
                            </div>
                        </div>
                        <h3 class="mb-3">Office Application</h3>
                        <div class="d-flex flex-wrap justify-content-center mb-3">
                            <div v-for="sn in skill_Office" :key="sn" class="skill-item">
                                <picture>
                                    <source :srcset="require('~/assets/images/icons/logo-' + sn + '.webp')" type="image/webp">
                                    <img :alt="'logo ' + sn" :src="require('~/assets/images/icons/logo-' + sn + '.png')" :title="sn"/>
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Hobbies / Interests -->
            <div class="divided-line p-l d-flex mt-5 font-weight-bold text-uppercase">
                <span class="px-4">Hobbies / Interests ●</span>
            </div>
            <div class="d-flex flex-wrap justify-content-center">
                <div class="d-inline-flex flex-wrap justify-content-center col-10 px-2 mt-3">
                    <div v-for="hobby of hobbies" :key="hobby.title" class="hby-box m-2">
                        <fa :icon="['fa-solid', hobby.icon]" :title="hobby.title" />
                    </div>
                </div>
            </div>
            <!-- Experience -->
            <div class="divided-line p-r d-flex mt-5 font-weight-bold text-uppercase">
                <span class="px-4">● Experience</span>
            </div>
            <div class="d-flex flex-wrap justify-content-around m-ex">
                <!-- Education -->
                <h3 class="col-12 my-4 font-weight-bold"><span class="underline--effect1">&nbsp;🎓Education&nbsp;</span></h3>
                <div class="col-12 col-sm-6 p-3 mb-3">
                    <div class="ex-wrapper education p-2">
                        <img alt="bg-img" src="~/assets/images/background/NG.jpg" />
                        <h3>National Tainan Industrial High School</h3>
                        <h6>Dept. of Computer Science | Graduate</h6>
                        <p>2015/9 ~ 2018/6</p>
                    </div>
                </div>
                <div class="col-12 col-sm-6 p-3 mb-3">
                    <div class="ex-wrapper education p-2">
                        <img alt="bg-img" src="~/assets/images/background/NT.jpg" />
                        <h3>Southern Taiwan University of Science and Technology</h3>
                        <h6>Computer Science and Information Engineering | Graduate</h6>
                        <p>2018/6 ~ 2022/6</p>
                    </div>
                </div>
                <!-- Work Experience -->
                <h3 class="col-12 my-4 font-weight-bold"><span class="underline--effect1">&nbsp;💻Work Experience&nbsp;</span></h3>
                <div class="col-11 p-2">
                    <div v-for="wkei of wkeList" :key="wkei.begindate" class="ex-wrapper wke align-items-start pb-3 mb-3">
                        <img alt="company-logo" :src="require('~/assets/images/icons/' + wkei.img)" class="mr-3 mb-3" />
                        <div class="d-flex flex-column w-100 text-left">
                            <h3 class="font-weight-bold mb-1">{{ wkei.title }}</h3>
                            <span>{{ wkei.jobname }}</span>
                            <span v-if="wkei.enddate">
                                {{ wkei.begindate }} ~ {{ wkei.enddate }} · 
                                <span v-if="CountYear(wkei.enddate, wkei.begindate) > 0">{{ CountYear(wkei.enddate, wkei.begindate) }} 年</span> 
                                {{ CountMonth(wkei.enddate, wkei.begindate) }} 個月
                            </span>
                            <span v-else>
                                {{ wkei.begindate }} ~ 現在 · 
                                <span v-if="CountYear(todaytime, wkei.begindate) > 0">{{ CountYear(todaytime, wkei.begindate) }} 年</span> 
                                {{ CountMonth(todaytime, wkei.begindate) }} 個月
                            </span>
                            <span class="mb-2">
                                {{ wkei.jobtitle }}
                                <span v-if="wkei.jobtitle && wkei.jobwhere"> | </span>
                                {{ wkei.jobwhere }}
                            </span>
                            <div>
                                <div v-if="wkei.content" class="mb-1">
                                  {{ wkei.content }}
                                </div>
                                <ul class="mb-2">
                                    <li v-for="ci of wkei.contentlist" :key="wkei.contentlist.indexOf(ci)">{{ ci }}</li>
                                </ul>
                            </div>
                            <span v-if="wkei.skills.length != 0">Skills：
                                <em v-for="skill of wkei.skills" :key="wkei.skills.indexOf(skill)">{{ skill }} , </em>
                                etc.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
