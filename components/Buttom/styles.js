import css from 'styled-jsx/css'
import { colors } from "../../styles/theme";

export default css`
button{
  background-color: ${colors.back};
  color: ${colors.white};
  border: 0;
  padding: .5em 2em;
  border-radius: 1.2em;
  font-weight: 700;
  cursor: pointer;
  transition: opacity .3 ease;
  display: flex;
  align-items: center;
}

button > :global(svg){
  margin-right: .5em;
}

button:hover{
  opacity: .9;
}
`