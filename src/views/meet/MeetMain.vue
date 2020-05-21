<template>
  <div class="meet-main">
    <div class="head" @click="setLayout('_header','_large','_main')">
      <SystemLayoutHeader></SystemLayoutHeader>
    </div>
    <div class="aside" @click="setLayout('_aside','_medium','_high')">aside==========aside=========aside===========aside==========aside============aside=========aside</div>
    <div class="section">
      <div class="nav">
        nav======nav========nav=========nav========nav==========nav=========nav==============nav==========nav======nav========nav=========nav========nav==========nav=========nav==============nav==========nav======nav========nav=========nav========nav==========nav=========nav==============nav==========nav======nav========nav=========nav========nav==========nav=========nav==============nav==========
      </div>
      <div class="main" @click="setLayout('_aside','_small','_dull')">main===========main===========main===========main===========main===========main===========</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { setLayout, setFont, setTheme } from '@function/projectActivity'

@Component({
  components: {
    SystemLayoutHeader: () => import('@system/SystemLayoutHeader')
  }
})
export default class MeetMain extends Vue {
  setLayout (type: string, font: string, color: string) {
    setLayout(type)
    setFont(font)
    setTheme(color)
  }

  // created () {
  // }
}
</script>
<style scoped lang="scss">
  .meet-main {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 50px calc(100% - 50px);
    grid-template-columns: 200px calc(100% - 200px);
    @include _layout;
    .head, .aside, .nav {
      word-wrap: break-word;
      word-break: normal;
      @include _font-size("_title");
    }
    .head {
      grid-area: head;
      @include _background("_vice-color");
    }
    .aside {
      grid-area: aside;
      @include _background("_theme-color");
    }
    .section {
      grid-area: section;
      .nav {
        white-space: nowrap;
        line-height: 30px;
        width: 100%;
        height: 30px;
        overflow: hidden;
        &:hover {
          overflow-x: auto;
        }
        &::-webkit-scrollbar {
          height: 7px !important;
        }
      }
      .main {
        width: 100%;
        height: calc(100% - 30px);
      }
    }
  }
</style>
