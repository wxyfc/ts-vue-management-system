import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

interface STATEIFY {
  userInfo: object;
  otherInfo: object;
  briefInfo: object;
  systemInfo: object;
}

export default new Vuex.Store({
  state: {
    userInfo: {}, // 用户信息
    otherInfo: {}, // 其他信息
    briefInfo: {}, // 一次性信息 不会保存在本地 刷新就会消失
    systemInfo: {
      initPorject: false, // 是否初始化过项目
      elementNavMenu: 'vertical', // element 菜单栏的显示方式垂直或者水平  vertical / horizontal 屏幕小于996px会被改为水平
      screenSize: 'large' // 当前屏幕的大小 大屏或者小屏 large / small 屏幕小于996px会被改为小屏
    } // 系统信息
  },
  getters: {
    getUserInfo (state: STATEIFY) {
      // 获取用户信息
      return state.userInfo
    },
    getOtherInfo (state: STATEIFY) {
      // 获取其他信息
      return state.otherInfo
    },
    getBriefInfo (state: STATEIFY) {
      // 获取一次性信息
      return state.briefInfo
    },
    getSystemInfo (state: STATEIFY) {
      // 获取系统信息
      return state.systemInfo
    }
  },
  mutations: {
    setUserInfo (state: STATEIFY, value) { // 设置用户信息
      for (const key in value) {
        Vue.set(state.userInfo, key, value[key])
      }
    },
    lastUserInfo (state: STATEIFY, value = {}) { // 设置用户信息最后更改时间
      const time = new Date()
      let date
      if ('date' in value) {
        date = value.date
      } else {
        date = time.toLocaleString()
      }
      let second
      if ('second' in value) {
        second = value.second
      } else {
        second = time.getTime()
      }
      Vue.set(state.userInfo, 'lastTime', { date, second })
    },
    deleteUserInfo (state: STATEIFY, value) { // 删除用户信息
      Vue.delete(state.userInfo, value.key)
    },
    setOtherInfo (state: STATEIFY, value) { // 设置其他信息
      for (const key in value) {
        Vue.set(state.otherInfo, key, value[key])
      }
    },
    deleteOtherInfo (state: STATEIFY, value) { // 删除其他信息
      Vue.delete(state.otherInfo, value.key)
    },
    setBriefInfo (state: STATEIFY, value) { // 设置一次性信息
      for (const key in value) {
        Vue.set(state.briefInfo, key, value[key])
      }
    },
    deleteBriefInfo (state: STATEIFY, value) { // 删除一次性信息
      Vue.delete(state.briefInfo, value.key)
    },
    setSystemInfo (state: STATEIFY, value) { // 设置系统信息
      for (const key in value) {
        Vue.set(state.systemInfo, key, value[key])
      }
    },
    clearVuex (state: STATEIFY) { // 清空vuex所有信息
      state.userInfo = {}
      state.otherInfo = {}
      state.briefInfo = {}
    }
  },
  actions: {
    upVuex (context, data) { // 自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性
      context.commit(data.mutations, data.value)
    }
  }
})
