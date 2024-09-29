
import './sight.css'
import Galery from '../Galery';
import React from 'react';
const Sight = () => {

    let[count,forvard]=React.useState(0);
    const press=()=>{
        if(count<Galery.Img.length-1){
            count+=1;

        }
        forvard(count)
    }

    const press1=()=>{
        if(count!=0){
            count-=1;

        }
        forvard(count)
    }
    return (
        <>
            <div id='sightMain'>
                <div id='imgSight' style={{backgroundImage:`url(${Galery.Img[count]})`}} >
                    <div id='forvard' onClick={press}>&#8680;</div>
                    <div id='back'  onClick={press1}>&#8678;</div>
                </div>
                <div id='infoSight'>{Galery.Info[count]}</div>
            </div>
        </>
    )


};

export default Sight;