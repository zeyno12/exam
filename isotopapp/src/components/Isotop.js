import React, { useState } from 'react'
import Data from './Mock/Main'

const Isotop = () => {
const [items,setItem]=useState(Data);
const FilterJS=(category)=>{
    const update=Data.filter((index)=>index.category===category);
    setItem(update);
    console.log(update);
}


  return (
    <div>
    <div style={{display:"flex", justifyContent:"center",alingItems:"center", gap:25, margin:"30px 0px"}}>
    <button style={{padding:"10px 12px", border:"none",borderRadius:10, color:"blue",backgroundColor:"lightblue" }} 
onClick={()=>setItem(Data)}
    >All</button>
    <button style={{padding:"10px 12px", border:"none",borderRadius:10, color:"blue",backgroundColor:"lightblue" }}
onClick={()=>FilterJS("Woman")}
    >Woman</button>
    <button style={{padding:"10px 12px", border:"none",borderRadius:10, color:"blue",backgroundColor:"lightblue" }}
onClick={()=>FilterJS("Men")}
    >Men</button>
    <button style={{padding:"10px 12px", border:"none",borderRadius:10, color:"blue",backgroundColor:"lightblue" }}
onClick={()=>FilterJS("Kids")}
    >Kids</button>
    </div>



      <div className='container'>
      <div className='row'>
      {
        items.map((el,id)=>(
            <div className='col-lg-3' key={id}>
            <img src={el.image} style={{width:"100%", height:400,objectFit:"cover", borderRadius:10, border:"2px solid gray" }} />
            <h4>{el.name}</h4>
            <p>{el.detals}</p>
            </div>
        ))
      }
        </div>
        </div>  
    </div>
  )
}

export default Isotop