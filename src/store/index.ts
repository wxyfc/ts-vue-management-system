/* eslint-disable */
// @ts-nocheck

import Vue from 'vue'
import Vuex from 'vuex'
import { inspectType } from '@function/utilsFunction'

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
    systemInfo: { // 系统信息
      initPorject: false, // 是否初始化过项目
      elementNavMenu: 'vertical', // element 菜单栏的显示方式垂直或者水平  vertical / horizontal 屏幕小于996px会被改为水平
      systemScreenSize: 'large' // 当前屏幕的大小 大屏或者小屏 large / small 屏幕小于996px会被改为小屏
      // systemFontSize: '_small', // 当前系统字体大小
      // systemTheme: '_main', // 当前系统主题
      // systemLayout: '_header' // 当前系统布局 仅在 large 大屏下生效
    }
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
    /*
    * 设置用户信息
    * value 传入object格式
    * 会进行遍历将key和value进行同等存贮
    * */
    setUserInfo (state: STATEIFY, value) {
      for (const key in value) {
        Vue.set(state.userInfo, key, value[key])
      }
    },
    /*
    * 设置用户信息最后更改时间
    * value 传入object格式
    * 两个属性key 1.date  2.second 可都传 可不传
    * 如: {
    *       date:2020/6/26 下午11:14:58
    *       second:1593184541587
    *      }
    * */
    lastUserInfo (state: STATEIFY, value = {}) {
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
    /*
   * 删除用户信息
   * value 1.可传string类型 2.可传array类型
   * 1.传string;则清空userInfo中的key==string的值
   * 2.传array;则遍历清空userInfo中的符合array中的每一项的值
   * */
    deleteUserInfo (state: STATEIFY, value) {
      if (inspectType(value) === 'string') {
        Vue.delete(state.userInfo, value)
      } else if (inspectType(value) === 'array') {
        for (const key in value) {
          Vue.delete(state.userInfo, value[key])
        }
      }
    },
    /*
   * 设置其他信息
   * value 传入object格式
   * 会进行遍历将key和value进行同等存贮
   * */
    setOtherInfo (state: STATEIFY, value) {
      for (const key in value) {
        Vue.set(state.otherInfo, key, value[key])
      }
    },
    /*
   * 删除其他信息
   * value 1.可传string类型 2.可传array类型
   * 1.传string;则清空otherInfo中的key==string的值
   * 2.传array;则遍历清空otherInfo中的符合array中的每一项的值
   * */
    deleteOtherInfo (state: STATEIFY, value) {
      if (inspectType(value) === 'string') {
        Vue.delete(state.otherInfo, value)
      } else if (inspectType(value) === 'array') {
        for (const key in value) {
          Vue.delete(state.otherInfo, value[key])
        }
      }
    },
    /*
    * 设置一次性信息
    * value 传入object格式
    * 会进行遍历将key和value进行同等存贮
    * */
    setBriefInfo (state: STATEIFY, value) {
      for (const key in value) {
        Vue.set(state.briefInfo, key, value[key])
      }
    },
    /*
    * 删除一次性信息
    * value 1.可传string类型 2.可传array类型
    * 1.传string;则清空briefInfo中的key==string的值
    * 2.传array;则遍历清空briefInfo中的符合array中的每一项的值
    * */
    deleteBriefInfo (state: STATEIFY, value) {
      if (inspectType(value) === 'string') {
        Vue.delete(state.briefInfo, value)
      } else if (inspectType(value) === 'array') {
        for (const key in value) {
          Vue.delete(state.briefInfo, value[key])
        }
      }
    },
    /*
    * 设置系统信息
    * value 传入object格式
    * 会进行遍历将key和value进行同等存贮
    * */
    setSystemInfo (state: STATEIFY, value) {
      for (const key in value) {
        Vue.set(state.systemInfo, key, value[key])
      }
    },
    /*
    *  清空vuex所有信息
    *  value 1.可不传 2.可传string类型 3.可传array类型
    *  1.不传则清空stateList中声明的state中已有的对象
    *  2.传string;如:userInfo 则清空state中的userInfo
    *  3.传array; 如:['briefInfo', 'systemInfo'] 则取传入的array和stateList的交集 目前也就是 'briefInfo', 'systemInfo' 进行清空
    * */

    clearVuex (state: STATEIFY, value) {
      const stateList = ['userInfo', 'otherInfo', 'briefInfo', 'systemInfo']
      if (inspectType(value) === 'undefiend') {
        for (const key in stateList) {
          state[stateList[key]] = {}
        }
      } else if (inspectType(value) === 'string') {
        state[value] = {}
      } else if (inspectType(value) === 'array') {
        let filValue = stateList.filter(x => value.includes(x))
        for (const key in filValue) {
          state[filValue[key]] = {}
        }
      }
      // if (inspectType(value) === 'undefiend' || (inspectType(value) === 'string' && value === 'userInfo') || (inspectType(value) === 'array' && value.includes('userInfo'))) {
      //   state.userInfo = {}
      // }
      // if (inspectType(value) === 'undefiend' || (inspectType(value) === 'string' && value === 'otherInfo') || (inspectType(value) === 'array' && value.includes('otherInfo'))) {
      //   state.otherInfo = {}
      // }
      // if (inspectType(value) === 'undefiend' || (inspectType(value) === 'string' && value === 'briefInfo') || (inspectType(value) === 'array' && value.includes('briefInfo'))) {
      //   state.briefInfo = {}
      // }
      // if (inspectType(value) === 'undefiend' || (inspectType(value) === 'string' && value === 'systemInfo') || (inspectType(value) === 'array' && value.includes('systemInfo'))) {
      //   state.systemInfo = {}
      // }
    }
  },
  actions: {
    upVuex (context, data) {
      // 自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性
      context.commit(data.mutations, data.value)
    }
  }
})
