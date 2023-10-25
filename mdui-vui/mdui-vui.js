import { openBlock as a, createElementBlock as l, renderSlot as m, onMounted as r } from "vue";
const u = (n, e) => {
  const d = n.__vccOpts || n;
  for (const [i, o] of e)
    d[i] = o;
  return d;
}, v = {
  name: "mdvi-button"
};
function $(n, e, d, i, o, s) {
  return a(), l("mdui-button", null, [
    m(n.$slots, "default")
  ]);
}
const f = /* @__PURE__ */ u(v, [["render", $]]), g = {
  name: "mdvi-text-field",
  props: {
    modelValue: {
      type: String,
      default: ""
    }
  },
  setup(n, { emit: e }) {
    return r(() => {
    }), {};
  }
}, H = ["value"];
function h(n, e, d, i, o, s) {
  return a(), l("mdui-text-field", {
    value: d.modelValue,
    onInput: e[0] || (e[0] = (...t) => n.mdviHandleInput && n.mdviHandleInput(...t)),
    onChange: e[1] || (e[1] = (...t) => n.mdviHandleChange && n.mdviHandleChange(...t))
  }, [
    m(n.$slots, "default")
  ], 40, H);
}
const C = /* @__PURE__ */ u(g, [["render", h]]), I = {
  name: "mdvi-slider",
  props: {
    modelValue: {
      type: Number,
      default: 0
    }
  },
  setup(n, { emit: e }) {
    return r(() => {
    }), {};
  }
}, V = ["value"];
function c(n, e, d, i, o, s) {
  return a(), l("mdui-slider", {
    value: d.modelValue,
    onInput: e[0] || (e[0] = (...t) => n.mdviHandleInput && n.mdviHandleInput(...t)),
    onChange: e[1] || (e[1] = (...t) => n.mdviHandleChange && n.mdviHandleChange(...t))
  }, null, 40, V);
}
const y = /* @__PURE__ */ u(I, [["render", c]]), M = {
  name: "mdvi-range-slider",
  props: {
    modelValue: {
      type: Array,
      default: []
    }
  },
  setup(n, { emit: e }) {
    return r(() => {
    }), {};
  }
}, S = ["value"];
function b(n, e, d, i, o, s) {
  return a(), l("mdui-range-slider", {
    value: d.modelValue,
    onInput: e[0] || (e[0] = (...t) => n.mdviHandleInput && n.mdviHandleInput(...t)),
    onChange: e[1] || (e[1] = (...t) => n.mdviHandleChange && n.mdviHandleChange(...t))
  }, null, 40, S);
}
const k = /* @__PURE__ */ u(M, [["render", b]]), _ = {
  name: "mdvi-menu",
  props: {
    modelValue: {
      type: [String, Array],
      default: null
    }
  },
  setup(n, { emit: e }) {
    return r(() => {
    }), {};
  }
}, B = ["value"];
function P(n, e, d, i, o, s) {
  return a(), l("mdui-menu", {
    value: d.modelValue,
    onInput: e[0] || (e[0] = (...t) => n.mdviHandleInput && n.mdviHandleInput(...t)),
    onChange: e[1] || (e[1] = (...t) => n.mdviHandleChange && n.mdviHandleChange(...t))
  }, [
    m(n.$slots, "default")
  ], 40, B);
}
const w = /* @__PURE__ */ u(_, [["render", P]]), A = {
  name: "mdvi-select",
  props: {
    modelValue: {
      type: [String, Array],
      default: null
    }
  },
  setup(n, { emit: e }) {
    return {};
  }
}, N = ["value"];
function E(n, e, d, i, o, s) {
  return a(), l("mdui-select", {
    ref: "mduiSelect",
    value: d.modelValue,
    onInput: e[0] || (e[0] = (...t) => n.mdviHandleInput && n.mdviHandleInput(...t)),
    onChange: e[1] || (e[1] = (...t) => n.mdviHandleChange && n.mdviHandleChange(...t))
  }, [
    m(n.$slots, "default")
  ], 40, N);
}
const O = /* @__PURE__ */ u(A, [["render", E]]), R = {
  name: "mdvi-navigation-bar",
  props: {
    modelValue: {
      type: String,
      default: ""
    }
  },
  setup(n, { emit: e }) {
    return r(() => {
    }), {};
  }
}, j = ["value"];
function F(n, e, d, i, o, s) {
  return a(), l("mdui-navigation-bar", {
    value: d.modelValue,
    onInput: e[0] || (e[0] = (...t) => n.mdviHandleInput && n.mdviHandleInput(...t)),
    onChange: e[1] || (e[1] = (...t) => n.mdviHandleChange && n.mdviHandleChange(...t))
  }, [
    m(n.$slots, "default")
  ], 40, j);
}
const T = /* @__PURE__ */ u(R, [["render", F]]), q = {
  name: "mdvi-navigation-rail",
  props: {
    modelValue: {
      type: String,
      default: ""
    }
  },
  setup(n, { emit: e }) {
    return r(() => {
    }), {};
  }
}, z = ["value"];
function D(n, e, d, i, o, s) {
  return a(), l("mdui-navigation-rail", {
    value: d.modelValue,
    onInput: e[0] || (e[0] = (...t) => n.mdviHandleInput && n.mdviHandleInput(...t)),
    onChange: e[1] || (e[1] = (...t) => n.mdviHandleChange && n.mdviHandleChange(...t))
  }, [
    m(n.$slots, "default")
  ], 40, z);
}
const G = /* @__PURE__ */ u(q, [["render", D]]), J = {
  name: "mdvi-switch",
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    }
  },
  setup(n, { emit: e }) {
    return r(() => {
    }), {};
  }
}, K = ["checked"];
function L(n, e, d, i, o, s) {
  return a(), l("mdui-switch", {
    checked: d.modelValue,
    onInput: e[0] || (e[0] = (t) => n.mdviHandleValueInput(t.target.checked)),
    onChange: e[1] || (e[1] = (t) => n.mdviHandleValueChange(t.target.checked))
  }, null, 40, K);
}
const Q = /* @__PURE__ */ u(J, [["render", L]]), p = {
  MdviButton: f,
  MdviTextField: C,
  MdviSlider: y,
  MdviRangeSlider: k,
  MdviSelect: O,
  MdviMenu: w,
  MdviNavigationBar: T,
  MdviNavigationRail: G,
  MdviSwitch: Q
}, W = {
  install(n) {
    n.config.globalProperties.mdviHandleChange = function(e) {
      const d = e.target.value;
      this.$emit("update:modelValue", d), this.$emit("mdvi-change", d);
    }, n.config.globalProperties.mdviHandleInput = function(e) {
      const d = e.target.value;
      this.$emit("update:modelValue", d), this.$emit("mdvi-input", d);
    }, n.config.globalProperties.mdviHandleValueChange = function(e) {
      this.$emit("update:modelValue", e), this.$emit("mdvi-change", e);
    }, n.config.globalProperties.mdviHandleValueInput = function(e) {
      this.$emit("update:modelValue", e), this.$emit("mdvi-input", e);
    }, Object.keys(p).forEach((e) => {
      n.component(e, p[e]), console.log(n);
    });
  }
};
export {
  W as default
};
