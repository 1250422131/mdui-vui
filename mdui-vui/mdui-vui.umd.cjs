(function(t,i){typeof exports=="object"&&typeof module<"u"?module.exports=i(require("vue")):typeof define=="function"&&define.amd?define(["vue"],i):(t=typeof globalThis<"u"?globalThis:t||self,t["mdui-vui"]=i(t.Vue))})(this,function(t){"use strict";const i=(n,e)=>{const d=n.__vccOpts||n;for(const[l,a]of e)d[l]=a;return d},u={name:"mdvi-button"};function m(n,e,d,l,a,r){return t.openBlock(),t.createElementBlock("mdui-button",null,[t.renderSlot(n.$slots,"default")])}const p=i(u,[["render",m]]),f={name:"mdvi-text-field",props:{modelValue:{type:String,default:""}},setup(n,{emit:e}){return t.onMounted(()=>{}),{}}},$=["value"];function g(n,e,d,l,a,r){return t.openBlock(),t.createElementBlock("mdui-text-field",{value:d.modelValue,onInput:e[0]||(e[0]=(...o)=>n.mdviHandleInput&&n.mdviHandleInput(...o)),onChange:e[1]||(e[1]=(...o)=>n.mdviHandleChange&&n.mdviHandleChange(...o))},[t.renderSlot(n.$slots,"default")],40,$)}const v=i(f,[["render",g]]),c={name:"mdvi-slider",props:{modelValue:{type:Number,default:0}},setup(n,{emit:e}){return t.onMounted(()=>{}),{}}},H=["value"];function h(n,e,d,l,a,r){return t.openBlock(),t.createElementBlock("mdui-slider",{value:d.modelValue,onInput:e[0]||(e[0]=(...o)=>n.mdviHandleInput&&n.mdviHandleInput(...o)),onChange:e[1]||(e[1]=(...o)=>n.mdviHandleChange&&n.mdviHandleChange(...o))},null,40,H)}const C=i(c,[["render",h]]),I={name:"mdvi-range-slider",props:{modelValue:{type:Array,default:[]}},setup(n,{emit:e}){return t.onMounted(()=>{}),{}}},V=["value"];function k(n,e,d,l,a,r){return t.openBlock(),t.createElementBlock("mdui-range-slider",{value:d.modelValue,onInput:e[0]||(e[0]=(...o)=>n.mdviHandleInput&&n.mdviHandleInput(...o)),onChange:e[1]||(e[1]=(...o)=>n.mdviHandleChange&&n.mdviHandleChange(...o))},null,40,V)}const B=i(I,[["render",k]]),M={name:"mdvi-menu",props:{modelValue:{type:[String,Array],default:null}},setup(n,{emit:e}){return t.onMounted(()=>{}),{}}},S=["value"];function y(n,e,d,l,a,r){return t.openBlock(),t.createElementBlock("mdui-menu",{value:d.modelValue,onInput:e[0]||(e[0]=(...o)=>n.mdviHandleInput&&n.mdviHandleInput(...o)),onChange:e[1]||(e[1]=(...o)=>n.mdviHandleChange&&n.mdviHandleChange(...o))},[t.renderSlot(n.$slots,"default")],40,S)}const b=i(M,[["render",y]]),E={name:"mdvi-select",props:{modelValue:{type:[String,Array],default:null}},setup(n,{emit:e}){return{}}},_=["value"];function w(n,e,d,l,a,r){return t.openBlock(),t.createElementBlock("mdui-select",{ref:"mduiSelect",value:d.modelValue,onInput:e[0]||(e[0]=(...o)=>n.mdviHandleInput&&n.mdviHandleInput(...o)),onChange:e[1]||(e[1]=(...o)=>n.mdviHandleChange&&n.mdviHandleChange(...o))},[t.renderSlot(n.$slots,"default")],40,_)}const P=i(E,[["render",w]]),A={name:"mdvi-navigation-bar",props:{modelValue:{type:String,default:""}},setup(n,{emit:e}){return t.onMounted(()=>{}),{}}},N=["value"];function T(n,e,d,l,a,r){return t.openBlock(),t.createElementBlock("mdui-navigation-bar",{value:d.modelValue,onInput:e[0]||(e[0]=(...o)=>n.mdviHandleInput&&n.mdviHandleInput(...o)),onChange:e[1]||(e[1]=(...o)=>n.mdviHandleChange&&n.mdviHandleChange(...o))},[t.renderSlot(n.$slots,"default")],40,N)}const j=i(A,[["render",T]]),O={name:"mdvi-navigation-rail",props:{modelValue:{type:String,default:""}},setup(n,{emit:e}){return t.onMounted(()=>{}),{}}},R=["value"];function q(n,e,d,l,a,r){return t.openBlock(),t.createElementBlock("mdui-navigation-rail",{value:d.modelValue,onInput:e[0]||(e[0]=(...o)=>n.mdviHandleInput&&n.mdviHandleInput(...o)),onChange:e[1]||(e[1]=(...o)=>n.mdviHandleChange&&n.mdviHandleChange(...o))},[t.renderSlot(n.$slots,"default")],40,R)}const F=i(O,[["render",q]]),z={name:"mdvi-switch",props:{modelValue:{type:Boolean,default:!1}},setup(n,{emit:e}){return t.onMounted(()=>{}),{}}},D=["checked"];function G(n,e,d,l,a,r){return t.openBlock(),t.createElementBlock("mdui-switch",{checked:d.modelValue,onInput:e[0]||(e[0]=o=>n.mdviHandleValueInput(o.target.checked)),onChange:e[1]||(e[1]=o=>n.mdviHandleValueChange(o.target.checked))},null,40,D)}const s={MdviButton:p,MdviTextField:v,MdviSlider:C,MdviRangeSlider:B,MdviSelect:P,MdviMenu:b,MdviNavigationBar:j,MdviNavigationRail:F,MdviSwitch:i(z,[["render",G]])};return{install(n){n.config.globalProperties.mdviHandleChange=function(e){const d=e.target.value;this.$emit("update:modelValue",d),this.$emit("mdvi-change",d)},n.config.globalProperties.mdviHandleInput=function(e){const d=e.target.value;this.$emit("update:modelValue",d),this.$emit("mdvi-input",d)},n.config.globalProperties.mdviHandleValueChange=function(e){this.$emit("update:modelValue",e),this.$emit("mdvi-change",e)},n.config.globalProperties.mdviHandleValueInput=function(e){this.$emit("update:modelValue",e),this.$emit("mdvi-input",e)},Object.keys(s).forEach(e=>{n.component(e,s[e]),console.log(n)})}}});