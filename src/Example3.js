import React, { Component } from 'react'
import './App.css';
export default class App extends Component {
  state = {
    testbody : "",
    data : "",
  }

  handleChange =(e)=>{
    this.setState({        //dd
      [e.target.name] : e.target.value,
    });
  }

  submitId = (value)=>{
    const post ={
      test : this.state.value,
    };
   //{ test: '7' ,'','','','',''}
    fetch("http://localhost:3005/idplz", {
      method : "post", // 통신방법
      headers : {
        "content-type" : "application/json",
      },
      body : JSON.stringify(post),
    })
    .then((res)=>res.json())
    .then((json)=>{
      this.setState({
        testbody : json.text,
        
      }); 
    });
  };
  onCall =()=>{
    fetch("http://localhost:3005/callbody",{
      method:"post",
      headers : {
        "content-type" : "application/json",
      },
      body : JSON.stringify(),
    })
    
    .then((res)=>res.json())
    .then((json)=>{
      this.setState({
        data : json.이름
        
      }); 
    });console.log(this.state)
    
  }; 
  render() {
    return (
      <div>
        <form onSubmit={this.submitId}>
        <input onChange={this.handleChange} name ="testbody"/>
        <input onChange={this.handleChange} name ="testbody2"/>
        <input onChange={this.handleChange} name ="testbody"/>
        <input onChange={this.handleChange} name ="testbody"/>
        <input onChange={this.handleChange} name ="testbody"/>
        <input onChange={this.handleChange} name ="testbody"/>
        <input onChange={this.handleChange} name ="testbody"/>

        <button type="submit">Submit</button>
        </form>
        <h1>{this.state.testbody}</h1>
        <br/><br/><br/><br/><br/>
        <h2>데이터가져오기</h2>
        <h3>{this.state.data}</h3>
        <button onClick={this.onCall}>가져오기</button>
      </div>
    )
  }
}