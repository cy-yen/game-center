import { defineStore } from 'pinia'
import i18n from './../utils/i18n'

const v_handler = (tree) => {
  let obj = tree

  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === 'object') {
      if (obj[key]?.v.length > 1) {
        obj[key] = obj[key]?.v
      } else {
        obj[key] = Number(obj[key]?.v)
      }
    } else {
      if (obj[key]?.length == 1) {
        obj[key] = Number(obj[key])
      }
    }
  })
  return obj
}

export const useStore = defineStore('auth', {
  state: () => {
    return { userInfo: {}, defaultInfo: {}, games: [], language: '' }
  },
  // 状态持久化
  persist: { key: 'store', storage: window.sessionStorage },
  actions: {
    // 设定用户登入讯息
    setUserInfo(data) {
      this.userInfo = data
      this.setLanguage(data.info?.set_lang)
    },
    // 设定站点基本配置
    setDefaultInfo(data) {
      this.defaultInfo = data
    },
    // 设置游戏列表
    setGames(data) {
      this.games = data
    },
    // 设置系统语言
    setLanguage(data) {
      this.language = data
      i18n.global.locale = data
    }
  },
  getters: {
    // 获取图片服务器地址
    imageServerPath: (state) => state.defaultInfo.Web_Set_DefaultInfo?.imgserver_url.v,
    // 获取可转换语言清单
    avaliableLanguage: (state) => state.defaultInfo.SYS_SET_LANG_APICONFIG?.list_lang.filter((e) => e.enable === 1),
    reg_info: (state) => v_handler(state.defaultInfo.Web_Set_WebReg)
  }
})
