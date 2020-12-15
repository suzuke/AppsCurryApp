import Vue from 'vue';
import ElementUI from 'element-ui';
import './scss/my-element-ui.scss';
import formCreate from '@form-create/element-ui';
import FromCreateTest from './FromCreateTest.vue';

Vue.use(ElementUI);
Vue.use(formCreate);

new Vue({
  components: { FromCreateTest }
}).$mount("#req_app");
