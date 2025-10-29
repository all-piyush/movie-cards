import './App.css';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import Cards from './components/Cards';

function App() {
  const[totalpages,settotalpages]=useState(1);
  const[val,setval]=useState(1);
  const [liked, setLiked] = useState(() => {
    const saved = localStorage.getItem('movielist');
    return saved ? JSON.parse(saved) : [];
  });
  const[genre,setgenre]=useState("");
  const [result,setresult]=useState([]);
  const [genreresult,setgenreresult]=useState([]);
  const apikey=process.env.REACT_APP_API_KEY;
  
  
  useEffect(() => {
  localStorage.setItem('movielist', JSON.stringify(liked));
}, [liked]);
  const fetchdata=async()=>{
  let response=await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=${val}`);
  const result= await response.json();
  setresult(result.results);
  settotalpages(result.total_pages);
  }
  useEffect(()=>{
    fetchdata();
  },[val])
  useEffect(()=>{
    const fetchgenre=async()=> {
      let genreresponse=await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apikey}&language=en-US`);
    const genreresult=await genreresponse.json();
    setgenreresult(genreresult.genres);
    }
    fetchgenre();
  },[apikey])

  return (
    <div className="App">
      <div className='header'>Random Movies</div>
      <Navbar genre={genre} setgenre={setgenre} genreresult={genreresult} setval={setval} fetchdata={fetchdata} totalpages={totalpages}></Navbar>
      <Cards result={result} genre={genre} liked={liked} setLiked={setLiked}  ></Cards>
      </div>
  );
}

export default App;
