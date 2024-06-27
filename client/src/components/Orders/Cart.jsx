import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allProducts } from "../../Actions/actions";
import AfterAdd from "./CartButtons/AfterAdd";
import BeforeAdd from "./CartButtons/BeforeAdd";
import { setProducts } from "../../Redux/reducers/products";
import ProceedBtn from "./CartButtons/ProceedBtn";
import { addToCart, decrement, increment, setCartCount, setTotalPrice } from "../../Redux/reducers/cart";

const Cart = () => {
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.products);
    const { cartList, cartCount } = useSelector((state) => state.cart);
    console.log({ cartList });

    const total = () => {
        dispatch(setCartCount());
        dispatch(setTotalPrice());
    };
    const addCart = (item) => {
        console.log({ item });
        dispatch(addToCart(item));
        total();
    };

    const incCart = (id) => {
        dispatch(increment(id));
        total();
    };
    const decCart = (id) => {
        dispatch(decrement(id));
        total();
    };

    const fetchProduct = async () => {
        const response = await allProducts();
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        fetchProduct();
    }, []);
    return (
        <div className="products_div">
            <div className="position_div">
                <div className="products">
                    {products.map((item, index) => {
                        const cartItem = cartList.find((cartItem) => cartItem.productId === item._id);
                        const count = cartItem ? cartItem.count : 0;

                        return (
                            <div className="product" key={index}>
                                <img src={item.productImage} alt="product image" />
                                <p>{item.product}</p>
                                <p>₹ {item.price}</p>
                                {count > 0 ? <AfterAdd incCart={() => incCart(item._id)} decCart={() => decCart(item._id)} count={count} /> : <BeforeAdd addCart={() => addCart({ productId: item._id, product: item.product, price: item.price, productImage: item.productImage })} />}
                            </div>
                        );
                    })}
                </div>
                <ProceedBtn />
            </div>
        </div>
    );
};

export default Cart;
