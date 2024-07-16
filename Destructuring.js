import React, { useState } from 'react'


const Destructuring = () => {
    const [text,changeText]=useState("Hello");
    const [color,changeColor]=useState("green");
    const [display,setDisplay]=useState("");
    const [head,setHead]=useState("");
    function handleChange(event){
     setDisplay(event.target.value);
    }
    function change(event){
     setHead(text);
    event.preventDefault();
    }
    function clr(){
     changeColor("red");
    }
    function out(){
     changeColor("yellow");
    }
   return (
    <div>
     <form onSubmit={change}> 
     <h1>{head}</h1>
     <input onChange={handleChange} type="text" placeholder="whhat is your name"></input>
     <button style={{backgroundColor:color}} onClick={change} onMouseOver={clr} onMouseOut={out} className='btn' type="submit">Submit</button>   
     <h1>{display}</h1> 
     </form>   
    </div>
  )
}

export default Destructuring
