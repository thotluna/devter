import css from "styled-jsx/css"
import { colors } from "styles/theme"

export default css`
  nav {
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

  nav a:hover {
    user-select: none;
    background: radial-gradient(#0099ff22 15%, transparent 16%);
    background-size: 180px 180px;
    background-position: center;
  }
  nav a:hover > :global(svg) {
    fill: ${colors.primary};
  }
`
