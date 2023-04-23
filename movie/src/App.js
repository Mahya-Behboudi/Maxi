import React , {useEffect, useState , useCallback} from 'react';
import './App.css';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
  // ===================================================================================================================================

function App() {
  const [movies , setMovies] = useState([]);
  const [isLoading , setIsLoading] = useState(false);
  const [error , setError] = useState(null);

  // ===================================================================================================================================

   async function addMovieHandler(movie){
try{
  const response = await fetch("https://reacttesthttp-default-rtdb.firebaseio.com/movies.json" , {
    method:'POST',
    body:JSON.stringify(movie),
    headers:{
      'Content-Type' : 'application/json'
    }
  });
  const data = await response.json();
  // console.log(data); 
}
catch(error) {
  setError(error.message)
}
  }




  // ===================================================================================================================================


   async function fetchMOviesHandler(){
  setIsLoading(true);
  setError(null);
  // ===================================================================================================================================


   try{
    const response =await fetch("https://reacttesthttp-default-rtdb.firebaseio.com/movies.json");
      if(!response.ok) {
        throw new Error('somthing went wrong!')
      }
    const data = await response.json()
    console.log(data);
    const loadedMovies = [];
    for(let key in data) {
      loadedMovies.push({
        id:key,
        title:data[key].title,
        openingText:data[key].openingText,
        releaseDate:data[key].releaseDate
      });
    }
   setMovies(loadedMovies);
   }
      catch (e){
         console.log('nope ')
    setError(e.message);

}
setIsLoading(false);


 }




  // ===================================================================================================================================








  let content = <p>Found no movies!</p>;
  if(isLoading) {
    content =<p>Loading ....</p>
  }
  if(movies.length>0){
    content=<p>{<MovieList movies={movies}/>}</p>
  }
  if(error) {
    <p>{error}</p>
  }




  // ===================================================================================================================================
  return (
    <React.Fragment>
      <AddMovie onAddMovie={addMovieHandler}/>
      <section>
        <button onClick={fetchMOviesHandler}> Fetch movies</button>
      </section>
      <section>
    {content}
      </section>
    </React.Fragment>
  );
}

export default App;
