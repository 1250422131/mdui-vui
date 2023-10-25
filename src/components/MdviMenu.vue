<template>
    <mdui-menu :value="modelValue" @input="mdviHandleInput" @change="mdviHandleChange">
        <slot></slot>

    </mdui-menu>
</template>
  
<script>
import { ref, watch, onMounted } from 'vue';

export default {
    name: 'mdvi-menu',
    props: {
        modelValue: {
            type: [String, Array],
            default: null
        }
    },
    setup(props, { emit }) {
        onMounted(() => { });
        return {};
    }
};
</script>
    