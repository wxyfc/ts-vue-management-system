/* eslint-disable */
// @ts-nocheck
import i18n from '@/i18n'

const err = (t) => {
  return new Error(t)
}
const Alphanumeric = {
  rule: /^[A-Za-z0-9]+$/,
  tip: 'A-Z,a-z,0-9.'
}
export default {
  inputLengthRule: function (text = i18n.tc('tip.form rule.that item'), len = 10) {
    return [
      {
        validator: (rule, value, callback) => {
          if (!value || value === '') {
            callback(err(text + i18n.tc('tip.form rule.not null')))
          } else if (!Alphanumeric.rule.test(value)) {
            callback(err(text + i18n.tc('tip.form rule.format error') + ',' + i18n.tc('tip.form rule.rule') + Alphanumeric.tip))
          } else if (value.length < len) {
            callback(err(text + i18n.tc('tip.form rule.length error') + ',' + i18n.tc('tip.form rule.rule') + len))
          } else {
            callback()
          }
        }, trigger: 'blur'
      }
    ]
  }
}
