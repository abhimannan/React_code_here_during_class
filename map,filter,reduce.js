import React from "react";
function App() {
 var numbers = [2, 3, 4, 52, 3, 12];
 //let x=numbers.map((data)=>{console.log(data*2)});
 //numbers.filter((data)=>{console.log(data*2)});
 //console.log(x);
 //filter
 //numbers.forEach((data)=>console.log(data*3));
 //let x= numbers.filter((nums)=>{return nums>10});
 //reduce(function)
 //let y=numbers.reduce((pre,next)=>{return pre+next});
 //console.log(y);
 //let x=numbers.map((data)=>{return data})
 //console.log(x);
 //let good=(a)=>{console.log(a);}
 //good(2);
 //let num=[1,2,3];
 //let sqares=num.map((data)=>{return data**2})
 //console.log(sqares);
 //annonomous function
 //let arr=[1,2,3];
 //let mul=arr.map(function (data){return data*2});
 //console.log(mul);
 //let arr=[1,2,3];
 //let mul=arr.map((data)=>{return data*2});
 //console.log(mul);
 /*let array=[10,20,25,2,3,5,50];
 let below=array.filter((data)=>{
    return data<10;
 });
 console.log(below);
 let sum=array.reduce((pre,next)=>{
    return pre+next;
 });console.log(sum);
 let index=array.findIndex((data)=>{return data>10});
 console.log(index);*/
 let arr = [2, 2, 2, 2];
 let add = arr.map((data) => { return data + 2 });
 console.log(add)
 let low = arr.filter((data) => { return data > 10 });
 console.log(low);

 return (
  <div className="App" >


  </div>
 );
}

export default App;
