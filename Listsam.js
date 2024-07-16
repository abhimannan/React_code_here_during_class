import React from "react";
const Listsam=()=>{
 // const names=["geetha","kumar"];
const cars=[
 {id:1,name:"ferary"},
 {id:2,name:"lambo"},
 {id:3,name:"abhi"}
]
return(<>
<ul>
 {
    cars.map((data)=>{
     return (<li key={cars.id}>{data}</li>)
    })
 }
</ul>


</>)

}
export default Listsam;