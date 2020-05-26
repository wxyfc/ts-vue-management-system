import { Component, Vue } from 'vue-property-decorator'

@Component
export default class InfoMixin extends Vue {
  get systemInfo (): object {
    return this.$store.getters.getSystemInfo
  }
}
