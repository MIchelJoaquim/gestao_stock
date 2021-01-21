import Vue from "vue";
Vue.component('nav-bar', () => import('../NavBar.vue'))
require('./../modules/Produto/components.ts')
require("./../modules/Estoque/component.ts")