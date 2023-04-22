import React from "react";
import Card from "../UI/Card";
import style from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from "react-redux";
const Cart = props =>{
    const cartItems = useSelector(state=>state.cart.items);
    console.log(cartItems);
    return(
        <Card className={style.cart}>
            <h2>Your shopping Cart</h2>
            <ul>
           {cartItems.map(item =>  <CartItem 
           key={item.id}
                item = {{title:item.name, id:item.id, quantity:item.quantity ,total:item.totalPrice, price:item.price}}
            />)}
            </ul>

        </Card>
    );
};
export default Cart;