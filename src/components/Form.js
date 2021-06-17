import React, { Component } from 'react';
import Button from '../module/button/Button';

class Form extends Component{
    constructor(props){
        super(props);
        this.state ={
            username: ""
        }
        this.color = {color:'red'}
        this.inputButton = (<input
            id="color-change-input"
            defaultValue="red"
            type="text" placeholder="color name. eg: red"
        />);
    }

    updateUsername = event => {
        this.setState({username: event.target.value});
    }
    updateColor = () => {
        //alert(44545);
        console.log(this.inputButton.value);
        this.setState({username: 'skdjfdkf'});
    }

    render(){
        return(
            <div className="form-wrapper">
                <h1 style={{color:'red',textDecoration:'underline'}}>Hello {this.state.username}</h1>
                <input
                    type="text"
                    onChange={this.updateUsername}
                />
                <h2 id="color-heading" style={this.color}>This is a Test Text, which color will be change.</h2>
                <label htmlFor="color-change-input">
                    Change Color
                </label>
                <React.StrictMode>
                    {this.inputButton}
                </React.StrictMode>
                <br/>
                <button onClick={this.updateColor}>Change Color</button>
                
            </div>
        );
    }
}

export default Form;