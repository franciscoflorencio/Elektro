import Header from '../../components/header-pesquisa';
import Footer from '../../components/footer';
import Searchbar from '../../components/searchbar';
import Filtro from '../../components/filtro';
import SearchResult from '../../components/search-result'
import Divider from '../../components/divider';
import Produto from '../../components/produto-sugerido'
import { Container, Subheader, SearchResultsDiv, UnderlinedText, SugestaoDeBuscaDiv } from './style';
import { Link } from 'react-router-dom';
import { StyledLink } from '../Pagina-Inicial/style';

const Produtos = [
  {
    icon: require("../../assets/monitor-icon.png"),
    nome: "Celulares"
  },
  {
    icon: require("../../assets/smart-tv-icon.png"),
    nome: "Teclados"
  },
  {
    icon: require("../../assets/mousepad-icon.png"),
    nome: "Monitores"
  }
];

export default function AbaDePesquisa() {
  return(
    <Container>
      <Header />
        
      <Subheader>
        <Searchbar />
        <Filtro icon={require("../../assets/g-icon.png")} />
      </Subheader>

      <SearchResultsDiv>

        <SearchResult searchResult="Monitor" />
        <StyledLink to="/ProdutoEncontrado">
          <SearchResult searchResult="Smart TV" />
        </StyledLink>
        <SearchResult searchResult="Mousepad" />

      </SearchResultsDiv>

      <Divider />
      
      <UnderlinedText>Apagar histórico de Pesquisa</UnderlinedText>

      <SugestaoDeBuscaDiv>Sugestão de Busca</SugestaoDeBuscaDiv>
  
      {Produtos.map((produto, index) => (
        <Produto key={index} icon={produto.icon} nome={produto.nome} />
      ))
      }

      <Footer />
    </Container>
  );
}
