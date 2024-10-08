import Request from '../../Services/Request.tsx';
import React from 'react';
import { useEffect, useState } from 'react';

import './editPerformers.css'
const EditPerformers = () => {

    const [performer, setOptionG] = useState<Array<any>>([]);
    const [action, setAction] = useState(false);
    const [text, setText] = useState('');

    useEffect(() => {


        Request.GetPerformerData().then((data) => { setOptionG(data); });



    }, [action]);


    const ConfirmChange = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        Request.UpdatePerformer(e.currentTarget.getAttribute('data-info') ?? '', text).then((data) => {



            if (data['status']) {

                setAction(!action);

            }

        })
    }
    const DeleteGenre = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        Request.DeletePerformer(parseInt(e.currentTarget.getAttribute('data-info') ?? '')).then((data) => {
            if (data) {
                setAction(!action);

            }
        });
    }


    const OnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value);
    }

    let optionP: any = [];
    for (let index of performer) {
        optionP.push(

            <div className="GTP-form">
                <input onChange={OnChange} type='text' className="nick-name custom-input" data-info={index.id} defaultValue={index.name} />
                <span onClick={ConfirmChange} className="performe-confirm-button" data-info={index.id}>Comfirm</span>
                <span onClick={DeleteGenre} className="performer-delete-button" data-info={index.id}>Delete</span>

            </div>





        )
    }






    return (

        <div id="genre-contener">
            {optionP}
        </div>

    );


};


export default EditPerformers;