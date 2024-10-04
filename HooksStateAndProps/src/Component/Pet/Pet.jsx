import { useEffect, useRef, useState } from 'react'
import './pet.css'
import img from '../../assets/hamster.jpg'
const Pet = (state) => {
 
  const [info, SetInfo] = useState(false);
  const [opacity, SetOpacity] = useState(0.0);
  const [idTimer,setIdTimer]=useState(0);
  const bi=useRef();

  useEffect(() => {

  
    if (info&&opacity==0.0) {
      bi.current.style.backgroundImage=``
      changeOpacity(info);
    }
    if(opacity>=1&&!info){
      bi.current.style.backgroundImage=`url(${img})`
      changeOpacity(info);

    }
    if(opacity>=1||!info&&opacity==0){
            clearInterval(idTimer)
    }

   



  }, [info,opacity])

const changeOpacity=(info)=>{

  let op=0.1;
 console.log(info)
  const timer =setInterval(() => {
    if(info){
      SetOpacity(`${op+=0.1}`);
    }else{
   console.log(opacity)
      SetOpacity(`${op-=0.1}`);

    }
      
      setIdTimer(timer)
  }, 100);

}





  return (
    <>
      <div id='pet-info'>
        <div id='title'><h1>«Домашний любимец»</h1></div>
        <div id='pet-card' ref={bi} onMouseEnter={()=>SetInfo(!info)}  onMouseLeave={()=>SetInfo(!info)}  
        style={{ backgroundColor: `rgba(46, 46, 46,${opacity})`,backgroundImage:`url(${img})`}}>
          <span className="about" style={{opacity:`${opacity}`}} >Имя: Ceмечка </span>
          <span className="about" style={{opacity:`${opacity}`}} >происхождения: Галапагосский-длинношёрстный </span>
          <span className="about" style={{opacity:`${opacity}`}} >Возраст: Бессмертен </span>
          <span className="about" style={{opacity:`${opacity}`}} >Характер: Скверный</span>
          <span className="about" style={{opacity:`${opacity}`}} >Статус: Не женат </span>
        </div>
        <div id='commad-pet'>
          <div id='title'><h1>Знает команды</h1></div>
          <span className="about">Поглощать</span>
          <span className="about">Быть пушистым</span>
          <span className="about">Сальто </span>
          <span className="about">Бегать в колесе</span>
        </div>

      </div>
    </>
  )
}

export default Pet