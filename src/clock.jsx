import React, { useState, useEffect } from "react";

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

const Clock = () => {
    const time = useTime();
    const timeString = (time.getHours()).toString().padStart(2, '0') + ":" + (time.getMinutes()).toString().padStart(2, '0');
    return <div className="time">{timeString}</div>;
}

export default Clock;