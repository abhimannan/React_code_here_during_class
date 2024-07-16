import {useState} from 'react'
import './Advice.css'
const Adviceapp = () => {
 const [advice,setAdvice]=useState("Please click button to get advice");
 async function getadvice(){
  let res=await fetch("https://api.adviceslip.com/advice");
  const data= await res.json();
  console.log(data);
  setAdvice(data.slip.advice);
 }
  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getadvice}>GET ADVICE</button>
    </div>
  )
}

export default Adviceapp
