import { createI18n } from 'vue-i18n'
import cn from "./../assets/lang/zh-CN.json";
import en from "./../assets/lang/en-US.json";
const i18n = createI18n({
    locale: "cn",
    fallbackLocale: "cn",
    messages: {
        cn,
        en,
    },
});

export default i18n;