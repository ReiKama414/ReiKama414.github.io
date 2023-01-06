<script>
import logJsonCht from '../assets/data/log_zh-CHT.json';
import logJsonChs from '../assets/data/log_zh-CHS.json';
import logJsonEn from '../assets/data/log_en.json';
import logJsonJa from '../assets/data/log_ja.json';
export default {
    data() {
        return {
            logs: [],
            sm_state: false,
        };
    },
    computed: {
        i18nlogjson() {
            this.change_locale();
            return this.logs;
        },
    },
    methods: {
        change_locale() {
            switch(this.$i18n.locale) {
                case 'zh-CHS':
                    this.logs = logJsonChs;
                    break; 
                case 'en':
                    this.logs = logJsonEn;
                    break; 
                case 'ja':
                    this.logs = logJsonJa;
                    break;
                default:
                    this.logs = logJsonCht;
                    break;
            }
        },
        ToggleShowmore() {
            this.sm_state = !this.sm_state;
        },
    },
};
</script>

<template>
  <div class="main">
    <CatHeaderItem :imgsrc="'art7.jpg'" />
    <div class="timeline-wrapper card-widget text-left p-3 pl-4 position-relative" :class="{showmore: sm_state}">
        <ul class="timeline pb-4">
            <li v-for="(log, index) of i18nlogjson" :key="index" class="tl-item">
                <div class="tl-content ml-4">
                    <span>{{ log.date }}</span>
                    <div v-if="log.content">{{ log.content }}</div>
                    <ol v-if="log.content_list != '' || log.content_list != null">
                        <li v-for="lc of log.content_list" :key="lc">{{ lc }}</li>
                    </ol>
                </div>
            </li>
        </ul>
        <div class="sm-overlay d-flex justify-content-center">
            <button class="my-3 px-3 py-2" @click="ToggleShowmore">
                <span class="font-weight-bold">
                    Show more
                </span>
            </button>
        </div>
    </div>
  </div>
</template>