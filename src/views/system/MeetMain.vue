<template>
  <div class="meet-main">
    <div class="head">
      <SystemLayoutHeader></SystemLayoutHeader>
    </div>
    <div class="aside">
      <SystemLayoutAside></SystemLayoutAside>
    </div>
    <div class="section">
      <div class="nav" v-if="isNav=='true'">
        <SystemLayoutNav></SystemLayoutNav>
      </div>
      <div class="main">
        <div class="handler-main-content">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { styleProperty } from '@function/utilsFunction'

@Component({
  components: {
    SystemLayoutHeader: () => import('@system/SystemLayoutHeader'),
    SystemLayoutAside: () => import('@system/SystemLayoutAside'),
    SystemLayoutNav: () => import('@system/SystemLayoutNav')
  }
})
export default class MeetMain extends Vue {
  isNav = process.env.VUE_APP_NAV_TAG

  created () {
    if (this.isNav === 'true') {
      styleProperty('--nav-height', '50px')
    } else {
      styleProperty('--nav-height', '0px')
    }
  }
}
</script>
<style scoped lang="scss">
  $head-height: 60px;
  $aside-width: var(--aside-width, 200px);
  $aside-height: 70px;
  $nav-height: var(--nav-height, 50px);
  $layout-padding: 8px;
  @mixin _layout-padding {
    box-sizing: border-box;
    padding: $layout-padding 12px;
    border-radius: 5px;
  }

  .head, .aside, .nav, .main {
    word-break: break-all;
    @include _font-size('_title');
  }

  .meet-main {
    background: rgba(244, 244, 244, 0.5);
    .section {
      overflow: hidden;
    }
    /deep/ .handler-main-content {
      width: 100%;
      height: 100%;
      overflow: auto;
      padding: 30px 18px;
      box-sizing: border-box;
      background: #FFFFFF;
      @include _border-box-shadow;
    }
  }

  @media only screen and (min-width: 996px) {
    .meet-main {
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-rows: $head-height calc(100% - #{$head-height});
      grid-template-columns: $aside-width calc(100% - #{$aside-width});
      @include _layout;
      .head {
        grid-area: head;
        @include _background("_head-color");
        @include _color("_color");
        position: relative;
        z-index: 2;
        &::before {
          content: '';
          z-index: 1;
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 1px;
          @include _border-box-shadow;
          // @include _background("_border-color");
        }
      }
      .aside {
        grid-area: aside;
        @include _background("_theme-color");
        position: relative;
        z-index: 2;
        &::before {
          content: '';
          z-index: 1;
          position: absolute;
          top: $head-height;
          right: -1px;
          width: 1px;
          height: calc(100% - #{$head-height});
          @include _border-box-shadow;
          // @include _background("_border-color");
        }
      }
      .section {
        grid-area: section;
        .nav {
          white-space: nowrap;
          line-height: $nav-height - $layout-padding * 2;
          width: 100%;
          height: $nav-height;
          display: flex;
          align-items: center;
          overflow: hidden;
          @include _layout-padding;
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
          @include _layout-padding;
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
        min-height: $head-height;
        @include _background("_head-color");
        @include _color("_color");
      }
      .aside {
        width: 100%;
        min-height: $aside-height;
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
          @include _layout-padding;
        }
      }
    }
  }
</style>
