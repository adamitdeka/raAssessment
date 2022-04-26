import styled from "styled-components";
import { Modal, useTheme, Box, Flex, Image, Radio, Text } from "native-base";
import { fontSize } from "styled-system";
import faucet from "../../../assets/faucet.png"



function ProductModal(props){
    const {colors, fontConfig, fonts, fontSizes} = useTheme();

    const ProductType = styled.h3`
        font-family: ${fonts.body};
        font-size: 1em;
        text-transform: uppercase;
        letter-spacing: 1px;
    `
    const PackageName = styled.h3`
        font-family: ${fonts.body};
        font-size: 1em;
        text-transform: capitalize;
    `

    const ImageWrapper = styled.div`
        padding: 1em;
        border: 1px solid ${colors.muted[900]}
    `

    const ProductBrand = styled.h2`
        font-family: ${fonts.body};
        font-size: 1.5em;
        color: ${colors.muted[900]};
        text-transform: capitalize;
        margin-bottom: 0;
    `
    const ProductName = styled.h2`
        font-family: ${fonts.body};
        font-weight: 400;
        font-size: 1.2em;
        color: ${colors.muted[900]}
        color: ${colors.muted[900]};
        text-transform: capitalize;
    `
    const Key = styled.p`
        font-family: ${fonts.body};
        font-size: 0.8em;
        font-weight: 400;
        color: ${colors.muted[600]}
    `
    const Value = styled.p`
        font-family: ${fonts.body};
        font-size: 0.8em;
        font-weight: 400;
        color: ${colors.muted[700]}
    `

    return (
        <Modal isOpen={props.isOpen} onClose={props.handleClose} safeAreaTop={true}>
            <Modal.Content maxWidth="1000" >
               <Box p={8}>
                    <Flex direction="row">
                        <Box pr={10} style={{borderRight :`1px solid ${colors.muted[200]}`}}>
                            <ProductType>Bathroom Faucet</ProductType>
                            <Box mb={5}>
                                <PackageName>Premium</PackageName>
                                <ImageWrapper>
                                    <Image source={faucet} style={{ width: 180, height:180}} />
                                </ImageWrapper>
                            </Box>
                        </Box>
                        <Box pl={10} >
                            <ProductBrand>Brizo</ProductBrand>
                            <ProductName>Two Handle Wall-Mount Faucet</ProductName>
                            <Box mb={5} style={{borderBottom :`1px solid ${colors.muted[200]}`}}>
                                <Flex direction='row' justifyContent='space-between' style={{'width': '80%','margin':0}}>
                                    <Key>Flow Rate</Key>
                                    <Value>1.5 GPM</Value>
                                </Flex>
                            </Box>
                            <Box>
                                <Text >Lorem isum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies orci in varius pulvinar. Nunc consequat vel nulla vel luctus. Donec tristique, tortor non elementum dignissim, risus libero scelerisque libero, et euismod nibh nulla vel nunc. Phasellus commodo tincidunt ex mollis elementum. Nullam eget lobortis nulla, vel dapibus mi.</Text>
                            </Box>
                        </Box>
                    </Flex>     
               </Box> 
            </Modal.Content>
        </Modal>
    ) 
};

export default ProductModal;

