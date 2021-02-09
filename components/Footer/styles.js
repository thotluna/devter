import css from "styled-jsx/css"
import { colors } from "styles/theme"

export default css`
  div {
    position: fixed;
    bottom: 0;
    background-color: ${colors.white};
    width: 375px;
    height: 49px;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #ccc;
  }
`
