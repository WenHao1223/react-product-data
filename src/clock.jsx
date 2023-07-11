import React, { useState, useEffect} from "react";
import classes from "./HeartBeat.module.css"

function useTime(){
    const [time, setTime] = useState(() => new Date());
    useEffect(() => {
        const id = setInterval(() => {
        setTime(new Date());
        }, 1000);

        return () => clearInterval(id);
    });
    return time;
}

function heartBeat(){
    const [classUsed, setClassUsed] = useState(() => classes.heartbeat);
    useEffect(() => {
        const id = setInterval(() => {
            setClassUsed( (classUsed == classes.heartbeat) ? classes.pump : classes.heartbeat)
        }, 500)

        return () => clearInterval(id);
    });
    return classUsed;
}

const Clock = (props) => {
    if(props.featureActive){
        return(
            <div style={{position: "relative"}}>
                <img className={heartBeat()} src="src/assets/heartbeat.png" alt="Heart beat"></img>
                <p className={classes.text}>78</p>
            </div>
        );
    } else {
        const time = useTime();
        const timeString = (time.getHours()).toString().padStart(2, '0') + ":" + (time.getMinutes()).toString().padStart(2, '0');
        return timeString;
    }
}

export default Clock;