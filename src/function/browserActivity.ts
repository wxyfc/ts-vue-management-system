/* eslint-disable */
// 操作浏览器的事件
const projectName = 'ts-vue-management_'
const projectVersion = '1.0.0_'

interface LOCALDATA {
  [key: string]: any;
}

export function getBrowserLanguage () {
  // 获取浏览器的当前语言
  return navigator.language
}

export function getLocal (key: string, value: any) {
  // 获取localStorage的value
  const ls = window.localStorage
  let data = JSON.parse(ls.getItem(projectName + projectVersion) || '{}')
  if (key === (projectName + projectVersion)) {
    return data
  } else if (projectName + projectVersion + key in data) {
    return data[projectName + projectVersion + key]
  }
  return value
}

export function setLocal (key: string, value: any) {
  // 设置localStorage的value
  const ls = window.localStorage
  const data: LOCALDATA = getLocal(projectName + projectVersion, {})
  data[projectName + projectVersion + key] = value
  ls.setItem(projectName + projectVersion, JSON.stringify(data))
}

export function removeLocal (key: string) {
  // 移除localStorage的value
  const ls = window.localStorage
  const data: LOCALDATA = getLocal(projectName + projectVersion, {})
  delete data[projectName + projectVersion + key]
  ls.setItem(projectName + projectVersion, JSON.stringify(data))
}

export function clearLocal () {
  // 清除localStorage的value
  window.localStorage.clear()
}

