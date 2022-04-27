import styled from "styled-components";
import { Modal, useTheme, Box, Flex, Image, Radio, Text } from "native-base";

function ProductModal(props){
    const {colors, fontConfig, fonts, fontSizes} = useTheme();
    const {isOpen, handleClose} = props;
    const {data} = props.data;


    const ProductType = styled.h3`
        font-family: ${fonts.body};
        font-size: 1em;
        text-transform: uppercase;
        letter-spacing: 1px;
    `
    const AsideHeading = styled.h3`
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
        font-weight: 700;
        color: ${colors.muted[700]}
    `    


    return (
        <Modal isOpen={isOpen} onClose={handleClose} safeAreaTop={true}>
            <Modal.Content maxWidth="1200" >
               <Box p={8}>
                    <Flex direction="row">
                        <Box flex={1} pr={10} style={{borderRight :`1px solid ${colors.muted[200]}`}}>
                            <Box>
                                <ProductType>{data?data.productType:null}</ProductType>
                                <Box mb={5}>
                                    <AsideHeading>Premium</AsideHeading>
                                    <ImageWrapper>
                                        <Image source={`http://localhost:1337${data?data.img.list:null}`} style={{ width: 180, height:180}} />
                                    </ImageWrapper>
                                </Box>
                            </Box>
                        </Box>
                        <Box flex={2} pl={10} >
                            <Flex direction="row" justifyContent="space-between">
                                <Box flex={1}>
                                    <ProductBrand>{data?data.brandName:null}</ProductBrand>
                                    <ProductName>{data?data.name:null}</ProductName>
                                    <Box mb={5} style={{borderBottom :`1px solid ${colors.muted[200]}`}}>
                                        {
                                            data?Object.keys(data.details).map((item,index)=>{
                                                <Flex key={index} direction='row' justifyContent='space-between'>
                                                    <Key flex={1}>{item}</Key>
                                                    <Value flex={1}>{data.details[item]}</Value>
                                                </Flex> 
                                            }):null
                                        }
                                    </Box>
                                </Box>
                                <Box flex={1} >
                                    {/*assign a state to show sum of  amount*/}
                                    <AsideHeading style={{textAlign: "right"}}>$0 (included)</AsideHeading>
                                </Box>
                            </Flex>
                            <Text>{data?data.description:null}</Text>
                            <Image source={`http://localhost:1337/uploads/image_8_0eb4f89322.png?updated_at=2022-04-26T16:17:42.093Z`}  style={{ width: "100%" ,height:200 }} alt="product mockup"></Image>
                        </Box>
                    </Flex>     
               </Box> 
            </Modal.Content>
        </Modal>
    ) 
};

export default ProductModal;

