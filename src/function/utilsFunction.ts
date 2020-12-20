/* eslint-disable */
// @ts-nocheck
// 工具函数

// 检查数据类型
export function inspectType (obj: any) {
  const dataType: object = {
    '[object Null]': 'null',
    '[object Undefined]': 'undefiend',
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regexp',
    '[object Object]': 'object',
    '[object Error]': 'error'
  }, toString: any = Object.prototype.toString
  return dataType[toString.call(obj)]
}

export function setProperty (key, value) {
  window.document.body.style.setProperty(key, value)
}

export function setAttribute (key, value) {
  window.document.documentElement.setAttribute(key, value)
}

export function formData (item) {
  //转换成表单
  const form = new FormData()
  for (let key in item) {
    form.append(key, item[key])
  }
  // 对象用in的话是key
  // 数组用of的情况下是原值
  const entries = form.entries()
  for (let entry of entries) {
    console.log(entry[0], entry[1])
  }
  // for (; ;) {
  //   let i = entries.next();
  //   if (i.done) break;
  // }
  return form
}

export function JSONCopy (v) {
  return JSON.parse(JSON.stringify(v))
}

export function only (text = '') {
  let diff = 0
  do
    diff = Math.floor(Math.random() * 10000)
  while ( diff < 1000 )
  return text + new Date().getTime() + diff
}

// // 自执行函数写法
// (function (text) {
//   console.log(text)
// }('我传入的值'))

// 只要前面加操作符就可以
// !function () {
//
// }()
