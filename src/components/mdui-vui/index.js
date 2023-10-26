
import MdviButton from './MdviButton.vue';
import MdviTextField from './MdviTextField.vue';
import MdviSlider from './MdviSlider.vue';
import MdviRangeSlider from './MdviRangeSlider.vue';
import MdviMenu from './MdviMenu.vue';
import MdviSelect from './MdviSelect.vue';
import MdviNavigationBar from './MdviNavigationBar.vue';
import MdviNavigationRail from './MdviNavigationRail.vue';
import MdviSwitch from './MdviSwitch.vue';
import MdviSegmentedButtonGroup from './MdviSegmentedButtonGroup.vue';
import MdviCollapse from './MdviCollapse.vue';


const components = {
    MdviButton,
    MdviTextField,
    MdviSlider,
    MdviRangeSlider,
    MdviSelect,
    MdviMenu,
    MdviNavigationBar,
    MdviNavigationRail,
    MdviSwitch,
    MdviSegmentedButtonGroup,
    MdviCollapse
};

export default {
    install(app) {

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


        Object.keys(components).forEach((name) => {
            app.component(name, components[name]);
        });
    }
};

