// Code EyesOnMe Component Here
import React from "react";


function EyesOnMe() {

    function blur(event){
        console.log("Hey! Eyes on me!")
    }
    function focus(event){
    console.log('Good!')
}

    return  <button onFocus={focus} onBlur={blur}>'Eyes on me'</button> 
}


export default EyesOnMe