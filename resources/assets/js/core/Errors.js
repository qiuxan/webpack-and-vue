class Errors {

    constructor(){

        this.errors={};
    }

    get(field){

        // console.log(this.errors);

        if (this.errors[field]){



            return this.errors[field][0];
        }

    }
    any(){
        return Object.keys(this.errors).length>0;
    }

    has(field){

        return this.errors.hasOwnProperty(field);
    }

    record(errors){
        //console.log(errors);
        this.errors=errors;

    }
    clear(field){

        if(field) {
            delete this.errors[field];
            return;

        }
        this.errors={};
    }

}

export default Errors;