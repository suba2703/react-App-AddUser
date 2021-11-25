import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Form from './Form';
import CardList from './cardList'
// gaearon, sophiebits, sebmarkbage, bvaughn
class App extends React.Component

{

  /*constructor(props){

    super(props);

    //props will not send data to sibling hence we are going with state. This state will recive data  using constructor and app class will pass data using stae to the cardList component

    this.state={

      profiles: testData,

    };*/

  state={

    profiles:[],

  }

  addNewProfile=(profileData)=>{

    console.log('App',profileData);

    this.setState(prevState=>({

      profiles:[...prevState.profiles,profileData]

    }))

   

  };

  //Insetad of above way of using we can use a simple class field like below

 

  state={profiles: []};

  render() {

          return (

            <div>       

              <div className="header">{this.props.title}</div>

        <Form onSubmit={this.addNewProfile}/>

        <CardList profiles={this.state.profiles}/>

            </div>

    );

  }        

}
export default App
// ReactDOM.render(

//   <App title="The GitHub Cards App" />,
  
//     mountNode,
  
//   );
