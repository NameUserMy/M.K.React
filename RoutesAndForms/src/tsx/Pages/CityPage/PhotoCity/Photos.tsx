
import Galery from "../Galery";
import React from 'react';
import './photoCity.css'
const Photos = () => {



    let [count, forvard] = React.useState(0);
    const press = () => {
        if (count < Galery.Photo.length - 1) {
            count += 1;

        }
        forvard(count)
    }

    const press1 = () => {
        if (count != 0) {
            count -= 1;

        }
        forvard(count)
    }
    return (


        <>
            <div id='photoMain'>
                <div id='imgPhoto' style={{ backgroundImage: `url(${Galery.Photo[count]})` }} >
                    <div id='forvard' onClick={press}>&#8680;</div>
                    <div id='back' onClick={press1}>&#8678;</div>
                </div>
            </div>
        </>
    )


};

export default Photos;