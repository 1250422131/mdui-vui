<template>
    <mdui-button :fullWidth="fullWidth" :disabled="disabled"><slot></slot></mdui-button>
</template>

<script>
export default {
    name: 'mdui-vui-button',
    props: {
        fullWidth: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<script setup>
import 'mdui/components/button.js';


</script>