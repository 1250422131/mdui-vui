
import MdviButton from './MdviButton.vue';
import MdviTextField from './MdviTextField.vue';

const components = {
    MdviButton,
    MdviTextField
};

export default {
    install(app) {
        Object.keys(components).forEach((name) => {
            app.component(name, components[name]);
            console.log(app);
        });
    }
};

