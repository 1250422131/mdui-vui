<template>
    <mdui-navigation-rail :value="modelValue" @input="mdviHandleInput" @change="mdviHandleChange">
        <slot></slot>
    </mdui-navigation-rail>
</template>
  
<script>
//该组件初始化值存在问题
import { ref, watch, onMounted } from 'vue';

export default {
    name: 'mdvi-navigation-rail',
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
  