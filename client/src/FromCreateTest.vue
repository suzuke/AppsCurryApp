<template>
    <form-create ref="fc" v-model="fApi" :rule="rule" :option="option"></form-create>
</template>

<script>
    import {maker} from '@form-create/element-ui'
    import BackEndWrapper from './services/BackEndWrapper';
    export default {
        data () {
            return {
                fApi:{},
                model: {},
                bw:new BackEndWrapper(),
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
            this.getChallengeSelect();
        },
        methods: {
            getChallengeSelect()
            {
                console.log("FromCreateTest");
                this.bw.getChallenge().then(function(res)
                {
                    console.log(res);
                }.bind(this),
                function(err)
                {
                //this.showError();
                }.bind(this));
            }
        }
    };
</script>