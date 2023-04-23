import React from "react";
import style from './Products.module.css';
import ProductItem from './ProductItem';

const Products = props =>{
    const DUMMY_ITEMS =[
        {
            id:"p1",
            price:6,
            title:'the first item',
            discription:"this is the first product :)"
        },
        {
            id:"p2",
            price:12,
            title:'the second item',
            discription:"this is the second product :("
        },
        {
            id:"p3",
            price:12,
            title:'the Third item',
            discription:"this is the Third product :("
        },
        {
            id:"p4",
            price:12,
            title:'the Four item',
            discription:"this is the Four product :("
        },
        {
            id:"p5",
            price:12,
            title:'the fifth item',
            discription:"this is the fifth product :("
        }
    ]
    return(
        <section className={style.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {DUMMY_ITEMS.map(item=> 
                 <ProductItem 
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    discription={item.discription}
                />)}
               
            </ul>
        </section>
    );
};
export default Products;