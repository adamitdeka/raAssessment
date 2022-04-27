import React,{ useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "../components/products/List";
import { reqProducts } from "../redux/action";
import Header from "../components/layout/header";

function Home() {
    const dispatch = useDispatch();
    const products = useSelector((state)=>state.products.products)
    useEffect(()=>{dispatch(reqProducts())},[]);
    return ( 
    <React.Fragment>
        <Header/>
        <ProductList data={products}/>
    </React.Fragment> );
}

export default Home;