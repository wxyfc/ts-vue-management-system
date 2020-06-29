<template>
  <div>
    <div class="system-layout-nav">
      隐藏的菜单栏{{ $t('navbar.close') }}
      <EleIcon class="ele-icon-hide" i-class="el-icon-circle-close" :content="$t('navbar.close')"></EleIcon>
      <span></span>
    </div>

    <div class="system-layout-nav">
      隐藏的菜单栏
      <EleIcon class="ele-icon-hide"></EleIcon>
      <span></span>
    </div>

    <div class="system-layout-nav">
      隐藏的菜单栏
      <EleIcon class="ele-icon-hide"></EleIcon>
      <span></span>
    </div>
  </div>
</template>
<script lang="ts">
/* eslint-disable */
// @ts-nocheck
import { Component, Vue } from 'vue-property-decorator'
import { setLayout, setFont, setTheme } from '@function/projectActivity'

@Component({
  components: {
    EleIcon: () => import('@components/EleIcon.vue'),
  }
})
export default class SystemLayoutNav extends Vue {
  // created () {
  // }
}
</script>
<style scoped lang="scss">
  .system-layout-nav {
    display: inline-flex;
    align-items: center;
    @include _font-size('_title');
    @include _border-box-shadow;
    padding: 0 12px;
    margin-right: 10px;
    .ele-icon-hide {
      display: none;
    }
    &:hover {
      .ele-icon-hide {
        display: inline-block;
      }
    }
  }

  .system-layout-nav-is-activity {
  }

  .system-layout-nav-disabled-icon {
    &:last-child {
      .ele-icon-hide {
        display: none;
      }
    }
  }
</style>
