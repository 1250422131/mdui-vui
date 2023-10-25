<template>
    <mdui-slider :value="modelValue" @input="mdviHandleInput" @change="mdviHandleChange">
    </mdui-slider>
</template>
  
<script>
import { ref, watch, onMounted } from 'vue';

export default {
    name: 'mdvi-slider',
    props: {
        modelValue: {
            type: Number,
            default: 0
        }
    },
    setup(props, { emit }) {
        onMounted(() => { });
        return {};
    }
};
</script>
  