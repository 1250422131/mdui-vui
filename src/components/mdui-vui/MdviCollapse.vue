<template>
  <mdui-collapse
    :value="modelValue"
    @input="mdviHandleInput"
    @change="mdviHandleChange"
  >
    <slot></slot>
  </mdui-collapse>
</template>

<script>
import { ref, watch, onMounted } from "vue";

export default {
  name: "mdvi-collapse",
  props: {
    modelValue: {
      type: String,
      default: null,
    },
  },
  setup(props, { emit }) {
    onMounted(() => {});
    return {};
  },
};
</script>
