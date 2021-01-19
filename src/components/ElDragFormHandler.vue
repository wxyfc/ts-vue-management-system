<template>
  <div class="el-drag-form-handler-main" id="el-drag-form-handler-main">
    <el-form label-width="100px" class="el-drag-form-class">
      <el-form-item :label="$t('navbar.title.drag area')">
        <p class="tip-class">{{ $t('tip.experience.long click drag') }}</p>
      </el-form-item>
      <div v-drag-inserted:ElFormInput@el-drag-form-viewer@el-drag-form-handler-main="handlerDrag">
        <ElFormInput :label="$t('label.form.input')" :placeholder="$t('placeholder.form.input')"></ElFormInput>
      </div>
      <div v-drag-inserted:ElFormSelect@el-drag-form-viewer@el-drag-form-handler-main="handlerDrag">
        <ElFormSelect :label="$t('label.form.select')" :placeholder="$t('placeholder.form.select')"></ElFormSelect>
      </div>
      <div v-drag-inserted:ElFormDatePicker@el-drag-form-viewer@el-drag-form-handler-main="handlerDrag">
        <ElFormDatePicker :label="$t('label.form.datepicker')" :placeholder="$t('placeholder.form.datepicker')" type="date"></ElFormDatePicker>
      </div>
    </el-form>
    <div id="el-drag-form-viewer">
      <ElDragFormViewer :viewer="viewer"></ElDragFormViewer>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
// @ts-nocheck

import { Component, Prop, Mixins, Inject } from 'vue-property-decorator'
import infoMixin from '@/mixin/infoMixin.ts'
import { ElFormInput, ElFormSelect, ElFormDatePicker } from '@/components/ElDragFormComponents.ts'
import ElDragFormViewer from './ElDragFormViewer.vue'
import { JSONCopy } from '@/function/utilsFunction.ts'

@Component({
  components: {
    ElFormInput,
    ElFormSelect,
    ElFormDatePicker,
    ElDragFormViewer
  }
})
export default class ElDragFormHandler extends Mixins(infoMixin) {
  // @Prop({
  //   type: Boolean, // 父组件传递给子组件的数据类型
  //   required: false, // 是否必填
  //   default: () => { // 默认值， 如果传入的是 Object，则要 default: ()=>({}) 参数为函数
  //     return false
  //   }
  // }) show !: number; // number 可以不指定

  // @Watch('show', { immediate: true, deep: true })
  // onShowChanged (v) {
  // ...
  // }

  get viewer (): object[] {
    let viewerList = []
    let config = {
      ElFormInput: {
        label: this.$t('label.form.input'),
        placeholder: this.$t('placeholder.form.input')
      },
      ElFormSelect: {
        label: this.$t('label.form.select'),
        placeholder: this.$t('placeholder.form.select')
      },
      ElFormDatePicker: {
        label: this.$t('label.form.datepicker'),
        placeholder: this.$t('placeholder.form.datepicker')
      }
    }
    console.log(config)
    let viewerObj = JSONCopy(this.handViewer)
    for (let key in viewerObj) {
      if (viewerObj.hasOwnProperty(key)) {
        let e = viewerObj[key]
        viewerList.push({
          component: e.source,
          type: e.type,
          label: config[e.source].label,
          placeholder: config[e.source].placeholder,
          value: e.id
        })
      }
    }
    return viewerList
  }

  // set testComputed (newRely: Boolean) {
  //   this.rely = newRely
  // }


  handViewer = {}

  handlerDrag (v) {
    if (v.type) {
      this.$set(this.handViewer, v.id, v)
    } else {
      this.$delete(this.handViewer, v.id)
    }
    console.log(v)
  }

  mounted () {
    //渲染
  }

}
</script>
<style scoped lang="scss">
  .el-drag-form-handler-main {
    width: 100%;
    height: 100%;
    .el-drag-form-class {
      vertical-align: top;
      display: inline-block;
      width: 330px;
      margin-right: 20px;
      padding: 10px;
      box-sizing: border-box;
      height: 100%;
      margin-bottom: 20px;
      @include _border-box-shadow;
    }
    #el-drag-form-viewer {
      display: inline-block;
      width: calc(100% - 350px);
      height: 100%;
      min-width: 350px;
      margin-bottom: 20px;
    }
    /deep/ .el-input {
      width: 200px;
    }
  }
</style>
