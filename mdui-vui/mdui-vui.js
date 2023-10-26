import { openBlock as i, createElementBlock as l, renderSlot as m, onMounted as r } from "vue";
const u = (e, n) => {
  const d = e.__vccOpts || e;
  for (const [o, a] of n)
    d[o] = a;
  return d;
}, v = {
  name: "mdvi-button"
};
function $(e, n, d, o, a, s) {
  return i(), l("mdui-button", null, [
    m(e.$slots, "default")
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
  setup(e, { emit: n }) {
    return r(() => {
    }), {};
  }
}, H = ["value"];
function C(e, n, d, o, a, s) {
  return i(), l("mdui-text-field", {
    value: d.modelValue,
    onInput: n[0] || (n[0] = (...t) => e.mdviHandleInput && e.mdviHandleInput(...t)),
    onChange: n[1] || (n[1] = (...t) => e.mdviHandleChange && e.mdviHandleChange(...t))
  }, [
    m(e.$slots, "default")
  ], 40, H);
}
const I = /* @__PURE__ */ u(g, [["render", C]]), h = {
  name: "mdvi-slider",
  props: {
    modelValue: {
      type: Number,
      default: 0
    }
  },
  setup(e, { emit: n }) {
    return r(() => {
    }), {};
  }
}, V = ["value"];
function y(e, n, d, o, a, s) {
  return i(), l("mdui-slider", {
    value: d.modelValue,
    onInput: n[0] || (n[0] = (...t) => e.mdviHandleInput && e.mdviHandleInput(...t)),
    onChange: n[1] || (n[1] = (...t) => e.mdviHandleChange && e.mdviHandleChange(...t))
  }, null, 40, V);
}
const c = /* @__PURE__ */ u(h, [["render", y]]), S = {
  name: "mdvi-range-slider",
  props: {
    modelValue: {
      type: Array,
      default: []
    }
  },
  setup(e, { emit: n }) {
    return r(() => {
    }), {};
  }
}, M = ["value"];
function b(e, n, d, o, a, s) {
  return i(), l("mdui-range-slider", {
    value: d.modelValue,
    onInput: n[0] || (n[0] = (...t) => e.mdviHandleInput && e.mdviHandleInput(...t)),
    onChange: n[1] || (n[1] = (...t) => e.mdviHandleChange && e.mdviHandleChange(...t))
  }, null, 40, M);
}
const k = /* @__PURE__ */ u(S, [["render", b]]), B = {
  name: "mdvi-menu",
  props: {
    modelValue: {
      type: [String, Array],
      default: null
    }
  },
  setup(e, { emit: n }) {
    return r(() => {
    }), {};
  }
}, A = ["value"];
function P(e, n, d, o, a, s) {
  return i(), l("mdui-menu", {
    value: d.modelValue,
    onInput: n[0] || (n[0] = (...t) => e.mdviHandleInput && e.mdviHandleInput(...t)),
    onChange: n[1] || (n[1] = (...t) => e.mdviHandleChange && e.mdviHandleChange(...t))
  }, [
    m(e.$slots, "default")
  ], 40, A);
}
const _ = /* @__PURE__ */ u(B, [["render", P]]), w = {
  name: "mdvi-select",
  props: {
    modelValue: {
      type: [String, Array],
      default: null
    }
  },
  setup(e, { emit: n }) {
    return {};
  }
}, N = ["value"];
function E(e, n, d, o, a, s) {
  return i(), l("mdui-select", {
    ref: "mduiSelect",
    value: d.modelValue,
    onInput: n[0] || (n[0] = (...t) => e.mdviHandleInput && e.mdviHandleInput(...t)),
    onChange: n[1] || (n[1] = (...t) => e.mdviHandleChange && e.mdviHandleChange(...t))
  }, [
    m(e.$slots, "default")
  ], 40, N);
}
const O = /* @__PURE__ */ u(w, [["render", E]]), R = {
  name: "mdvi-navigation-bar",
  props: {
    modelValue: {
      type: String,
      default: ""
    }
  },
  setup(e, { emit: n }) {
    return r(() => {
    }), {};
  }
}, j = ["value"];
function F(e, n, d, o, a, s) {
  return i(), l("mdui-navigation-bar", {
    value: d.modelValue,
    onInput: n[0] || (n[0] = (...t) => e.mdviHandleInput && e.mdviHandleInput(...t)),
    onChange: n[1] || (n[1] = (...t) => e.mdviHandleChange && e.mdviHandleChange(...t))
  }, [
    m(e.$slots, "default")
  ], 40, j);
}
const G = /* @__PURE__ */ u(R, [["render", F]]), T = {
  name: "mdvi-navigation-rail",
  props: {
    modelValue: {
      type: String,
      default: ""
    }
  },
  setup(e, { emit: n }) {
    return r(() => {
    }), {};
  }
}, q = ["value"];
function z(e, n, d, o, a, s) {
  return i(), l("mdui-navigation-rail", {
    value: d.modelValue,
    onInput: n[0] || (n[0] = (...t) => e.mdviHandleInput && e.mdviHandleInput(...t)),
    onChange: n[1] || (n[1] = (...t) => e.mdviHandleChange && e.mdviHandleChange(...t))
  }, [
    m(e.$slots, "default")
  ], 40, q);
}
const D = /* @__PURE__ */ u(T, [["render", z]]), J = {
  name: "mdvi-switch",
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, { emit: n }) {
    return r(() => {
    }), {};
  }
}, K = ["checked"];
function L(e, n, d, o, a, s) {
  return i(), l("mdui-switch", {
    checked: d.modelValue,
    onInput: n[0] || (n[0] = (t) => e.mdviHandleValueInput(t.target.checked)),
    onChange: n[1] || (n[1] = (t) => e.mdviHandleValueChange(t.target.checked))
  }, null, 40, K);
}
const Q = /* @__PURE__ */ u(J, [["render", L]]), U = {
  name: "mdvi-segmented-button-group",
  props: {
    modelValue: {
      type: [String, Array],
      default: null
    }
  },
  setup(e, { emit: n }) {
    return r(() => {
    }), {};
  }
}, W = ["value"];
function X(e, n, d, o, a, s) {
  return i(), l("mdui-segmented-button-group", {
    value: d.modelValue,
    onInput: n[0] || (n[0] = (...t) => e.mdviHandleInput && e.mdviHandleInput(...t)),
    onChange: n[1] || (n[1] = (...t) => e.mdviHandleChange && e.mdviHandleChange(...t))
  }, [
    m(e.$slots, "default")
  ], 40, W);
}
const Y = /* @__PURE__ */ u(U, [["render", X]]), Z = {
  name: "mdvi-collapse",
  props: {
    modelValue: {
      type: String,
      default: null
    }
  },
  setup(e, { emit: n }) {
    return r(() => {
    }), {};
  }
}, x = ["value"];
function ee(e, n, d, o, a, s) {
  return i(), l("mdui-collapse", {
    value: d.modelValue,
    onInput: n[0] || (n[0] = (...t) => e.mdviHandleInput && e.mdviHandleInput(...t)),
    onChange: n[1] || (n[1] = (...t) => e.mdviHandleChange && e.mdviHandleChange(...t))
  }, [
    m(e.$slots, "default")
  ], 40, x);
}
const ne = /* @__PURE__ */ u(Z, [["render", ee]]), p = {
  MdviButton: f,
  MdviTextField: I,
  MdviSlider: c,
  MdviRangeSlider: k,
  MdviSelect: O,
  MdviMenu: _,
  MdviNavigationBar: G,
  MdviNavigationRail: D,
  MdviSwitch: Q,
  MdviSegmentedButtonGroup: Y,
  MdviCollapse: ne
}, de = {
  install(e) {
    e.config.globalProperties.mdviHandleChange = function(n) {
      const d = n.target.value;
      this.$emit("update:modelValue", d), this.$emit("mdvi-change", d);
    }, e.config.globalProperties.mdviHandleInput = function(n) {
      const d = n.target.value;
      this.$emit("update:modelValue", d), this.$emit("mdvi-input", d);
    }, e.config.globalProperties.mdviHandleValueChange = function(n) {
      this.$emit("update:modelValue", n), this.$emit("mdvi-change", n);
    }, e.config.globalProperties.mdviHandleValueInput = function(n) {
      this.$emit("update:modelValue", n), this.$emit("mdvi-input", n);
    }, Object.keys(p).forEach((n) => {
      e.component(n, p[n]);
    });
  }
};
export {
  de as default
};
