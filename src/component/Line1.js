import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Line } from 'react-chartjs-2'


  export default function  Chart(){
      
    const [chartData,setChartData] = useState({
        // labels:   "",
        // datasets: [
        //   {
        //     borderWidth: "", // 테두리 두께
        //     data: "", // 수치
        //     backgroundColor:[] // 각 막대 색
        //   }
        // ]
    });
//   const [option, setOption] = useState();
   
    const [color,setColor] = useState("데이터 연결안됨"); 

    const chart = ()=> {
        let n =[];
        let a = [];
    
        axios.get("http://localhost:3005/callbody")
        .then (res=> {
            console.log("res :",res);
            console.log("res.data : ",res.data);
            for(let i=0; i<res.data.length; i++){
                n[i] = res.data[i].이름;
                a[i] = res.data[i].나이;
            }
            setChartData ({
                // 각 막대별 라벨
                labels:   n,
                datasets: [
                  {
                    borderWidth: 1, // 테두리 두께
                    data: a, // 수치
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
                    ] // 각 막대 색
                  }
                ]
              });

            
            
            // for (const dataObj of res.data){
            //     n.push(parseInt(res.data[1].이름));
            //     a.push(parseInt(dataObj.나이));
            // }
            console.log("value-----",res.data[1].이름)
        })
        .catch(err=>{
            console.log(err);
        })
        console.log("n : --------", n);
    

        console.log("엔값입니다.",n,a);

        

// const options = {
//     legend: {
//       display: false, // label 보이기 여부
//     },
//     scales: {
//       yAxes: [{
//         ticks: { 
//           min: 0, // y축 스케일에 대한 최소값 설정
//           stepSize: 1, // y축 그리드 한 칸당 수치
//         }
//       }]
//     },
   
//     // false : 사용자 정의 크기에 따라 그래프 크기가 결정됨.
//     // true : 크기가 알아서 결정됨.
//     maintainAspectRatio: false 
//   }
}
const changeColor =()=>{
   
        setColor("데이터 연결",chart());
        console.log("변경됨 ");
    
    
}


    return (



    
    <div style={{width:800}}>
        <div><button onClick={changeColor} >{color}</button></div>
        <Line data={chartData} options={{
           responsive:true,
           title: {text:'Thiccness scale', display: true},
           scales: {
               yAxes:[
                   {
                       ticks:{
                           autoSkip:true,
                        //    maTicksLimit: 10,
                           beginAtZero: true
                       },
                       gridLines:{
                           display: false
                       }

                   }
               ],
               xAxes:[{
                        ticks:{
                            color: "blue",
                            fornt: {
                                size:18
                            }
                        }
                    }]
           }
           }} />
           
    </div>

    );
  }
 
