import Vue from 'vue';
import ElementUI from 'element-ui';
Vue.use(ElementUI);
import './scss/my-element-ui.scss';
import formCreate from '@form-create/element-ui';
Vue.use(formCreate);
import FromCreateTest from './FromCreateTest.vue';

new Vue({
  el: '#req_app',
  components: { FromCreateTest }
});
