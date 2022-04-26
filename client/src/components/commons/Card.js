import {useState} from 'react';
import { Box, Center, Flex, Image, Text, useTheme } from 'native-base';
import Svg from 'react-native-svg';
import faucet from "../../../assets/faucet.png"
import styled from 'styled-components';


function Card(props) {
    const {colors, fontConfig, fonts, fontSizes} = useTheme();


    const BrandName = styled.h3`
        font-family: ${fonts.body};
        font-size: 0.8em;
        text-transform: capitalize;
        margin: 0;
        text-align: center;
        color: ${colors.muted[900]};
    `
    const ProductType = styled.p`
        font-family: ${fonts.body};
        font-size: 1em;
        margin: 0;
        text-transform: capitalize;
        text-align: center;
        color: ${colors.muted[900]};
    `
    const LuxuryTag = styled.div`
        display: flex;
        align-items: center;
        font-size: 0.8em;
        font-family: ${fonts.body};
        color: ${colors.muted[700]};
        text-align: center;
        font-weight: 700;
        text-transform: capitalize;
        padding: 0.2em 0.5em;
        width: 80px;
        border: 1px solid ${colors.muted[900]};
    `
    const Disabled = styled.div`
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${colors.muted[200]};
        opacity: 30%;
        z-index: 2;
        cursor: pointer;
    `
    return (
        <Box p={10}>
            {props.luxury?<Disabled/>:null}
            <Box>
                <Box alignSelf='flex-end' m={2}>
                    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/Svg" >
                        <g opacity="0.4">
                            <path d="M15.5017 1.94039C15.5951 2.03412 15.6476 2.16106 15.6476 2.29339C15.6476 2.42573 15.5951 2.55267 15.5017 2.64639L14.4587 3.69039L12.4587 1.69039L13.5017 0.646393C13.5955 0.552658 13.7226 0.5 13.8552 0.5C13.9878 0.5 14.115 0.552658 14.2087 0.646393L15.5017 1.93939V1.94039ZM13.7517 4.39639L11.7517 2.39639L4.93872 9.21039C4.88368 9.26542 4.84225 9.33253 4.81772 9.40639L4.01272 11.8204C3.99812 11.8644 3.99604 11.9116 4.00673 11.9567C4.01741 12.0018 4.04044 12.0431 4.07322 12.0759C4.10601 12.1087 4.14727 12.1317 4.19239 12.1424C4.23751 12.1531 4.28471 12.151 4.32872 12.1364L6.74272 11.3314C6.81648 11.3072 6.88359 11.2661 6.93872 11.2114L13.7517 4.39739V4.39639Z" fill="black"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M1 13.5C1 13.8978 1.15804 14.2794 1.43934 14.5607C1.72064 14.842 2.10218 15 2.5 15H13.5C13.8978 15 14.2794 14.842 14.5607 14.5607C14.842 14.2794 15 13.8978 15 13.5V7.5C15 7.36739 14.9473 7.24021 14.8536 7.14645C14.7598 7.05268 14.6326 7 14.5 7C14.3674 7 14.2402 7.05268 14.1464 7.14645C14.0527 7.24021 14 7.36739 14 7.5V13.5C14 13.6326 13.9473 13.7598 13.8536 13.8536C13.7598 13.9473 13.6326 14 13.5 14H2.5C2.36739 14 2.24021 13.9473 2.14645 13.8536C2.05268 13.7598 2 13.6326 2 13.5V2.5C2 2.36739 2.05268 2.24021 2.14645 2.14645C2.24021 2.05268 2.36739 2 2.5 2H9C9.13261 2 9.25979 1.94732 9.35355 1.85355C9.44732 1.75979 9.5 1.63261 9.5 1.5C9.5 1.36739 9.44732 1.24021 9.35355 1.14645C9.25979 1.05268 9.13261 1 9 1H2.5C2.10218 1 1.72064 1.15804 1.43934 1.43934C1.15804 1.72064 1 2.10218 1 2.5V13.5Z" fill="black"/>
                        </g>
                    </Svg>
                </Box>
                {props.luxury?<Center>
                    <LuxuryTag>
                        <Svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" viewBox="0 0 32 32" fill={colors.muted[900]}>
                            <path d="M 16 3 C 12.15625 3 9 6.15625 9 10 L 9 13 L 6 13 L 6 29 L 26 29 L 26 13 L 23 13 L 23 10 C 23 6.15625 19.84375 3 16 3 Z M 16 5 C 18.753906 5 21 7.246094 21 10 L 21 13 L 11 13 L 11 10 C 11 7.246094 13.246094 5 16 5 Z M 8 15 L 24 15 L 24 27 L 8 27 Z"></path>
                        </Svg>
                          luxury
                    </LuxuryTag>
                </Center>:null}
            </Box>
            <Center m={2}>
                <Image source={faucet} style={{ width: 120, height:120}} /> 
            </Center>
            <Box mt={5}>
                <BrandName>Brizo</BrandName>
                <ProductType>Two Handle Wall-Mount Faucet</ProductType>
            </Box>
        </Box>
    );
}

export default Card;