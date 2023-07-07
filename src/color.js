import React from "react";

const Color = (props) => {
    console.log("testing color.js");
    
    return (
        <div className="col col-3">
            <img src={props.imageUrl} alt={props.styleName}></img>
        </div>
    );
};

export default Color;