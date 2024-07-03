import useFetch from "./useFetch.js";
import "./styles.css";

export default function App(){
  
  const url = "https://v2.jokeapi.dev/joke/Programming?type=single";
  const {data,loading,error,getJoke}  = useFetch(url);

  if(loading){
    <p>Loading...</p>
  }

  if(error){
    <p>Something went wrong...</p>
  }

  return(
    <div className="App">
      <h1>Joke Generator</h1>
      <h2>{data.joke}</h2>
      <button className="btn" onClick={getJoke}>New Joke</button>
    </div>
  );
    
}