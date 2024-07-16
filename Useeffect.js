import {useState,useEffect} from 'react'

const Useeffect = () => {
 const [count,setCount]=useState(0);
 const [times,setTimes]=useState(0);
 function handlecount(){
  setCount(count+1);
 }
 function handletimes(){
  setTimes(times+1);
 }
/*
useEffect(()=>{
 // 1.code to run
 // 3.optional return function
 },[]);// 2.Dependency array
*/
// No dependency : every time mounts(loading)
// useEffect(()=>{
//  console.log("I am no dependecy useEffect");
// });
// Empty dependency
// useEffect(()=>{
//  console.log("I am no dependecy useEffect");
// },[]);
// state dependency
useEffect(()=>{
 console.log("I am no dependecy useEffect");
},[count,times]);
  return (
    <div>
      <h1>Count :{count}</h1>
      <h1>Times :{times}</h1>
      <button onClick={handlecount}>+</button>
      <button onClick={handletimes}>Times</button>
    </div>
  )
}

export default Useeffect
