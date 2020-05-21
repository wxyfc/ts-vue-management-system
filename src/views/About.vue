<template>
  <div class="about ">
    <h1>This is an about page</h1>
    <el-button>{{ $t('navbar.test') }}</el-button>
  </div>
</template>
<style scoped lang="scss">
  .about {
    @include _background("_theme-color");
    @include _font-size("_title");
  }
</style>
