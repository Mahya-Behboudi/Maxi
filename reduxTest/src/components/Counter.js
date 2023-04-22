import React from "react";
import style from './Counter.module.css';
import {useSelector , useDispatch} from 'react-redux'
import { counterActions } from "../store/counter";

const Counter = () =>{
   const dispatch = useDispatch()
     const counter = useSelector(state => state.counter.counter);
     const show = useSelector(state =>state.counter.showCounter);
     const decrementHandler = () =>{
        dispatch(counterActions.decrement())
     };
     const incrementHandler = () =>{
        dispatch(counterActions.increment());
     };
     const increaseHandler = () =>{
        dispatch(counterActions.increase(5))
     }
    const toggleCounterHandler = () =>{
        dispatch(counterActions.toggle());
    };
    const decreaceHandler = () =>{
        dispatch(counterActions.decrease(5));
    }
    return (
        <main className={style.counter}>
            <h1>Reduc Counter</h1>
           {show && <div className={style.value}>{counter}</div> }
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={decrementHandler}>Decrement</button>
                <button onClick={increaseHandler}>Increase by 5</button>
                <button onClick={decreaceHandler}>decrease by 5</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );

}
export default Counter;