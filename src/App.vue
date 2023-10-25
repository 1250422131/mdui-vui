<script setup>
import { reactive, ref } from 'vue';
var testDemo = ref("dada");
var numDemo = ref(10);
var numListDemo = ref([10, 20]);
var selectDemo = ref("item-1");
var selectDemo3 = ref("item-1");
var navigationBarDemo = ref("item-1");
var navigationRailDemo = ref("item-1");
var checkedState = ref(false)

function getEdit() {
  console.log(testDemo.value);
}
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>

  <mdvi-slider v-model="numDemo" max="20"></mdvi-slider>
  <mdvi-text-field v-model="testDemo" helper="轻编写"></mdvi-text-field>
  <mdvi-range-slider v-model="numListDemo"></mdvi-range-slider>

  <mdvi-select v-model="selectDemo">
    <mdui-menu-item value="item-1">Item 1</mdui-menu-item>
    <mdui-menu-item value="item-2">Item 2</mdui-menu-item>
    <mdui-menu-item value="item-3">Item 3</mdui-menu-item>
  </mdvi-select>


  <mdvi-menu selects="single" v-model="selectDemo3">
    <mdui-menu-item value="item-1">Item 1</mdui-menu-item>
    <mdui-menu-item value="item-2">Item 2</mdui-menu-item>
  </mdvi-menu>




  <mdvi-navigation-bar v-model="navigationBarDemo" style="position: relative">
    <mdui-navigation-bar-item icon="place" value="item-1">Item 1</mdui-navigation-bar-item>
    <mdui-navigation-bar-item icon="commute" value="item-2">Item 2</mdui-navigation-bar-item>
    <mdui-navigation-bar-item icon="people" value="item-3">Item 3</mdui-navigation-bar-item>
  </mdvi-navigation-bar>


  <mdvi-navigation-rail v-model="navigationRailDemo">
    <mdui-navigation-rail-item icon="watch_later--outlined" value="recent">Recent</mdui-navigation-rail-item>
    <mdui-navigation-rail-item icon="image--outlined" value="images">Images</mdui-navigation-rail-item>
    <mdui-navigation-rail-item icon="library_music--outlined" value="library">Library</mdui-navigation-rail-item>
  </mdvi-navigation-rail>

  <mdvi-switch v-model="checkedState"></mdvi-switch>

  <mdui-button @click="getEdit">检查</mdui-button>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
