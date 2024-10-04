
import { useEffect, useRef, useState } from 'react'
import './timer.css'

const Timer = () => {

    const timerInputRef = useRef<HTMLInputElement>(null);
    const [timerOut, setTimerOut] = useState(0);
    const [startPauseBt, setSPBt] = useState(false);
    const [stopBtn, setStopBtn] = useState(false);
    const [idTimer, setTimerId] = useState(0);
    const[isDisablet,setDisabled]=useState(false);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        
        if(parseInt(e.target.value)<1){

            e.target.value='';
        }else{
            setTimerOut(parseInt(e.target.value))
        }
        
        


    }


    const TimerView = (isStart: boolean, isStop: boolean) => {

        let temp: number = timerOut;
        if (isStop) {
            clearInterval(idTimer);
            setTimerOut(0);
            setSPBt(false);
            setDisabled(false);
           
        }
        if (isStart) {

            
            const idTimer = setInterval(() => {
              
                if(temp<=0){
                    clearInterval(idTimer);
                    setSPBt(false);
                    setDisabled(false);
                    setTimerOut(0);
                    
                    
                }else{
                    setTimerOut(temp -= 1);
                }
                
              
            }, 1000);
            console.log(idTimer)
            setTimerId(idTimer)

        } else {
            console.log("dddd", idTimer)
            clearInterval(idTimer);

        }
    };

    useEffect(() => {
        TimerView(startPauseBt, stopBtn);
    }, [startPauseBt, stopBtn])
    return (


        <>
            <div id='timer-content'>
                <input ref={timerInputRef} disabled={isDisablet} onChange={onChange} type='number' placeholder='Enter seconds' />
                <label >{timerOut}</label>
                <button onClick={() => { setSPBt(!startPauseBt); setStopBtn(false);setDisabled(!isDisablet) }} > {startPauseBt ? "Pause" : "Start"}</button>
                <button onClick={() => setStopBtn(!stopBtn)}> Stop</button>

            </div>
        </>


    )
}

export default Timer