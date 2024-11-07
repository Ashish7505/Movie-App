import React, { useRef, useState } from 'react'
import search_icon from "./assets/search.png"

const Movie = () => {
    const[data,setData]=useState([])
    const inputref=useRef()


    const search=async(data)=>{
        try{
            const url=`https://www.omdbapi.com/?s=${data}&apikey=397282bd` 

            const response=await fetch(url)
            const result=await response.json();
            console.log(result);


            
            setData({
              title:result.Search.Title,
              releaseyear:result.Search.Released,
              potedimage:result.Search.Poster,
              rating:result.Search.Ratings
            
            })
            
        }
        catch(error){
              console.log("error");
              
        }
    }


  return (
      <div className='Movieapp'>
  <div>
    <input type='text' ref={inputref} placeholder='Enter movie name'></input>
    <img src={search_icon} alt=''onClick={()=>search(inputref.current.value)}/>
  </div>
  <ul>
{/* 
    {
      data.map((item)=>{
       <li>{item.title}</li>,
       <li>{item.releaseyear}</li>,
       <li>{item.potedimage}</li>,
       <li>{item.rating}</li>
      })
    } */}
  </ul>
      </div>
  )
}

export default Movie
