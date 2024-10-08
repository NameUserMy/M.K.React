class UserModel{

     id:number;
     confirmation:boolean;
     nickName:string;
    constructor(id:number,confirmationfir:boolean,nickName:string){

        this.confirmation=confirmationfir;
        this.id=id;
        this.nickName=nickName;

    }


};


export default UserModel;