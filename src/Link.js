import React from "react";

function Link({text, target}){
    return (
        <a href={target}>{text}</a>
    )
}

export default Link