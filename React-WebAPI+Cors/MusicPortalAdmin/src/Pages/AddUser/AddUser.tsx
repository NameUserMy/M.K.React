
import Request from '../../Services/Request.tsx';
import React from 'react';
import './addUser.css'

const AddUser = () => {



    const form = React.createRef<HTMLFormElement>();


    const AddUser = () => {

        Request.UserAdd(form.current).then((data) => {


            if (data['status']) { 



                form.current?.reset();
            }


        });



    };



    return (
        <form ref={form} method="post" id="userRegistration" className="FormR borderR boxShadow">

            <span className="info">
                <div ></div>
            </span>

            <div className="field-group">
                <input name="Login" placeholder="Login" className="info borderR" />
                <span ></span>
            </div>

            <div className="field-group">
                <input type="password" name="Password" placeholder="Password" className="info borderR" />
                <span ></span>
            </div>

            <div className="field-group">
                <input type="password" name="ConfirmPassword" placeholder="Confirm password" className="info borderR" />
                <span ></span>
            </div>

            <div className="field-group">
                <input name="NickName" placeholder="Nick" className="info borderR" />
                <span></span>
            </div>
            <div className="field-group">
                <span>
                    <input type="button" onClick={AddUser} id="userReg-Btn" value="Confirm" className="info borderR" />
                </span>
            </div>
        </form>
    );
};

export default AddUser;