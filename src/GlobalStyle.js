import { createGlobalStyle } from "styled-components";
import OswaldRegular from "./assets/fonts/static/Oswald-Regular.ttf"

const FontStyles = createGlobalStyle`

@font-face {
    font-family: 'Oswald';
    src: url(${OswaldRegular}) format ('ttf');
}
`;

export default FontStyles;