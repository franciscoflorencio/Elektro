import Header from '../../components/header-pesquisa';
import Footer from '../../components/footer';
import Searchbar from '../../components/searchbar';
import Filtro from '../../components/filtro';
import Produto from '../../components/produto';
import { Container, HomeDiv, Subheader, ProdutoDiv } from './style'

const Produtos = [
  { icon: require('../../assets/tv1.png'), name: 'TV LG', price: 'R$2.000,00' },
  { icon: require('../../assets/tv2.png'), name: 'TV Samsung', price: 'R$1.400,00' },
  { icon: require('../../assets/tv3.png'), name: 'TV TCL', price: 'R$1.000,00' },
  { icon: require('../../assets/tv4.png'), name: 'TV Semp', price: 'R$1.200,00' },
  { icon: require('../../assets/tv5.png'), name: 'TV AOC', price: 'R$1.300,00' },
  { icon: require('../../assets/tv6.png'), name: 'TV Philips', price: 'R$1.400,00' },
]

export default function ProdutoEncontrado(){
  return(
    <Container>
    <Header />
    <Subheader>
      <Searchbar />
      <Filtro icon={require("../../assets/filtro.png")} />
    </Subheader>

    <HomeDiv>
      <ProdutoDiv>
          {Produtos.map((item, index) => (
            <Produto key={index} icon={item.icon} name={item.name} price={item.price}/>
          ))
          }
      </ProdutoDiv>
    </HomeDiv>

    <Footer />
    </Container>
  );
}
