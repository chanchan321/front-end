import {React,useState} from 'react'
import Axios from 'axios';
import './App.css';

function App() {

  const [movieName,setMovieName] =useState('')
  const [review,setReview] =useState('')

  const submitReview=()=>{
    Axios.post("https://backendsszz.herokuapp.com/api/insert",{
      movieName:movieName,
      movieReview:review
    }).then(()=>{
      console.log('success insert')
    }).catch((err)=>{
      console.log(err)
    })
  }

  return (
    <div className="App">
      <h1>CRUD application</h1>

      <div className="form">
        <label>Movie name</label>
        <input type="text" name="moviename" onChange={(e)=>setMovieName(e.target.value)}/>
        <label>Movie review</label>
        <input type="text" name="review" onChange={(e)=>setReview(e.target.value)}/>
        <button onClick={submitReview}>Submit</button>
      </div>
    </div>
  );
}

export default App;
