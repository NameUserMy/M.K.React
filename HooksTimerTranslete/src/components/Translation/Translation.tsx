


import { useEffect,useState } from 'react';
import './translation.css'

const Translation = () => {
   

    
    const [valueKir,setKir]=useState('');
    const [inputValue,setTs]=useState('')
    let uniKir:Array<number>=new Array();

    let translate:Array<string>=['a', 'b', 'v', 'g', 'd', 'e', 'e', 'j', 'i', 'y', 'k', 'l', 'm', 'n', 'o', 'p', 'r',
         'c', 't', 'y', 'f', 'x', 'c', 'ch', 'sh', 'sh','b','bl','b','e','u','ya'];
   

    for(let i=1072;i<1104;i++){
        uniKir.push(i);
    }
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTs(e.target.value);
    }
useEffect(()=>{
  let temp:string='';  


for(let i=0;i<inputValue.length;i++){

    let result=translate[uniKir.findIndex((value)=>{return value==inputValue.charCodeAt(i)})];
    if(result===undefined){
    temp+=inputValue[i];
       continue;
    }
     temp+=result;



}

setKir(temp);

},[inputValue])
   


    return (
        <>

            <div id='tr-content'>
                <input type='text' onChange={onChange} placeholder='Input text'></input>
                <textarea   value={valueKir}name="area" id="area">
                </textarea>
            </div>

        </>


    )


}

export default Translation