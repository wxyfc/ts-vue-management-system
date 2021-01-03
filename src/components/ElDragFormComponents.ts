/* eslint-disable */
// @ts-nocheck

export const ElFormInput = {
  template: `
  <el-form-item :label="label" :prop="prop">
    <el-input v-model="VModel" :type="type" :clearable="clearable" :size="size" :placeholder="placeholder"></el-input>
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
export const ElFormSelect = {
  template: `
  <el-form-item :label="label" :prop="prop">
    <el-select v-model="VModel" :clearable="clearable" :size="size" :placeholder="placeholder" :multiple="multiple">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </el-form-item>
  `,
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
    multiple: {
      type: Boolean
    },
    options: {
      type: Array,
      default: () => {
        return []
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
export const ElFormDatePicker = {
  template: `
  <el-form-item :label="label" :prop="prop">
     <el-date-picker v-model="VModel" :format="format[type]" :value-format="format[type]" :type="type" 
     :clearable="clearable" :size="size" :placeholder="placeholder"></el-date-picker>
  </el-form-item>
  `,
  computed: {
    VModel: {
      get () {
        return this.value
      },
      set (v) {
        this.$emit('upvalue', v)
      }
    },
    format () {
      return {
        year: 'yyyy',
        month: 'yyyy-MM',
        date: 'yyyy-MM-dd',
        dates: 'yyyy-MM-dd',
        week: '周一开始日期 yyyy-MM-dd',
        datetime: 'yyyy-MM-dd HH:mm:ss',
        datetimerange: 'yyyy-MM-dd HH:mm:ss',
        daterange: 'yyyy-MM-dd',
        monthrange: 'yyyy-MM'
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
        return 'date'
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
