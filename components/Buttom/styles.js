import css from "styled-jsx/css"
import { colors } from "../../styles/theme"

export default css`
  button {
    background-color: ${colors.back};
    color: ${colors.white};
    border: 0;
    padding: 0.5em 2em;
    border-radius: 1.2em;
    font-weight: 700;
    cursor: pointer;
    transition: opacity 0.3 ease;
    display: flex;
    align-items: center;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
  }

  button > :global(svg) {
    margin-right: 0.5em;
  }

  button:hover {
    opacity: 0.9;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  }

  button:active {
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  }
`
