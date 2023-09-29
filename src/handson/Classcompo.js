
import React, { Component } from "react";
import './style.css'

class Classcompo extends Component{
    constructor(){
        super();
        this.state={
             inline:'This is done using inline css',
             external:'This is done using external css',
             heading:'This is Created using Class Component'
        }
       
    }

render() {
    return(
        <div className="boxl">
        <h1>{this.state.heading}</h1>
        <p className="external">{this.state.external}</p>
        <p style={{color:'blue',fontSize:'22px'}}>{this.state.external}</p>
        </div>
    )
}
}

export default Classcompo;

