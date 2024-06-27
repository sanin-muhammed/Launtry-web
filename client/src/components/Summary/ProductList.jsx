import React from "react";
import { useSelector } from "react-redux";
import "./style.css";
const ProductList = () => {
    const { cartList } = useSelector((state) => state.cart);
    console.log("cartList = ", cartList);
    return (
        <div className="receipt_container">
            <h3>Products</h3>
            <div className="product_list">
                {cartList.length ? (
                    cartList.map((item, index) => (
                        <div className="product_item" key={index}>
                            <img src={item.productImage} alt="jsdfs" />
                            <div>
                                <h3>{item.product}</h3>
                                <h5>₹ {item.price}</h5>
                            </div>
                            <h4 className="count">{item.count}</h4>
                        </div>
                    ))
                ) : (
                    <>
                        <div className="product_item">
                            <br />
                            <br />
                        </div>
                        <div className="product_item">
                            <br />
                            <br />
                        </div>
                        <div className="product_item">
                            <br />
                            <br />
                        </div>
                        <div className="product_item">
                            <br />
                            <br />
                        </div>
                        <div className="product_item">
                            <br />
                            <br />
                        </div>
                        <div className="product_item">
                            <br />
                            <br />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ProductList;
