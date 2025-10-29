import React from 'react'
import Card from './Card'
import './Cards.css'
const Cards = (props) => {
    const result=props.result;
    const genre=props.genre;
    const liked=props.liked;
    let filtermovies=result;

    if (genre==="liked") {
        filtermovies=liked;
    } 
    else if(genre===""){
        filtermovies=result;
    }
    else {
        filtermovies=result.filter((movie)=>movie.genre_ids.includes(genre))    }
  return (
    <div className='cards'>
        {filtermovies.map(movie=>(
            <Card key={movie.id} movie={movie}liked={liked} setLiked={props.setLiked}></Card>
        ))}
    </div>
  )
}

export default Cards
