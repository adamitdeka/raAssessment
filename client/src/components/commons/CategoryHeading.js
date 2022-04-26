import styled from "styled-components";
import { useTheme } from "native-base";

function CategoryHeading(props) {
    const {colors, fontConfig, fonts, fontSizes} = useTheme();
    const Heading = styled.h2`
        font-size: 1.2em;
        font-family: ${fonts.body};
        text-transform: capitalize;
        color: ${colors.muted[900]};
        text-align:left;
        padding: 1em;
    `

    return ( 
        <Heading>{props.category}</Heading>
     );
}

export default CategoryHeading;