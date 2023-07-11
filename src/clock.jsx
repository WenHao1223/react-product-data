import React, { useState, useEffect} from "react";
import classes from "./HeartBeat.module.css"

function useTime(){
    const [time, setTime] = useState(() => new Date());
    useEffect(() => {
        const timeId = setInterval(() => {
        setTime(new Date());
        }, 1000);

        return () => clearInterval(timeId);
    });
    return time;
}

function heartBeat(){
    const [classUsed, setClassUsed] = useState(() => classes.heartbeat);
    useEffect(() => {
        const heartId = setInterval(() => {
            setClassUsed( (classUsed == classes.heartbeat) ? classes.pump : classes.heartbeat);
        }, 500);

        return () => {
            clearInterval(heartId);
        };
    });
    return classUsed;
}

function ClearAllIntervals() {
    for (var i = 1; i < 99999; i++)
        window.clearInterval(i);
}

const Clock = (props) => {
    if(!props.featureActive){
        const time = useTime();
        var timeString;
        try {
            timeString = (time.getHours()).toString().padStart(2, '0') + ":" + (time.getMinutes()).toString().padStart(2, '0');
        } catch (e) {
            timeString = "--:--";
        }
        return timeString;
    } else {
        return(
            <div style={{position: "relative"}}>
                <img className={heartBeat()} src="src/assets/heartbeat.png" alt="Heart beat"></img>
                <p className={classes.text}>78</p>
            </div>
        );
    }
}

export default Clock;