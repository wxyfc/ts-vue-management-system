import { Component, Vue } from 'vue-property-decorator'
import {
  userInfo,
  otherInfo,
  briefInfo,
  systemInfo,
  setUserInfo,
  lastUserInfo,
  deleteUserInfo,
  setOtherInfo,
  deleteOtherInfo,
  setBriefInfo,
  deleteBriefInfo,
  setSystemInfo,
  clearVuex
} from '@function/handlerVuex'

@Component
export default class InfoMixin extends Vue {
  // 获取用户信息
  get userInfo (): object {
    return userInfo()
  }

  // 获取其他信息
  get otherInfo (): object {
    return otherInfo()
  }

  // 获取一次性信息
  get briefInfo (): object {
    return briefInfo()
  }

  // 获取系统信息
  get systemInfo (): object {
    return systemInfo()
  }

  // 设置用户的信息
  setUserInfo (v: object) {
    setUserInfo(v)
    // this.$store.dispatch('upVuex', {
    //   mutations: 'setUserInfo',
    //   value: v
    // })
  }

  // 最后更改用户的信息
  lastUserInfo (v = {}) {
    lastUserInfo(v)
    // this.$store.dispatch('upVuex', {
    //   mutations: 'lastUserInfo',
    //   value: v
    // })
  }

  // 删除用户的信息
  deleteUserInfo (k: [string, string[]]) {
    deleteUserInfo(k)
    // this.$store.dispatch('upVuex', {
    //   mutations: 'deleteUserInfo',
    //   value: {
    //     key: k
    //   }
    // })
  }

  // 设置其他的信息
  setOtherInfo (v: object) {
    setOtherInfo(v)
    // this.$store.dispatch('upVuex', {
    //   mutations: 'setOtherInfo',
    //   value: v
    // })
  }

  // 删除其他的信息
  deleteOtherInfo (k: [string, string[]]) {
    deleteOtherInfo(k)
    // this.$store.dispatch('upVuex', {
    //   mutations: 'deleteOtherInfo',
    //   value: {
    //     key: k
    //   }
    // })
  }

  // 设置临时的信息
  setBriefInfo (v: object) {
    setBriefInfo(v)
    // this.$store.dispatch('upVuex', {
    //   mutations: 'setBriefInfo',
    //   value: v
    // })
  }

  // 删除临时的信息
  deleteBriefInfo (k: [string, string[]]) {
    deleteBriefInfo(k)
    // this.$store.dispatch('upVuex', {
    //   mutations: 'deleteBriefInfo',
    //   value: {
    //     key: k
    //   }
    // })
  }

  // 设置系统的信息
  setSystemInfo (v: object) {
    setSystemInfo(v)
    // this.$store.dispatch('upVuex', {
    //   mutations: 'setSystemInfo',
    //   value: v
    // })
  }

  // 清空除系统以外的信息
  clearVuex (k: [string, string[]]) {
    clearVuex(k)
    // this.$store.dispatch('upVuex', {
    //   mutations: 'clearVuex',
    //   value: {}
    // })
  }
}
