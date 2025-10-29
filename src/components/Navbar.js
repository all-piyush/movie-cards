import React from 'react'
import './Navbar.css'
import { toast } from 'react-toastify';
const Navbar = (props) => {
  const genre=props.genre;
  const setgenre=props.setgenre;
  const genreresult=props.genreresult;
  function changehandler(e){
    const obj=genreresult.find(element=>element.name===e);
      if(obj){
        setgenre(obj.id);
      }
      if(e==="liked"){
        setgenre("liked")
      }
  }
  function changepage(){
    console.log(props.totalpages);
    const num= Math.floor(Math.random() *500) + 1;
    props.setval(num);
  }
  return (
    <div className='navbar'>
        <button onClick={()=>{changepage() ;setgenre("")}}>Generate</button>
        <button onClick={()=>{setgenre(""); toast.success("Genre Changd To All")}}>All</button>
        <button onClick={()=>{changehandler("Romance");toast.success("Genre Changd To Romance")}}>Romance</button>
        <button onClick={()=>{changehandler("Horror");toast.success("Genre Changd To Horror")}}>Horror</button>
        <button onClick={()=>{changehandler("Comedy");toast.success("Genre Changd To Comedy")}}>Comedy</button>
        <button onClick={()=>{changehandler("Drama");toast.success("Genre Changd To Drama")}}>Drama</button>
        <button onClick={()=>{changehandler("liked");toast.success("Displaying Liked List")}}>Liked</button>
    </div>
  )
}

export default Navbar
