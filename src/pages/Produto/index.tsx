import Footer from '../../components/footer';
import Header from '../../components/header-pesquisa';
import Item from '../../components/visualizar-produto/';
import { Container, Titulo, Lista, ItemLista, Button, StyledLink } from './style';


const Items = [
  {
    nome: 'Celular',
    preco: 'R$ 800,00',
    imagem: require('../../assets/visualizar-celular.png'),
    personIcon: require('../../assets/person.png'),
    personName: 'João Ribeiro',
  }
]

export default function Produto(){
  return(
    <div>
    <Header />

    <Container>

      {Items.map((item) => (
        <Item
          nome={item.nome}
          preco={item.preco}
          imagem={item.imagem}
          personIcon={item.personIcon}
          personName={item.personName}
        />
        ))
      }

      <Titulo>Características do Produto</Titulo>
        <Lista>
          <ItemLista>Tela Super Retina XDR de 6,1”;</ItemLista>
          <ItemLista>Chip biônico A15 p/ desempenho + rápido;</ItemLista>
          <ItemLista>Sistema avançado de câmera dupla;</ItemLista>
          <ItemLista>Câmera frontal TrueDepth de 12 MP, com modo noturno e gravação 4K Dolby Vision.</ItemLista>
        </Lista>

      <StyledLink to="/ErroNaPesquisa">
      <Button>Comprar</Button>
      </StyledLink>

      <Footer />
    </Container>
    </div>
  );
} 
