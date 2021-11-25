import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
class Form extends React.Component{

    state={userName:''};
  
    userNameInput=React.createRef();
  
    handleSubmit= async (event)=>{
  
      event.preventDefault(); //to prevent default Html submit
  
      const resp=await axios.get(`https://api.github.com/users/${this.state.userName}`)
  
      this.props.onSubmit(resp.data);
  
      this.setState({userName:''});
  
    };
  
    // //ref is a reference like a fancy Id in react
  
    render(){
  
      return (<form onSubmit={this.handleSubmit}>
  
        
  
        <input type="text" placeholder="git hub username"
  
          ref={this.userNameInput} value={this.state.userName}
  
          onChange={event=>this.setState({userName:event.target.value})}
  
          required></input>
  
        <button > Add</button>
  
      </form>);
  
    }
  
  }
  export default Form