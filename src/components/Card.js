import React, { useState } from 'react'
import './Card.css'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc'
import { toast } from 'react-toastify'

const Card = (props) => {
    const overview=props.movie.overview;
    const movieid=props.movie.id;

    const setliked=props.setLiked;
    const liked=props.liked;
    function handler(){
        if(liked.find(m => m.id === movieid)){
            setliked(prev=>prev.filter((m)=>m.id!==movieid))
            
            toast.warning("Movie Removed From Liked List");
        }
        else{
            
            setliked((prev)=>[...prev,props.movie])
            toast.success("Movie Added To Liked List")
        }
    }
    const isLiked = liked.some(m => m.id === movieid);
  return (
    <div className='card'>
        <img src={`https://image.tmdb.org/t/p/w500${props.movie.backdrop_path}`} alt="img"></img>
        {!isLiked?(<button onClick={handler} className="card-but"><FcLikePlaceholder className='heart'/></button>):
        (<button className="card-but"onClick={handler}><FcLike className='heart'/></button>)}
        <div className='about'>
        <p className='title'>{props.movie.title}</p>
        <div> <p className='date'>Relaese Date :- </p>{props.movie.release_date}</div>
        <p className='overview'> { overview.length>200?(overview.substr(0,155))+"...":(overview)}</p>
        </div>
    </div>
  )
}

export default Card
