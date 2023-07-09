import React from "react";

const Color = (props) => {
    return (
        <div className={props.className}>
            <img src={props.imageUrl} alt={props.styleName} onClick={props.colorChange}></img>
        </div>
    );
};

export default Color;