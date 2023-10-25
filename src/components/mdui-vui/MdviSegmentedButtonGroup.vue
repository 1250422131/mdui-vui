
<template>
    <mdui-segmented-button-group :value="modelValue" @input="mdviHandleInput" @change="mdviHandleChange">
        <slot></slot>
    </mdui-segmented-button-group>
</template>


<script>
//实验性组件：该组件的v-model必须为reactive的，否则就会导致change进入死循环。

import { onMounted } from 'vue';

export default {
    name: 'mdvi-segmented-button-group',
    props: {
        modelValue: {
            type: [String, Array],
            default: null
        },
    },
    setup(props, { emit }) {
        onMounted(() => { });
        return {};
    }
}
</script>


