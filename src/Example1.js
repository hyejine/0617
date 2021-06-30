import React, { Component} from 'react'
import { Bar,Pie,Line } from 'react-chartjs-2'

// x,y축 각각의 json 데이터를 담아서 골라 쓰기 위해 빈 배열을 만듦
// 선택한 {'이름': 홍길동} {'이름': 신사임당} '이름'에 해당하는 값들만 찾기 위해서
let selectDataAll = [];
let selectYDataAll = [];

 class DataSelectOpt extends Component {
    
  constructor() {
        super();
      this.state = {
        dataNames:[],
        selectwhat:'',
       chartData:[],
      mode: ['Bar','Pie', 'Line'],
      option: "Bar",
      dataNames2:[],
      jsonArray1:'',
      allData:'',
        
      };
        }

    // 서버 db에서 값을 받아오려면 클래스형 컴포넌트에 + componentDidMount API를 써야함
        componentDidMount(){
      
      console.log("componentDidMount 실행");
      fetch('http://localhost:3005/callbody',{
      headers:{"content-type":"application/json"},
      body:JSON.stringify(),
      method:"get"})
     .then(res =>res.json())
     .catch(err => console.log(err))
     .then((json)=>{
        let jsonArray = json; //json 값을 새로운 변수에 담음 
      //  console.log(jsonArray);  //받아온 데이터 json형태로 출력 
        let columnNames = Object.keys(jsonArray[0])
       console.log(columnNames); //컬럼명만 추출
     this.setState({
       dataNames:columnNames,  // 컬럼네임만 
       jsonArray1 : jsonArray, // 데이터 전부 
      })
})

fetch('http://localhost:3005/yvalue',{
  headers:{"content-type":"application/json"},
  body:JSON.stringify(),
  method:"get"})
 .then(res =>res.json())
 .catch(err => console.log(err))
 .then((json)=>{
    let jsonYArray = json; //json 값을 새로운 변수에 담음 
  //  console.log(jsonArray);  //받아온 데이터 json형태로 출력 
    let columnNamesY = Object.keys(jsonYArray[0])
  //  console.log(columnNames); 컬럼명만 추출

 this.setState({
   dataNamesY:columnNamesY,
   jsonArray1Y : jsonYArray,
  })
  // console.log("select y value",this.state.dataNamesY)

})
}

// chart타입 함수 
 onChange = (a) => {
  this.setState({option : a.target.value});
  console.log("state.option : ", this.state.option)
}


handleOnchange = (e)=>{
      let showData = this.state.dataNames;  //위 setstate 로 지정했던 것 다시 씀. 컬럼명들만 나옴
      //console.log("showData",showData)
      let dataAll= this.state.jsonArray1 // 데이터 전체값 

      let showYData = this.state.dataNamesY; 
      let YdataAll= this.state.jsonArray1Y

      //셀렉트박스 x1 이라는 id 를 눌렀을 때 
      if(e.target.id === "x1"){
        let selectIdx =  document.getElementById("x1").selectedIndex //선택한 인덱스 값 
        let selectedValue = document.getElementById('x1').options[selectIdx].value; 
        //선택한 값 = e.target.value 와 같음 

      //선택되지 않은 값만 따로 필터링 
      let unselected = showData.filter((x)=>{
        return x !== selectedValue
      })
     // console.log("x에서 선택되지 않은 값 ",unselected);
      
     // 값이 바뀌게 되면 상대쪽 option 길이는 본인을 제외한 길이
     document.getElementById('y1').length = showData.length-1;
      let yselect = document.getElementById('y1')
      
      // y쪽 option에 unselect 배열 값으로 바꿔넣기 
      for (const key in unselected) {
        yselect[key].innerText = unselected[key]        
      }

     // 특정 데이터 전체값 확인 
      for (const key in dataAll) {
        selectDataAll[key] = dataAll[key][selectedValue]
      }
      console.log("selectX",selectDataAll)


    }else if(e.target.id === "y1"){
      let selectIdx =  document.getElementById("y1").selectedIndex
      let selectedValue = document.getElementById('y1').options[selectIdx].value;
      let unselected = showData.filter((x)=>{
        return x !== selectedValue
      })
      
      document.getElementById('x1').length = showData.length-1;
      console.log(document.getElementById('x1'))
      console.log(document.getElementById('x1').innerText)
      let selectx = document.getElementById('x1')
      for (const key in unselected) {
        selectx[key].innerText = unselected[key]        
      }
      console.log('y선택 index'+ selectIdx)
      console.log('x선택 index'+ document.getElementById('x1').selectedIndex)
      
      


    let selectDataAllY = [];
      for (const key in dataAll) {
        selectDataAllY[key] = dataAll[key][selectedValue]
      }
      console.log("select",selectDataAllY)


      this.setState({
    //컬럼명 
       labels: selectDataAll,  
       datasets: [
         {
           borderWidth: 1, // 테두리 두께
           data:  selectDataAllY,  
           
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
             ] 
           }
         ]
    
    
         
        }
        )
     
   }
  
  }

    render() {
        let showdata = this.state.dataNames
        let AddDataOpt = showdata.map(DataNameIdx =><option key={DataNameIdx}>{DataNameIdx}</option>)
        let AddDataOpt2 = AddDataOpt.slice();
        return (
         <div>
             X축: &nbsp;
          <select id="x1" onChange={this.handleOnchange}>
          {AddDataOpt}
          </select>
          &nbsp;&nbsp; 
            Y축: &nbsp;
             <select id="y1" onChange={this.handleOnchange}>
          {AddDataOpt2}
          </select> 


          &nbsp;&nbsp; 
Cahrt 타입: <select id='s1' onChange ={this.onChange}  >
<option name = 'Bar' value="Bar" >{this.state.mode[0]} </option>
<option name = 'Bar' value="Pie">{this.state.mode[1]}</option>
<option value="Line" >{this.state.mode[2]}</option>
</select>


{/* option이 pie일때  */}
{this.state.option === 'Pie' && (
   <Pie data={this.state} options={{
    responsive:true,
    title: {text:'Thiccness scale', display: true},
    scales: {
        yAxes:[
            {
                ticks:{
                    autoSkip:true,
                    maTicksLimit: 10,
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
)}


{/* option이 Line일때  */}
{this.state.option === 'Line' && (
   <Line data={this.state} options={{
    responsive:true,
    title: {text:'Thiccness scale', display: true},
    scales: {
        yAxes:[
            {
                ticks:{
                    autoSkip:true,
                    maTicksLimit: 10,
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
)}

{/* option이 Bar일때  */}
{this.state.option ==='Bar' &&(
   <div style={{width:800}}>
       
   <Bar data={this.state} options={{
      responsive:true,
      title: {text:'Thiccness scale', display: true},
      scales: {
          yAxes:[
              {
                  ticks:{
                      autoSkip:true,
                      maTicksLimit: 10,
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


)}

         
         </div>
        )
    }
  }
 
export default DataSelectOpt;
