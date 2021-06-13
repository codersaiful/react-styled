import React, { Component } from 'react';

class Layout extends Component{

    constructor(){
        super();
        window.document.title = "My React App.";
    }

    render(){
        return(
            <div className="wrapper">
                <h2>This is My React Site. 2nd time Testing.</h2>
            </div>
        );
    }
}

export default Layout;