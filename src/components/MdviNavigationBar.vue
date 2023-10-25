<template>
    <mdui-navigation-bar :value="modelValue" @input="mdviHandleInput" @change="mdviHandleChange">
        <slot></slot>
    </mdui-navigation-bar>
</template>
  
<script>
//该组件初始化值存在问题
import { ref, watch, onMounted } from 'vue';

export default {
    name: 'mdvi-navigation-bar',
    props: {
        modelValue: {
            type: String,
            default: ''
        }
    },
    setup(props, { emit }) {
        onMounted(() => { });
        return {};
    }
};
</script>
  