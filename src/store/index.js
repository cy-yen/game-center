import { defineStore } from 'pinia'

export const useStore = defineStore('auth', {
  state: () => {
    return { userInfo: {}, defaultInfo: {}, games: [] }
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
    }
  },
  getters: {
    imageServerPath: (state) => state.defaultInfo.Web_Set_DefaultInfo.imgserver_url.v
  }
})
