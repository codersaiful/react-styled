import React, { Component } from 'react';
import './Style.css';

class Button extends Component{

    constructor(){
        super();
        this.state = {
            label: "Click Button",
            className: 'button',

        };

        
    }

    render(){
        return(
            <button 
            className={this.state.className}
            >
                {this.state.label}
            </button>
        );
    }
}

export default Button;