<template>
    <mdui-text-field :value="modelValue" @input="mdviHandleInput" @change="mdviHandleChange">
        <slot></slot>
    </mdui-text-field>
</template>


<script>
import { onMounted } from 'vue';

export default {
    name: 'mdvi-text-field',
    props: {
        modelValue: {
            type: String,
            default: ''
        },
    },
    setup(props, { emit }) {
        onMounted(() => { });
        return {};
    }
}
</script>


