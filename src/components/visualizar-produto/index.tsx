import { Container, BlackDiv, UpperDiv, LowerDiv, LeftDiv, RightDiv, Titulo, Icons, Imagem, PessoaImagem, PersonText, Stars } from './style';

type ProdutoProps = {
  nome: string;
  preco: string;
  imagem: string;
  personIcon: string;
  personName: string;
};

export default function Produto({
  nome,
  preco,
  imagem,
  personIcon,
  personName,
}: ProdutoProps) {
  return (
    <Container>
      <BlackDiv>
        <UpperDiv>
          <Imagem src={imagem} alt={nome} />
          <Icons src={require('../../assets/icons.png')} />
        </UpperDiv>
        <LowerDiv>
          <LeftDiv>
            <Titulo>{nome}</Titulo>
            <Titulo>{preco}</Titulo>
          </LeftDiv>
          <RightDiv>
            <PessoaImagem src={personIcon} alt={personName} />
            <PersonText>{personName}</PersonText>
            <Stars src={require('../../assets/grade.png')} alt="grade" />
          </RightDiv>
        </LowerDiv>
      </BlackDiv>
    </Container>
  );
}



