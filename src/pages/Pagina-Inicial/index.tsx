import { Link } from "react-router-dom";
import { Container, Imagem, Label, StyledLink } from "./style";

export default function PaginaInicial(){
  return(
    <StyledLink to="/Home"> 
    <Container>
      <Imagem src={require('../../assets/big-logo.png')} />
      <Label>
        Elektro
      </Label>
    </Container>
    </StyledLink>
  );
}
