import React from "react";

const Color = (props) => {
    return (
        <div className="col col-3">
            <img src={props.imageUrl} alt={props.styleName} onClick={props.colorChange}></img>
        </div>
    );
};

export default Color;