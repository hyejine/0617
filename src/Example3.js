import React, { Component } from 'react'
import './App.css';
export default class App extends Component {
  state = {
    testbody : "",
    data : "",
  }
  //state?? 

  handleChange =(e)=>{
    this.setState({       
      [e.target.name] : e.target.value,
    });
    // 새로운 값 부여? target.name?? 
  }

  submitId = (value)=>{
    const post ={
      test : this.state.value,
    };
   // { test: '7' ,'','','','',''}

  // submitId 함수안에 fetch함수를 작성하여 server에 보낼 준비한다.
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
    // fetch는 url주소는 우리가 데이터를 보낼 주소
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
        // 가져 오고 싶은 데이터 뽑기 
        data : json.이름,
        data2 : json.성별,
        data3 : json.COLUMN_NAME
        
      }); 
    });console.log(this.state)
     // res로 받은것을 json으로 변환하고 json.text을 this.state.id에 저장한다.
  }; 
  render() {
    return (
      <div>
        <form onSubmit={this.submitId}>
        <input onChange={this.handleChange} name ="testbody"/>
        {/* <input onChange={this.handleChange} name ="testbody2"/>
        <input onChange={this.handleChange} name ="testbody"/>
        <input onChange={this.handleChange} name ="testbody"/>
        <input onChange={this.handleChange} name ="testbody"/>
        <input onChange={this.handleChange} name ="testbody"/>
        <input onChange={this.handleChange} name ="testbody"/> */}
        <button type="submit">Submit</button>
        </form>
        <h1>{this.state.testbody}</h1>
        <br/><br/><br/><br/><br/>
        <h2>데이터가져오기</h2>
        <h3>{this.state.data}</h3>
        <h3>{this.state.data2}</h3>
        <h3>{this.state.data3}</h3>

        <button onClick={this.onCall}>가져오기</button>
      </div>
    )
  }
}