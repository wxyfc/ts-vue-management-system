// @ts-nocheck
// 处理vuex
import store from '@store'

// 获取用户信息
export function userInfo () {
  return JSON.parse(JSON.stringify(store.getters.getUserInfo))
}

// 获取其他信息
export function otherInfo () {
  return JSON.parse(JSON.stringify(store.getters.getOtherInfo))
}

// 获取一次性信息
export function briefInfo () {
  return JSON.parse(JSON.stringify(store.getters.getBriefInfo))
}

// 获取系统信息
export function systemInfo () {
  return JSON.parse(JSON.stringify(store.getters.getSystemInfo))
}

// 设置用户的信息
export function setUserInfo (v: object) {
  store.dispatch('upVuex', {
    mutations: 'setUserInfo',
    value: v
  })
}

// 最后更改用户的信息
export function lastUserInfo (v = {}) {
  store.dispatch('upVuex', {
    mutations: 'lastUserInfo',
    value: v
  })
}

// 删除用户的信息
export function deleteUserInfo (v: [string, string[]]) {
  store.dispatch('upVuex', {
    mutations: 'deleteUserInfo',
    value: v
  })
}

// 设置其他的信息
export function setOtherInfo (v: object) {
  store.dispatch('upVuex', {
    mutations: 'setOtherInfo',
    value: v
  })
}

// 删除其他的信息
export function deleteOtherInfo (v: [string, string[]]) {
  store.dispatch('upVuex', {
    mutations: 'deleteOtherInfo',
    value: v
  })
}

// 设置临时的信息
export function setBriefInfo (v: object) {
  store.dispatch('upVuex', {
    mutations: 'setBriefInfo',
    value: v
  })
}

// 删除临时的信息
export function deleteBriefInfo (v: [string, string[]]) {
  store.dispatch('upVuex', {
    mutations: 'deleteBriefInfo',
    value: v
  })
}

// 设置系统的信息
export function setSystemInfo (v: object) {
  store.dispatch('upVuex', {
    mutations: 'setSystemInfo',
    value: v
  })
}

// 清空除系统以外的信息
export function clearVuex (v: [string, string[]]) {
  store.dispatch('upVuex', {
    mutations: 'clearVuex',
    value: v
  })
}
