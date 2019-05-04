import React from "react";
import "./bCombate.css";
import ProgressBar from 'react-bootstrap/ProgressBar'

const CardLife = props=>{
    return(
    	<div className="card my-2 p-2 shadow">
    		<div className="card-body justify-content-arround"><h1>{props.stName} Lv:{props.nvl}</h1></div>
    		<ProgressBar now={props.life} />
        </div>
    );
}
export default CardLife;;