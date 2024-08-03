import { HeaderDiv, IconDiv, PesquisaH1 } from './style';
import Hamburger from '../hamburger';

export default function Header(){
  return(
    <HeaderDiv>
      <Hamburger image={require("../../assets/icon5.png")}/>
      <PesquisaH1>Pesquisa</PesquisaH1>
      <IconDiv src={require("../../assets/icon4.png")}/>
    </HeaderDiv>
  );
}
