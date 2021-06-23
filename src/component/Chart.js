import React, {Component} from 'react'
import {Bar} from 'react-chartjs-2'
// 차트 모양 => Line


const onCall =()=>{
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

     

      this.setState({
        // 가져 오고 싶은 데이터 뽑기
         data1 : json
        
      }); 
      console.log(this.state.data);
    
    });
     // res로 받은것을 json으로 변환하고 json.text을 this.state.id에 저장한다.
  }; 

// labels : x값
// datasets: x값에 해당 되는 y 값
const data= {
    labels : ['일','이','삼','사','오','육'], 
    datasets : [
        {
            lable: 'chart',
            data: [1,5,6,7,5,9],
            filll: true,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        },
    ],
};

const options ={
    // plugins: {legend:{display:false}},
    layout:{padding:{bottom:100}},
    scales: {
       y:{
           ticks:{
               color: "purple",
               fornt: {
                   size:18
               }
           }
       },

       x:{
        ticks:{
            color: "blue",
            fornt: {
                size:18
            }
        }
    },

    },
};


export default class Chart extends Component{

  


render(){
    return(
        <div>
        C: <select  id="" onClick ={this.onCall} >  {/* onCall했을때 차트 불러와지게 하기 */}
        <option value = "Bar">Bar</option>
        <option value = "Line">Line</option>
        <option value = "Pie">Pie</option>
        </select>
<div style={{height: "600px", width: "600px"}}>
    <h1> chart</h1>
    <Bar data = {data} options ={options}/>
</div>
</div>
    );
}


}