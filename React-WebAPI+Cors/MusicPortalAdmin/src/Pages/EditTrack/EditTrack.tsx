import Request from '../../Services/Request.tsx';
import React from 'react';
import { useEffect, useState } from 'react';
import './editTrack.css'
const EditTrack = () => {

    const [track, setOptionG] = useState<Array<any>>([]);
    const [action, setAction] = useState(false);
    const [text, setText] = useState('');

    useEffect(() => {

        
        Request.GetTrack().then((data) => { setOptionG(data); });



    }, [action]);


    const ConfirmChange = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        Request.UpdateTrack(e.currentTarget.getAttribute('data-info') ?? '',text).then((data)=>{



            if(data['status']){

                setAction(!action);

            }

        })
     }
    const DeleteGenre = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        Request.DeleteTrack(parseInt(e.currentTarget.getAttribute('data-info') ?? '')).then((data) => {
            if (data) {
                setAction(!action);

            }
        });
    }


    const OnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value);
    }

    let optionT: any = [];
    for (let index of track) {
        optionT.push(
           
                <div className="GTP-form">
                    <input onChange={OnChange} type='text' className="nick-name custom-input" data-info={index.id} defaultValue={index.title} />
                    <span onClick={ConfirmChange} className="track-confirm-button" data-info={index.id}>Comfirm</span>
                    <span onClick={DeleteGenre} className="track-delete-button" data-info={index.id}>Delete</span>

                </div>




            
        )
    }
    return (
        <div id="genre-contener">
            {optionT}
        </div>
    );
}


export default EditTrack;