<template>
    <form-create ref="fc" v-model="fApi" :rule="rule" :option="option"></form-create>
</template>

<script>
    import {maker} from '@form-create/element-ui'
    export default {
        data () {
            return {
                fApi:{},
                model: {},
                rule:[
                    maker.input('goods_name','goods_name'),
                    maker.date('created_at','created_at')
                ],
                option:{
                    onSubmit:function (formData) {
                        alert(JSON.stringify(formData));
                    }
                }
            };
        },
        mounted:function(){
            this.model = this.fApi.model();
        }
    };
</script>