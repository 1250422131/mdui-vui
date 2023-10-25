<template>
    <mdui-text-field :value="modelValue" @input="updateValue($event.target.value)" >
        <slot></slot>
    </mdui-text-field>
</template>


<script>
import { onMounted } from 'vue';

export default {
    name: 'mdvi-button',

    props: {
        modelValue: {
            type: String,
            default: ''
        },
    },


    setup(props, { emit }) {

        const updateValue = (newValue) => {
            emit('update:modelValue', newValue);
            emit('mdvi-input', newValue);

        };

        const upText = () => {
            console.log("aaa");
        };

        onMounted(() => {
        });



        return {
            updateValue,upText
        };

    }



}

</script>


