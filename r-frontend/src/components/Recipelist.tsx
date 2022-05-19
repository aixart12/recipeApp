import React, { useEffect, useState } from 'react'
import { instance } from '../setProxy'





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
    <div>
      <p>Hi</p>
      {
        mylist && mylist.map((item: any) => {
          return (
            <div key={item.id}>
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
