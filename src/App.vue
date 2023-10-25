<script setup>
import { reactive, ref } from 'vue';

var testDemo = reactive("dada");


function mInput(txt){
  console.log(txt);

}

</script>

<template>
  <div>
    <a  href="https://vitejs.dev" target="_blank">
      <img  src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
 
  <mdvi-text-field v-model="testDemo" :label="testDemo" helper="轻编写" @mdvi-input="mInput"></mdvi-text-field>

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
