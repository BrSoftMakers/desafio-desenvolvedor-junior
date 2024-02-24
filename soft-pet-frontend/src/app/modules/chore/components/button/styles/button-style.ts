import styled from "styled-components";
import theme from "../../../theme";

export const StyledButton = styled.button `
    width: ${props => props.width ? props.width : '231px'};
    height: ${props => props.height ? props.height : '40px'};
    border: none;
    border-radius: 5px;
    font-size: ${theme.fonts_size.sm};
    font-weight: ${theme.fonts_weight.bold};
    cursor: pointer;
    margin-right: 10px;

    &:hover {
        opacity: 0.8;
    }

`
export const ButtonIcon = styled.span`
    margin-right: 8px;
`

export const Text = styled.span`
`

export const GradientText = styled.span`
    background: linear-gradient(${theme.gradients.secondGradient});
    background-clip: text;
    -webkit-text-fill-color: transparent;
`