import Form from './core/Form';
import Vue from 'vue';
import axios from 'axios';

import Example from './components/Example';

window.axios=axios;
window.Form=Form;


new Vue({

    el:"#app",

    components:{
      Example

    },

    data:{

        form:new Form({
            name:'',
            description:'',
        }),


    },

    methods:{

        onSubmit(){

            this.form.submit('post','/projects')
                .then(data=>console.log(data))
                .catch(errors=>console.log(errors));


        },

        onSuccess(response){

            alert(response.data.message);

            form.reset();


        },

    },


});