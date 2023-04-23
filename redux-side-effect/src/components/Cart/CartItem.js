import React from "react";
import style from './CartItem.module.css';
import {  useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
const  CardItem = props => {
    const {title , quantity , total , price , id } = props.item;

    const dispatch = useDispatch();
    // const cartItems = useSelector(state=>state.cart.items);
    // console.log(cartItems);
    const incrementItem = () =>{
        dispatch(cartActions.addItemToCard({
            id,
            title,
            price,
            quantity,
        }))
        console.log(dispatch);
    };
    const decrementItem = () =>{
        dispatch(cartActions.removeItemFromCart(id));
    };
    return(
        <li className={style.item}>
            <header>
                <h3>{title}</h3>
                <div className={style.price}>${total} {" "}</div>
                <span className={style.itemprice}> (${price})</span>
            </header>
            <div className={style.details}>
                <div className={style.quantity}>
                    x <span>{quantity}</span>
                </div>
                <div className={style.actions}>
                    <button onClick={incrementItem}>+</button>
                    <button onClick={decrementItem}>-</button>
                </div>
            </div>
        </li>
    );
} 
export default CardItem;