import React from "react";
import Card from "../UI/Card";
import style from './ProductsList.module.css';
import { cartActions } from "../../store/cart-slice";
import { useDispatch } from "react-redux";
const ProductItem= props =>{
    const  {title , price , discription ,id} = props;
    const dispatch = useDispatch();
    const addToCartHandler = () =>{
        dispatch(cartActions.addItemToCard({
            id,
            title,
            price,
        }));
        console.log(id,title,price);
    }
    return (
        <li className={style.item}>
            <Card>
                <header>
                    <h3>{title}</h3>
                    <div className={style.price}>${price.toFixed(2)}</div>
                </header>
                <p>{discription}</p>
                <div className={style.actions}>
                    <button onClick={addToCartHandler}>Add to Card!</button>
                </div>
            </Card>
        </li>
    );
}
export default ProductItem;