<template>
  <div class="sos-main"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class SOS extends Vue {
}
</script>
<style scoped lang="scss">
  .sos-main {
    font-size: 0;
    border: 0;
    width: 100vw;
    height: 100vh;
    background-image: url("~@img/404/404.png");
    background-position: calc(50vw - 240px) calc(50vh - 240px); /*这个是按从左往右，从上往下的百分比位置进行调整*/
    background-size: 480px 480px; /*按比例缩放*/
    /*background-size: 100px 100px;!*这个是按数值缩放*!*/
    background-repeat: no-repeat; /*还有repeat-x,y等*/
  }
</style>
