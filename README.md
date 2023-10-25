# MDUI-VUI

mdui-vui是对于mdui的vue3封装，由于mdui本身不支持在vue中的双向绑定，因此mdui-vui就是来解决这个双向绑定问题的仓库。

## 支持组件
- mdvi-menu
- mdvi-navigation-bar
- mdvi-navigation-rail
- mdvi-range-slider (初始化存在问题)
- mdvi-select
- mdvi-slider
- mdvi-switch
- mdvi-text-field

## 快速开始

`mdui-vui`，只是对原来`mdui`组件进行了包装，完成了双向绑定，因此，你只需要将组件名称中`mdui`部分改为`mdvi`即可，将原来使用value传值的方式修改为`v-model`即可。

### 安装命令

`npm i mdui-vui`

### 引入Vue

**mdui-vui**没有引入**MDUI**，需要大家自己通过npm先安装mdui才可以使用**mdui-vui**。

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


## 参与贡献

### 原理解释

mdvi核心代码如下，其本质是对mdui的事件进行转发，以及对v-model的绑定支持，目前mdvi仅仅实现了change和input的转发，其余事件需要进一步测试后编写。

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