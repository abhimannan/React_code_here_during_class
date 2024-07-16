import React, { useState } from "react"

const Samplecomponent=(props)=>{
 function handlecolor(e){
    document.title="onClick";
 }
 const [name,changeName]=useState("");
   function handlevalue(e){
    changeName(e.target.value);
   }
    return(
    <>
    <div>
    <h1>{`Hello ${props.name} welcome to codding world`}</h1>
    
   <button onClick={handlecolor}>onClick()</button>
    <input onChange={handlevalue} type="text"  />
    
    <h1>{name}</h1>

    </div>
    </>
    );



}
export default Samplecomponent;
