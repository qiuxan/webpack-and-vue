import Errors from './Errors';

class Form{
    constructor(data){
        this.originalData=data;
        for(let field in data){
            this[field]=data[field];
        }

        this.errors=new Errors();

    }
    reset(){

        for(let field in this.originalData){
            this[field]='';
        }
        this.errors.clear();

    }

    data(){

        let  data={};
        for(let property in this.originalData){

            data[property]=this[property];
        }


        return data;
    }

    submit(requestType,url){

        return new Promise((resolve, reject)=>{
            axios[requestType](url,this.data())
                .then(response=>{

                    this.onSuccess(response.data);
                    resolve(response.data);
                })
                .catch(error=>{
                    // console.log(error.response.data.errors);
                    this.onFail(error.response.data.errors);


                    reject(error.response.data);

                })


        });



    }

    onSuccess(data){
        alert(data.message);
        //this.errors.clear();
        this.reset();

    }

    onFail(errors){
        //console.log(errors);
        this.errors.record(errors);

    }
}

export default Form;