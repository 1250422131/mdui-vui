<template>
    <mdui-select ref="mduiSelect" :value="modelValue" @input="mdviHandleInput" @change="mdviHandleChange">
        <slot></slot>

    </mdui-select>
</template>
  
<script>
import { ref, watch, onMounted } from 'vue';

export default {
    name: 'mdvi-select',
    props: {
        modelValue: {
            type: [String, Array],
            default: null
        }
    },
    setup(props, { emit }) {
        return {};
    }
};
</script>
    