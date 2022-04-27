import { useState } from "react";
import { Box, Flex } from "native-base";
import CategoryHeading from "../commons/CategoryHeading";
import Card from "../commons/Card";
import styled from "styled-components";
import ProductModal from "../commons/Modal";

function ProductList(props) {
    const products = props.data;
    const [openModal, setModal] = useState(false);
    const [modalData, setModalData] = useState({isOpen:false,data:null});
    const ListContainer = styled.div`
        display: grid;
        grid-template-columns: auto auto auto;
    `
    const ListItem = styled.button`
        margin: 1em;
        text-decoration: none;
        border-style: none;
        background-color: transparent;
        cursor:pointer;
    `
    const DisabledListItem = styled.button`
        pointer-events: none;
        cursor: default;
        border-style: none;
    `
    const closeModal = (event)=>{
        setModalData({isOpen: false, data: false });
    }
    let productList = [];
    if(products&&Object.keys(products).length>0){
        Object.keys(products).forEach((item,index)=>{
            let product = products[item].attributes.product;
            if(product.luxury.isLuxury){
                productList.push(<DisabledListItem key={index} href="#"><Card isLuxury brandName={product.brandName} productName={product.name} image={product.img.list}/></DisabledListItem>)
            }else{
                productList.push(<ListItem key={index} onClick={()=>{setModalData({isOpen: true, data:product})}} href="#"><Card brandName={product.brandName} productName={product.name} image={product.img.list}/></ListItem>)
            }
        })
    }

    return ( 
        <Box>
            <Box><CategoryHeading category="bath"/></Box>
            <ListContainer >
                {productList}
            </ListContainer>
            <ProductModal isOpen={modalData.isOpen} handleClose={closeModal} data={modalData}/>
        </Box>
     );
}

export default ProductList;