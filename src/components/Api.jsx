import axios from 'axios'
import React, { useState } from 'react'




const Api = () => {

    const [myjoke, setmyjoke] = useState([])
    let endpoint = `https://v2.jokeapi.dev/joke/Any`

const getData = () => {
    axios.get(endpoint)
    .then((response)=>{
        console.log(response.data);
        setmyjoke(response.data)
    })
    .catch((err)=>{
        console.log(err);
    })
}
let oneDiv = {
    position: 'relative',
    top: '300px',
    left: '200px'
}

  return (
    <>
    <h1>JOKES GENERATOR</h1>
    <div className='w-25 mt-5'>
        <button className='btn btn-dark' onClick={getData}>Get Joke</button>
    </div>
    
    <div className=''>
    
    {
     
     <div className='text-dark boder border-dark border-2'>
        <p className='text-dark'>{myjoke.setup}</p>
        <p className='text-dark'>{myjoke.type}</p>
     </div>
    
    }

    </div>
   
    
    </>
  )
}

export default Api