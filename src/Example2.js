import React, { Component } from 'react'
import Chart from "./component/Chart";
// import axios from 'axious';

export default class Example2 extends Component {
  constructor(props){
    super(props);
    this.state ={
      data : ""
    }
  }
 

  
  onCall =()=>{
    // fetch는 url주소는 우리가 데이터를 보낼 주소
    fetch("http://localhost:3005/callbody",{
      method:"get",
      headers : {
        "content-type" : "application/json",
      }, // header, body 넘어가는 데이터 형식이 다름 
      body : JSON.stringify(),
    })
    
    .then((res)=>res.json())
    .then((json)=>{

     
var ss=[];
      for (let i=0; i<json.length; i++){
        ss[i] = json[i].COLUMN_NAME}
      this.setState({
        // 가져 오고 싶은 데이터 뽑기
         data : ss
        
      }); 
      console.log(this.state.data);
    
    });
     // res로 받은것을 json으로 변환하고 json.text을 this.state.id에 저장한다.
  }; 
  render() {
    
    return (
      <div>
          <div id = "select">
    
    x축: <select id="X" onchange="xval(value);"onClick={this.onCall}>
      <option>{this.state.data[0]}</option>
      <option>{this.state.data[1]}</option>
      <option>{this.state.data[2]}</option>
      <option>{this.state.data[3]}</option>
    </select>
    &nbsp;
    <script>
    </script>
    y축: <select  id="Y" onchange="yval(value);"onClick={this.onCall}>
    <option>{this.state.data[0]}</option>
      <option>{this.state.data[1]}</option>
      <option>{this.state.data[2]}</option>
      <option>{this.state.data[3]}</option>
    </select>

</div>  


        <h2>데이터가져오기</h2>
        <h3>{this.state.data[0]}</h3>
   

        {/* <button onClick={this.onCall}>가져오기</button> */}

<Chart></Chart>
        
      </div>

      
    );
  }
}
