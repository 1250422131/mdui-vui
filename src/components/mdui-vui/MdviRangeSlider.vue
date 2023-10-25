<template>
    <mdui-range-slider :value="modelValue" @input="mdviHandleInput" @change="mdviHandleChange"></mdui-range-slider>
</template>
  
<script>
//该组件初始化值存在问题
import { ref, watch, onMounted } from 'vue';

export default {
    name: 'mdvi-range-slider',
    props: {
        modelValue: {
            type: Array,
            default: []
        }
    },
    setup(props, { emit }) {
        onMounted(() => { });
        return {};
    }
};
</script>
  