import { Container, Icon, TextDiv, Text } from './style';

type ProdutoProps = {
  icon: string;
  nome: string;
}

const Produto = ({icon, nome}: ProdutoProps) => {
  return(
    <Container>
      <Icon src={icon} />
      <TextDiv>
        <Text>{nome}</Text>
      </TextDiv>
    </Container>
  );
};

export default Produto;
