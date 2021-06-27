import React, { Component } from 'react'
import Chart from "./component/Chart";
// import Select3 from "./component/Select3";
// import axios from 'axious';

export default class Example2 extends Component {
  constructor(props){
    super(props);
    this.state ={
      mode:['Bar','Pie','Line']
    
    }
  
  }

  chartVaule=(a)=>{
    console.log(a.target.value);

<Chart></Chart>
   

  if(a.target.value ===this.state.mode[0]){
  
    const value = a.target.value;
    document.getElementById('result').innerText = value; 
    console.log("2");
  } else{
    document.getElementById('result').style.display ="none";
  }
  }


  render() {
   
    if(this.state.mode==='Bar'){

    }else if(this.state.mode==='Pie'){

    }
    return (
      
      <div>

       
   Cahrt Type: <select onChange={this.chartVaule}>

<option value="Bar">{this.state.mode[0]} </option>
<option value="Pie">{this.state.mode[1]}</option>
<option value="Line" >{this.state.mode[2]}</option>
</select>
<div id ='result'  class ='result'></div>
</div>
    );
  }
}
