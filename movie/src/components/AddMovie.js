import React, { useRef } from "react";
import style from './AddMovie.module.css';

const AddMovie = props =>{
    const titleRef = useRef('');
    const openingTextRef = useRef('');
    const releaseDateRef = useRef('');
    function submitHandler(event) {
        event.preventDefault();
    }
    const movies = {
        title:titleRef.current.value,
        openingText:openingTextRef.current.value,
        releaseDate:releaseDateRef.current.value,
    };
    props.onAddMovie(movies);
    return(
        <form onSubmit={submitHandler}>
            <div className={style.control}>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" ref={titleRef}></input>
            </div>
            <div className={style.control}>
                <label htmlFor="opening-text">Opening Text</label>
                <textarea rows='5' id="opening-tetx" ref={openingTextRef}></textarea>
            </div>
            <div className={style.control}>
                <label htmlFor="date">Release Date</label>
                <input type="text" id="date" ref={releaseDateRef}/>
            </div>
            <button>Add Movies</button>
        </form>
    );
}
export default AddMovie