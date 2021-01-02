/* eslint-disable */
// @ts-nocheck

export const ElFormInput = {
  template: `
  <el-form-item :label="label" :prop="prop">
    <el-input :type="type" v-model="VModel" :clearable="clearable" :size="size" :placeholder="placeholder"></el-input>
  </el-form-item>
  `,
  // render (h) {
  //   return h('el-form-item', {
  //       props: {
  //         label: this.label,
  //         prop: this.prop
  //       },
  //       style: {},
  //       on: {}
  //     },
  //     [h('el-input', {
  //         attr: {},
  //         props: {
  //           type: this.type,
  //           value: this.value,
  //           clearable: this.clearable,
  //           size: this.size,
  //           placeholder: this.placeholder, // render函数下 不知道为啥暂时不起作用
  //         },
  //         domProps: {},
  //         style: {},
  //         'class': {},
  //         on: {
  //           input: (v) => {
  //             console.log(v)
  //             this.$emit('upvalue', v)
  //           }
  //         }
  //       },
  //       []
  //     )]
  //   )
  // },
  computed: {
    VModel: {
      get () {
        return this.value
      },
      set (v) {
        this.$emit('upvalue', v)
      }
    }
  },
  model: {
    prop: 'value',
    event: 'upvalue'
  },
  props: {
    label: {
      type: String
    },
    prop: {
      type: String | Object | Array | Function
    },
    type: {
      type: String,
      default: () => {
        return 'text'
      }
    },
    value: {
      type: String | Object | Array
    },
    placeholder: {
      type: String,
      default: () => {
        return ''
      }
    },
    clearable: {
      type: Boolean
    },
    size: {
      type: String
    }
  }
}
const ElFormSelect = {}
const ElFormDatePicker = {}
