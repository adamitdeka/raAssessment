import { Box,Flex,ArrowBackIcon,useTheme, ShareIcon} from "native-base";
import styled from "styled-components";
import Svg from "react-native-svg";


function Header() {
    const {colors, fontConfig,fonts} = useTheme();
    const Button = styled.button`
        padding: 8px 32px;
        margin-right: 8px;
        border-style: none;
        background-color: transparent;
        border: 2px solid ;
        border-color: ${colors.muted[500]};
        font-family: ${fonts.body};
        font-weight: 700;
        color: ;
        text-transform: uppercase;
        letter-spacing: 1px;
    `
    const ButtonWrapper = styled.div`
        &:hover ${Button}{
            background-color: ${colors.muted[900]};
            color: ${colors.white};
            transition: 0.3s;
        }
    `
    
    const ArrowButton = styled.button`
            border-style: none;
            border: none;
            background-color: transparent;
        `
    return ( 
        <Box>
            <Flex direction="row" justifyContent='space-between' p={5}>
                <Box>
                    <ArrowButton>
                        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 10.9993H7.14L10.77 6.6393C10.9397 6.43508 11.0214 6.1718 10.997 5.90738C10.9726 5.64295 10.8442 5.39904 10.64 5.2293C10.4358 5.05956 10.1725 4.9779 9.90808 5.00228C9.64365 5.02666 9.39974 5.15508 9.23 5.3593L4.23 11.3593C4.19636 11.407 4.16628 11.4572 4.14 11.5093C4.14 11.5593 4.14 11.5893 4.07 11.6393C4.02467 11.754 4.00094 11.876 4 11.9993C4.00094 12.1226 4.02467 12.2446 4.07 12.3593C4.07 12.4093 4.07 12.4393 4.14 12.4893C4.16628 12.5414 4.19636 12.5916 4.23 12.6393L9.23 18.6393C9.32402 18.7522 9.44176 18.843 9.57485 18.9052C9.70793 18.9674 9.85309 18.9995 10 18.9993C10.2337 18.9998 10.4601 18.9184 10.64 18.7693C10.7413 18.6854 10.825 18.5822 10.8863 18.4659C10.9477 18.3496 10.9855 18.2222 10.9975 18.0913C11.0096 17.9603 10.9957 17.8282 10.9567 17.7026C10.9176 17.577 10.8542 17.4603 10.77 17.3593L7.14 12.9993H19C19.2652 12.9993 19.5196 12.8939 19.7071 12.7064C19.8946 12.5189 20 12.2645 20 11.9993C20 11.7341 19.8946 11.4797 19.7071 11.2922C19.5196 11.1047 19.2652 10.9993 19 10.9993Z" fill="black"/>
                        </Svg>
                    </ArrowButton>
                </Box>
                <Box>
                    <Flex direction="row">
                        <ButtonWrapper><Button >Gallery</Button></ButtonWrapper>
                        <ButtonWrapper><Button >Ritual</Button></ButtonWrapper>
                        <ArrowButton>
                            <Svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.875 3.92857C1.25368 3.92857 0.75 4.40827 0.75 5C0.75 5.59173 1.25368 6.07143 1.875 6.07143C2.49632 6.07143 3 5.59173 3 5C3 4.40827 2.49632 3.92857 1.875 3.92857ZM0 5C0 4.01378 0.839466 3.21429 1.875 3.21429C2.91053 3.21429 3.75 4.01378 3.75 5C3.75 5.98622 2.91053 6.78571 1.875 6.78571C0.839466 6.78571 0 5.98622 0 5Z" fill="black"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.125 7.14286C6.50368 7.14286 6 7.62255 6 8.21429C6 8.80602 6.50368 9.28571 7.125 9.28571C7.74632 9.28571 8.25 8.80602 8.25 8.21429C8.25 7.62255 7.74632 7.14286 7.125 7.14286ZM5.25 8.21429C5.25 7.22806 6.08947 6.42857 7.125 6.42857C8.16053 6.42857 9 7.22806 9 8.21429C9 9.20051 8.16053 10 7.125 10C6.08947 10 5.25 9.20051 5.25 8.21429Z" fill="black"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.125 0.714286C6.50368 0.714286 6 1.19398 6 1.78571C6 2.37745 6.50368 2.85714 7.125 2.85714C7.74632 2.85714 8.25 2.37745 8.25 1.78571C8.25 1.19398 7.74632 0.714286 7.125 0.714286ZM5.25 1.78571C5.25 0.799492 6.08947 0 7.125 0C8.16053 0 9 0.799492 9 1.78571C9 2.77194 8.16053 3.57143 7.125 3.57143C6.08947 3.57143 5.25 2.77194 5.25 1.78571Z" fill="black"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.17875 2.36504C6.29075 2.53096 6.24031 2.75193 6.0661 2.85859L3.33933 4.52805C3.16512 4.63472 2.9331 4.58668 2.82111 4.42076C2.70911 4.25485 2.75955 4.03388 2.93376 3.92721L5.66053 2.25775C5.83474 2.15109 6.06676 2.19912 6.17875 2.36504Z" fill="black"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.82111 5.57924C2.9331 5.41332 3.16512 5.36528 3.33933 5.47195L6.0661 7.14141C6.24031 7.24807 6.29075 7.46904 6.17875 7.63496C6.06676 7.80088 5.83474 7.84891 5.66053 7.74225L2.93376 6.07279C2.75955 5.96612 2.70911 5.74515 2.82111 5.57924Z" fill="black"/>
                            </Svg>
                        </ArrowButton>
                    </Flex>
                </Box>
            </Flex>
        </Box>
     );
}

export default Header;