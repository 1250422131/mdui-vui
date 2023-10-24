
import MduiVuiButton from './MduiVuiButton.vue';
const components = {
    MduiVuiButton,

};

export default {
    install(app) {
        Object.keys(components).forEach((name) => {
            app.component(name, components[name]);
            console.log(app);
        });
    }
};

