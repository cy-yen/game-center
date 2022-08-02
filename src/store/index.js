import { defineStore } from 'pinia'
import i18n from './../utils/i18n'

export const useStore = defineStore('auth', {
  state: () => {
    return { userInfo: {}, defaultInfo: {}, games: [], language: '' }
  },
  persist: { key: 'store', storage: window.sessionStorage },
  actions: {
    setUserInfo(data) {
      this.userInfo = data
    },
    setDefaultInfo(data) {
      this.defaultInfo = data
    },
    setGames(data) {
      this.games = data
    },
    setLanguage(data) {
      this.language = data
      i18n.global.locale = data
    }
  },
  getters: {
    imageServerPath: (state) => state.defaultInfo.Web_Set_DefaultInfo?.imgserver_url.v,
    avaliableLanguage: (state) => state.defaultInfo.SYS_SET_LANG_APICONFIG?.list_lang.filter((e) => e.enable === 1)
  }
})
