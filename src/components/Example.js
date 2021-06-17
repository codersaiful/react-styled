import React, { Component } from 'react';
import Button from './../module/button/Button';

class Example extends Component{

    constructor(){
        super();
        window.document.title = "My React App.";
    }

    render(){
        return(
            <div className="wrapper">
                <h2>This is My React Site. 2nd time Testing.</h2>
                <Button className="button" label="Click Here"/>
            </div>
        );
    }
}

export default Example;