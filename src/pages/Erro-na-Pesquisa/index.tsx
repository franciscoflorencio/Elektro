import Footer from '../../components/footer';
import { Container, TitleContainer, Text, GoBackButton, Imagem, StyledLink } from './style';

export default function ErroNaPesquisa() {
  return(
    <div>
    <Container>
      <TitleContainer>Opsss...</TitleContainer>
      <img src={require('../../assets/error-image.png')} alt="Erro na pesquisa" />
      <Text>Infelizmente, parece que não encontramos o produto desejado.</Text>
      
      <StyledLink to="/Produto">
        <GoBackButton>
          <Imagem src={require('../../assets/left-arrow.png')} alt="Voltar" /> 
        </GoBackButton>
      </StyledLink>
    <Footer />
    </Container>
    </div>
 );
}
