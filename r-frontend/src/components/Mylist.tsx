import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { instance } from '../setProxy';

// import { instance } from '../setProxy'
import "./style.css";

export default function Mylist() {
    
  const [datas , setDatas] = useState<any>()


  
  
  useEffect ( () => {
    const getRecipe = async ()=>{
        const d = await axios.get('http://localhost:3333/recipe')
        setDatas(d.data);

    }
      getRecipe()
  },[])
  console.log("-----",datas)
  const AddtoList = async (data : any) => {
    console.log("-----Cliked----", data);
    await instance.post('/recipe' ,data)
  
  }


  return (
      <div className='One' >
        <div >
        <p><h1>Recipe list</h1></p> 
        <hr></hr>
      </div>
           <div >
            {
            datas && datas.map((data: any) =>{
            return (
              <div className='Two' key={data.id}>
                <p> Recipe ID =  {data.id}</p>
                <p> Recipe Name = {data.name}</p>
                {/* <p> Recipe Name = {data.description}</p> */}
                <button onClick={()=>{AddtoList(data)}}>Add to cart</button>
              </div>

            )

            })
          }
          
          <button  ><Link to="/r">MYLIST</Link></button>
      </div>
    </div>
  )

}