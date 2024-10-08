import Request from '../../Services/Request.tsx';
import React from 'react';
import { useEffect, useState } from 'react';
import './editGenre.css'
const EditGenre = () => {

    
    const [genre, setOptionG] = useState<Array<any>>([]);
    const [action, setAction] = useState(false);
    const [text, setText] = useState('');

    useEffect(() => {

        
        Request.GetGenreData().then((data) => { setOptionG(data); });



    }, [action]);


    const ConfirmChange = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        Request.UpdateGenre(e.currentTarget.getAttribute('data-info') ?? '',text).then((data)=>{



            if(data['status']){

                setAction(!action);

            }

        })
     }
    const DeleteGenre = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        Request.DeleteGenre(parseInt(e.currentTarget.getAttribute('data-info') ?? '')).then((data) => {
            if (data) {
                setAction(!action);

            }
        });
    }


    const OnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value);
    }

    let optionG: any = [];
    for (let index of genre) {
        optionG.push(
            <>
                <div className="GTP-form">
                    <input onChange={OnChange} type='text' className="nick-name custom-input" data-info={index.id} defaultValue={index.title} />
                    <span onClick={ConfirmChange} className="genre-confirm-button" data-info={index.id}>Comfirm</span>
                    <span onClick={DeleteGenre} className="genre-delete-button" data-info={index.id}>Delete</span>

                </div>

            </>
        )
    }
    return (

        <div id="genre-contener">

            {optionG}

        </div>
    );
};

export default EditGenre;