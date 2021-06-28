import React, { useState } from 'react'
import Bar1 from "./component/Bar1";
import Pie1 from "./component/Pie1";
import Line1 from "./component/Line1"

export default function Example2() {
  
  const [mode, setMode] = useState(['Bar','Pie', 'Line']);
  const [option, setOption] = useState("");   

  

  const onChange = (a) => {
    console.log('option', a.target?.value);
    setOption(a.target?.value);
  }
 
    
    return (
      <div>
       
<div>
Cahrt Type: <select id='s1' onChange ={onChange}  >
<option name = 'Bar' value="Bar" >{mode[0]} </option>
<option name = 'Bar' value="Pie">{mode[1]}</option>
<option value="Line" >{mode[2]}</option>
</select>

</div>
{/*
{this.state.mode==='Bar'? <Bar1></Bar1>: (this.state.mode==='Pie'?<Pie1></Pie1>:<Line1></Line1>)}
</div> */}
{option === 'Bar' && (
  <Bar1></Bar1>
)}

{option === 'Pie' && (
  <Pie1></Pie1>
)}

{option === 'Line' && (
  <Line1></Line1>
)}
</div>
    );
  }






