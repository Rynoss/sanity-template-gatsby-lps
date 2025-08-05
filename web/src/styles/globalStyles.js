import { createGlobalStyle } from 'styled-components';
import lightenDarkenColor from '../utils/lightenDarkenColor';
import getContrastingColor from '../utils/getContrastingColor';

const GlobalStyle = createGlobalStyle`
    html {
        scroll-behavior: smooth;
    }
    [id]{
        scroll-margin-top: 250px;
        @media (min-width: 960px) {
            scroll-margin-top: 200px;
        }
    }
    .bg--primary {
        background-color: ${({ primaryColor }) => primaryColor};
        color: ${({ primaryColor }) => getContrastingColor(primaryColor)};
    }
    .bg--secondary {
        background-color: ${({ secondaryColor }) => secondaryColor}; 
        color: ${({ secondaryColor }) => getContrastingColor(secondaryColor)};
    }
    .bg--form {
        background-color: ${({ formBgColor }) => formBgColor};
        color: ${({ formBgColor }) => getContrastingColor(formBgColor)};
    }
    .bg--callout {
        color: ${({ gradientEndColor }) =>
          getContrastingColor(gradientEndColor)};
    }
    .bg--callout-linear {
        background: linear-gradient(to right, ${({ gradientStartColor }) =>
          gradientStartColor},${({ gradientEndColor }) => gradientEndColor});
    }
    .bg--callout-radial {
        background: radial-gradient(circle at center,${({ gradientEndColor }) =>
          gradientEndColor}, ${({ gradientStartColor }) => gradientStartColor});
    }
    .bg--reviews {
        background-color: ${({ reviewBgColor }) => reviewBgColor};
        color: ${({ reviewBgColor }) => getContrastingColor(reviewBgColor)};
        &-bubble {
            background-color: #FFF;
            color: #2A2728;
            &:after {
                border-top: 30px solid #FFF;
            }
        }
    }
    .bg--specials {
        background-color: ${({ specialsBgColor }) => specialsBgColor}; 
    }
    .button--primary {
        background-color: ${({ primaryBtnColor }) => primaryBtnColor};
        color: ${({ primaryBtnColor }) => getContrastingColor(primaryBtnColor)};
        &:hover {
            background-color: ${({ primaryBtnColor }) =>
              lightenDarkenColor(primaryBtnColor, 20)}; 
        }
    }
    .button--secondary {
        background-color: ${({ secondaryBtnColor }) => secondaryBtnColor}; 
        color: ${({ secondaryBtnColor }) =>
          getContrastingColor(secondaryBtnColor)};
        &:hover {
            background-color: ${({ secondaryBtnColor }) =>
              lightenDarkenColor(secondaryBtnColor, 20)}; 
        }
    }
    .border-highlight, .border-highlight:after, .border-highlight:before {
        border-color: #878787;
    }
    .text--secondary {
        color: ${({ headingTextColor }) => headingTextColor};
    }
    .default--header {
        color: #242424;
    }
    .icon-color {
        color: ${({ iconColor }) => iconColor};
    }
`;

export default GlobalStyle;