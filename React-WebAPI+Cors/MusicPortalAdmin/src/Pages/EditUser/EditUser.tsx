

import Request from '../../Services/Request.tsx';
import React from 'react';


const EditUser = () => {


    const form = React.createRef<HTMLFormElement>();

    const EdditUser = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {

        e.preventDefault();
        Request.EdditUser(form.current).then((data) => {

            if (data['status']) {

                form.current?.reset();

            }


        });
    };

    return (

        <form ref={form} id="userEdit" className="FormR borderR boxShadow">

            <span className="info">
                <div></div>
            </span>

            <div className="field-group">
                <input name="id" placeholder="id" className="info borderR" />
                <span></span>
            </div>

            <div className="field-group">
                <input name="nickName" placeholder="Nick" className="info borderR" />
                <span></span>
            </div>
            <div className="field-group">
                <input name="confirmation" placeholder="confirmation" className="info borderR" />
                <span></span>
            </div>
            <div className="field-group">
                <span>
                    <input type="button" onClick={EdditUser} value="Confirm" className="info borderR" />
                </span>
            </div>
        </form>

    );



};

export default EditUser;