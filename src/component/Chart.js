// import { response } from 'express';
import axios from 'axios';
// import { response } from 'express';
import React, {useEffect, useState} from 'react'
// import {Bar} from 'react-chartjs-2'
// import axios from 'axios';
// import {API_URL} from "./ap/Api";
// 차트 모양 => Line

// export default function Chart(){
//     const [count, setCount] = useState(0);
//     useEffect(()=> {
//        document.title = '업데이트 횟수: ${count}'
// console.log(count);
//     })
// return <button conClick ={ ()=> setCount(count+1)}> increase</button>
// }
// console.log(count);

export default function Chart(){
    const [data, setData] = useState([]);
    // const [error, setError] = useState(null);
    console.log("1");
// const api = async()=> {

//    try {
// setData([]);
// setError(null);

// const response = await axios.get('http://localhost:3005/callbody');
// setData(response.data);
// console.log("data"+data);
//    } catch(e){
//        setError(e);
//        console.log("error"+error);
//    }

// }
// useEffect(async()=>{

//         const result = await axios.get("http://localhost:3005/callbody");
//         setData(result.data);
//         console.log(result);
    
// },[]);

useEffect(() => {

    //query를 리턴하는 함수를 result에 할당
    async function get() {
      const result = await axios.get(
        `http://localhost:3005/callbody`
        );}
        setData(result.data);
                console.log(result);

      },[]);


return (
<div>
    <h1>{data}</h1>
</div>
);
}

//     useEffect(async ()=>  {
//         const result = await axios.get(
//         "http://localhost:3005/callbody"
//         );
//         setData(response.data);
//     }, []);
// return (


//     <ul>
//     {data.hits.map((item) => (
//       <li key={item.objectID}>
//         <a href={item.url}>{item.title}</a>
//       </li>
//     ))}
//   </ul>


// );

// }
// }
// function getUserAPI(userID){
//     return new Promise(resolve=>{
//         resolve({

//         })
//     })
// }
// const Dankmemes = () => {
//     const [chartData, setChartData] = useState({});



// }
// function Chart(){

//     const [chart, setChart] = useState([]);
//     const [loading,setLoading] = useState(false);
// const [error, setError] = useState(null);


// const fetchCahrt = async() => {
//     try {
//       // 요청 처음에 초기화
//       setError(null);
//       setChart([]);
//       // loading 상태 true
//       setLoading(true);

//       const response = await axios.get('http://localhost:3005/callbody');
//       setChart(response.data);
//       console.log('fetch HotelNames');
//     } catch (e) {
//       setError(e);
//     }
//     setLoading(false);
//   };


//   useEffect(() => {
//     fetchCahrt();
//   }, []);



    

//     // labels : x값
// // datasets: x값에 해당 되는 y 값
// const data= {
//     labels : ['일','이','삼','사','오','육'], 
//     datasets : [
//         {
//             lable: 'chart',
//             data: [1,5,6,7,5,9],
//             filll: true,
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         },
//     ],
// };

// const options ={
//     // plugins: {legend:{display:false}},
//     layout:{padding:{bottom:100}},
//     scales: {
//        y:{
//            ticks:{
//                color: "purple",
//                fornt: {
//                    size:18
//                }
//            }
//        },

//        x:{
//         ticks:{
//             color: "blue",
//             fornt: {
//                 size:18
//             }
//         }
//     },

//     },
// };

    
//         return(
//             <div>
//             C: <select  id="" onClick ={useEffect} >  {/* onCall했을때 차트 불러와지게 하기 */}
//             <option value = "Bar">Bar</option>
//             <option value = "Line">Line</option>
//             <option value = "Pie">Pie</option>
//             </select>
//     <div style={{height: "600px", width: "600px"}}>
//         <h1> chart</h1>
//         <Bar data = {data} options ={options}/>
//     </div>
//     </div>
//         );
    
// }

// export default Chart;



