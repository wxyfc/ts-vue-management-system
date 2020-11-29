/* eslint-disable */
// @ts-nocheck
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: RouteConfig[] = []
const router = new VueRouter({
  mode: process.env.VUE_APP_ROUTER_MODE,
  base: process.env.VUE_APP_ROUTER_BASE,
  routes
})
export default router
