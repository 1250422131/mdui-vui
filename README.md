# MDUI-VUI

mdui-vui 是对于 [MDUI 2.x](https://www.mdui.org/) 的 Vue3 封装迁移，由于 mdui 本身不支持在 vue 中的双向绑定，因此 mdui-vui 就是来解决这个双向绑定问题的仓库。


## 支持组件

- mdvi-menu
- mdvi-navigation-bar
- mdvi-navigation-rail
- mdvi-range-slider (初始化存在问题)
- mdvi-select
- mdvi-slider
- mdvi-switch
- mdvi-text-field
- mdvi-segmented-button-group
- mdvi-collapse

## 快速开始

`mdui-vui`，只是对原来`mdui`组件进行了包装，没有对组件库进行任何的改动，仅仅完成了双向绑定，因此，你只需要将组件名称中`mdui`部分改为`mdvi`，将原来使用 `value` 传值的方式修改为`v-model`即可。

### 安装命令

`npm i mdui-vui`

### 引入 Vue

**mdui-vui**没有引入**MDUI**，需要大家自己通过 npm 先安装 mdui 才可以使用**mdui-vui**。

如果你还没有安装MDUI，那么请前往[mdui npm](https://www.mdui.org/docs/2/getting-started/installation)安装

如果你已经了解这一点，那么在`main.js`中这样做：

```JavaScript
import { createApp } from 'vue'
import App from './App.vue'
import 'mdui/mdui.css';
import 'mdui';
import mduiVui from 'mdui-vui'

createApp(App).use(mduiVui).mount('#app')

```

## 特别注意

### mdvi-switch

该组件支持`v-model`后，请不要使用`checked`，它在内部被实现了。

### mdvi-range-slider

该组件目前存在初始化值问题，绑定变量后仅仅可以接受值，赋值目前存在问题，**目前不建议使用此组件**。

### mdvi-segmented-button-group

该组件目前存在初始化值问题，该组件的v-model必须为reactive的，否则就会导致change进入死循环，**目前不建议使用此组件**。

## 参与贡献

### 原理解释

mdvi 核心代码如下，其本质是对 mdui 的事件进行转发，以及对 v-model 的绑定支持，目前 mdvi 仅仅实现了 change 和 input 的转发，其余事件需要进一步测试后编写。

```JavaScript
   app.config.globalProperties.mdviHandleChange = function (event) {
        const newValue = event.target.value;
        this.$emit('update:modelValue', newValue);
        this.$emit('mdvi-change', newValue);

    };

    app.config.globalProperties.mdviHandleInput = function (event) {
        const newValue = event.target.value;
        this.$emit('update:modelValue', newValue);
        this.$emit('mdvi-input', newValue);

    };

    app.config.globalProperties.mdviHandleValueChange = function (newValue) {
        this.$emit('update:modelValue', newValue);
        this.$emit('mdvi-change', newValue);
    };

    app.config.globalProperties.mdviHandleValueInput = function (newValue) {
        this.$emit('update:modelValue', newValue);
        this.$emit('mdvi-input', newValue);
    };
```

### 规范和其他问题

`mdui-vui`初版仅仅是完成了双向绑定，对于日志，调试方案，协作等都是未知的，希望后续开发者可以跟进规范。
