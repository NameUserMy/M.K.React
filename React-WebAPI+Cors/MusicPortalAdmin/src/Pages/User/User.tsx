import { useEffect, useState } from 'react';
import Request from '../../Services/Request.tsx';

import './user.css'
import UserModel from '../../Model/UserModel.tsx';



const User = () => {

    const ConfirmUpdate=(e: React.MouseEvent<HTMLSpanElement, MouseEvent>)=>{
     Request.ConfirmUser(parseInt(e.currentTarget.getAttribute('data-info')??'')).then((data:any)=>{
            if(data['user']!=null){

                setPush(!isPush);
            }
     });
    }


     const DeleteUser=(e: React.MouseEvent<HTMLSpanElement, MouseEvent>)=>{
        Request.DeleteUser(parseInt(e.currentTarget.getAttribute('data-info')??'')).then((data:any)=>{
            if(data['user']!=null){
   
                setPush(!isPush);
            }
        });
    
     
    }
    const [user, setUser] = useState<Array<UserModel>>([])
    const [isPush,setPush]=useState(false);

    let userConfirm: Array<any> = [];
    let userUnConfirm: Array<any> = [];
    useEffect(() => {

        Request.GetUser().then((data: any) => {
            setUser(data);
        });


    },[isPush]);

   


    for (let value in user) {

        if (user[value].confirmation) {
            userConfirm.push(
                <>
                    <div className="users-confirm-form ">
                        <span className="nick-name">{user[value].nickName}</span>
                        <span className="confirm-button" onClick={ConfirmUpdate} data-info={user[value].id}>Block</span>
                        <span className="delete-button"  onClick={DeleteUser} data-info={user[value].id}>Delete</span>
                    </div>
                </>
            );
        }else{

            userUnConfirm.push(
                <>
                    <div className="users-confirm-form ">
                        <span className="nick-name">{user[value].nickName}</span>
                        <span className="confirm-button" onClick={ConfirmUpdate} data-info={user[value].id}>Сonfirm</span>
                        <span className="delete-button" onClick={DeleteUser}  data-info={user[value].id}>Delete</span>
                    </div>
                </>
            );


        }
    }
    return (
        <div id="user-confirm-contener">
            <div className='itemUnconfirm'>
                {userUnConfirm}
            </div>

            <div className='itemConfirm'>
               {userConfirm}
            </div>
        </div>
    );
};

export default User;