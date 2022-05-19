import React, { useEffect, useState } from 'react'
import { instance } from '../setProxy'


import "./style.css";


export default function Recipelist() {
  const [mylist, setMylist] = useState<any>()
  useEffect(() => {
    instance.get("/recipe/r").then((res)=> {
      setMylist(res.data)
      console.log(res.data)
    }).catch(err=> {
      console.log(err)
    })
  }, [])
  return (
    <div className='Three'>
      <p>MyLIST</p>
      {
        mylist && mylist.map((item: any) => {
          return (
            <div className='Four' key={item.id}>
              <p>Name : {item.name}</p>
              <p>Id : {item.recipeId}</p>
              <p>Description : {item.description}</p>
            </div>

          )

        })
      }


    </div>
  )
}
