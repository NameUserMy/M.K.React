import Request from '../../Services/Request.tsx';
import React from 'react';
import { useEffect, useState } from 'react';
import './track.css'

const Track = () => {
    const form = React.createRef<HTMLFormElement>();
    const [genreOption, setOptionG] = useState<Array<any>>([]);
    const [performerOption, setOptionP] = useState<Array<any>>([]);

    const SendTrack = () => {

        Request.AddTrack(form).then((data) => {

            if (data['status']) {
                form.current?.reset();

            }

        });

    }
    useEffect(() => {
        Request.GetGenreData().then((data) => { setOptionG(data); });

        Request.GetPerformerData().then((data) => { setOptionP(data); });

    }, []);


    let optionG: any = [];
    for (let index of genreOption) {
        optionG.push(
            <option key={index.id} value={index.id} >{index.title}</option>
        )
    }

    let optionP: any = [];
    for (let index of performerOption) {
        optionP.push(
            <option key={index.id} value={index.id} >{index.name}</option>
        )
    }

    return (


        <form id="trackUpload" ref={form} encType="multipart/form-data" className="boxShadow borderr form-Track font-setting-form">
            <span></span>
            <div className="field-group elemet-setting">
                <select name='idGenre' id="genreSelect" >{optionG}</select>
            </div>
            <div className="field-group elemet-setting">
                <select name='idPerformer' id="performerSelect">{optionP}</select>
            </div>
            <input id="file-upload" type="file" name="uploadFile" />
            <input id="addTrack" onClick={SendTrack} className="button-castom-form back-color-button-Green borderR info" type="button" value="Confirm" />
        </form>



    );


}

export default Track;