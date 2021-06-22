import React, {Component} from 'react'
import {Line} from 'react-chartjs-2';
// 차트 모양 => Line


// labels : x값
// datasets: x값에 해당 되는 y 값
const data= {
    labales : ['일','이','삼','사','오','육'], 
    dataset : [
        {
            lable: 'chart',
            data: [0.5,0.4,0.3,0/7,0.5,0.6],
            filll: false,
            backgroundColor: 
                'rgba(255, 99, 132, 0.2)',
            borderColor: 
                'rgba(255, 99, 132, 1)',
            borderWidth: 1
        },
    ],
};

const options ={
    scales: {
        yAxes :[
            {
                ticks:{
                    beginAtZero: true,
                },
            },
        ]
    }
};


export default class Chart extends Component{

render(){
    return(
<div>
    <h1> chart</h1>
    <Line data = {data} options ={options}/>
</div>
    );
}


}