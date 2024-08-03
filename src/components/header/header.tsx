import { HeaderDiv, HeaderInput, IconDiv, LupaDiv, StyledLink} from './style';
import Hamburger from '../hamburger';
import { Link } from 'react-router-dom';

export default function Header(){
  return(
    <div>
    <HeaderDiv>
      <Hamburger image={require("../../assets/icon1.png")}/>
      <LupaDiv src={require("../../assets/icon3.png")}/> 
      <StyledLink to="/AbaDePesquisa">
        <HeaderInput placeholder='Encontrar na Elektro'/>
      </StyledLink>
      <IconDiv src={require("../../assets/icon2.png")}/>
    </HeaderDiv>
    </div>
  );
}
