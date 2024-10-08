import Request from '../../Services/Request.tsx';
import React from 'react';
import './genre.css'
const Genre = () => {

    const form = React.createRef<HTMLFormElement>();


     const AddGenre = () => {
     Request.AddGenre(form.current).then((data) => {
            if (data['status']) {
                form.current?.reset();
            }
        });
    }
    return (
        <form ref={form} method="post" id="AddGenreForm" className="boxShadow borderr form-GP font-setting-form">

            <span></span>
            <span></span>
            <div className="field-group elemet-setting">
                <input required name="Title" className="info borderR" type="text" placeholder="Input new Genre" />

            </div>
            <div className="field-group elemet-setting">
                <input id="addGenre" onClick={AddGenre} className="button-castom-form  borderR info"
                    type="button" value="Confirm" />
            </div>
        </form>
    );
};

export default Genre;