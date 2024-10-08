import { useEffect, useState } from "react";
import Request from '../../Services/Request.tsx';
import React from 'react';

const Performer = () => {

    const form = React.createRef<HTMLFormElement>();
    const [genre, setGenre] = useState<Array<any>>([])
    const AddPerformer = () => {

        Request.AddPerformer(form.current).then((data) => {

            if (data['status']) {

                form.current?.reset();

            }
        });

    };

    useEffect(() => {


        Request.GetGenreData().then((data) => {


            setGenre(data);



        });


    }, []);


    let option: any = [];
    for (let index of genre) {
        option.push(
            <option value={index.id} >{index.title}</option>
        )
    }



    return (

        <form ref={form} id="formPerformer" className="boxShadow borderr form-GP font-setting-form">

            <span></span>
            <div className="field-group elemet-setting">
                <select name='genreId' id="genreSelect">
                    {option}
                </select>
            </div>
            <div className="field-group elemet-setting">
                <input name="Name" id="Name" className="info borderR" type="text" placeholder="Input new performer" />
            </div>
            <div className="field-group elemet-setting">
                <input onClick={AddPerformer} className="button-castom-form  borderR info"
                    type="button" value="Confirm" />
            </div>
        </form>

    );
};

export default Performer;