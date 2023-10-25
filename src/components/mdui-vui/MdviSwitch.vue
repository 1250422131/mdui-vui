<template>
    <mdui-switch :checked="modelValue" @input="mdviHandleValueInput($event.target.checked)"
        @change="mdviHandleValueChange($event.target.checked)">
    </mdui-switch>
</template>
  
<script>
import { ref, watch, onMounted } from 'vue';

export default {
    name: 'mdvi-switch',
    props: {
        modelValue: {
            type: Boolean,
            default: false
        },
    },
    setup(props, { emit }) {
        onMounted(() => { });
        return {};
    }
};
</script>
  