import { useState } from "react";
import { Box, Flex } from "native-base";
import CategoryHeading from "../commons/CategoryHeading";
import Card from "../commons/Card";
import styled from "styled-components";
import ProductModal from "../commons/Modal";

function ProductList() {
    const [openModal, setModal] = useState(false)

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
    const handleClick=(event)=>{
        setModal(true);
    }
    const closeModal = (event)=>{
        setModal(false);
    }
    return ( 
        <Box>
            <Box><CategoryHeading category="bath"/></Box>
            <ListContainer >
                <ListItem onClick={handleClick} href="#"><Card m={2}/></ListItem>
                <ListItem href="#"><Card m={2}/></ListItem>
                <ListItem href="#"><Card m={2}/></ListItem>
                <ListItem href="#"><Card m={2}/></ListItem>
                <ListItem href="#"><Card m={2}/></ListItem>
                <DisabledListItem href="#"><Card m={2} luxury/></DisabledListItem>
            </ListContainer>
            <ProductModal isOpen={openModal} handleClose={closeModal}/>
        </Box>
     );
}

export default ProductList;