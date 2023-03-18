import React from 'react'
import {useState, useEffect} from 'react';

function Detail(){

  let [alert, setAlert] = useState(false)
  // useEffect(()=>{
  //   setTimeout(()=>{ setAlert(false) }, 2000)
  // }, [])

    useEffect(()=>{
    setTimeout(()=>{ setAlert(true) }, 2000)
  }, [])

  return (
    <div>
      {
        alert == true ? <h1 className="alert alert-warning"> 2초이내 구매시 할인 </h1> : null
      }
    </div>

  )
}

export default Detail
