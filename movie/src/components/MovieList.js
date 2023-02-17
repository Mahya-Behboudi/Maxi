import React from "react";
import style from './MovieList.module.css';
import Movie from "./Movie";
const MovieList = props =>{
    return(
        <ul className={style['movie-list']}>
            {props.movies.map((movie) => (
                <Movie
                    key={movie.id}
                    title={movie.title}
                    releaseDate={movie.releaseData}
                    openingText={movie.openingText}
                
                />
            ))}
        </ul>
    );
}
export default MovieList;