import React, {useRef, useState} from "react";
import Map from "./map/Map";

const Main = (props) => {
    return (
        <div>
            <Map {...props}/>
            <div >
                <h1 >some info</h1>
            </div>
        </div>
    );
}


export default Main;