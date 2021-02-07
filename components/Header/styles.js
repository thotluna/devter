import { css } from "styled-jsx/css"
import { colors } from "styles/theme"

export default css`
  div {
    position: sticky;
    top: 0;
    background-color: ${colors.white};
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
  }
  Avatar {
    flex: 1;
  }
  h1 {
    flex: 3;
    font-size: 1.1875rem;
    margin: 0.5rem;
    padding: auto 1rem;
  }
  Buttom {
    flex: 1;
  }
`
