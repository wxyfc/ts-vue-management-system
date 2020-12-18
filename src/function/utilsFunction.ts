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

export function styleProperty (key, value) {
  document.body.style.setProperty(key, value)
}
