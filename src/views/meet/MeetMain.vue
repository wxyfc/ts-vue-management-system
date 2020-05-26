<template>
  <div class="meet-main">
    <div class="head" @click="setLayout('_header','_large','_main')">
      <SystemLayoutHeader></SystemLayoutHeader>
    </div>
    <div class="aside" @click="setLayout('_aside','_medium','_high')">
      <SystemLayoutAside></SystemLayoutAside>
    </div>
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
    SystemLayoutHeader: () => import('@system/SystemLayoutHeader'),
    SystemLayoutAside: () => import('@system/SystemLayoutAside')
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
  $head-height: 50px;
  $aside-width: 200px;
  $aside-height: 70px;
  $nav-height: 30px;
  @media only screen and (min-width: 996px) {
    .meet-main {
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-rows: $head-height calc(100% - #{$head-height});
      grid-template-columns: $aside-width calc(100% - #{$aside-width});
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
          line-height: $nav-height;
          width: 100%;
          height: $nav-height;
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
          height: calc(100% - #{$nav-height});
        }
      }
    }
  }

  @media only screen and (max-width: 996px) {
    .meet-main {
      width: 100%;
      height: 100%;
      .head {
        width: 100%;
        height: $head-height;
      }
      .aside {
        width: 100%;
        height: $aside-height;
      }
      .section {
        width: 100%;
        height: calc(100% - #{ $head-height + $aside-height});
        .nav {
          display: none;
        }
        .main {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
