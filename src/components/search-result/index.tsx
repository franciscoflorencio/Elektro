import { Container, Text } from './style';

type SearchResultProps = {
  searchResult: string;
};

const SearchResult = ({searchResult}: SearchResultProps) => {
 return(
  <Container>
    <Text>{searchResult}</Text>
    <img src={require('../../assets/x-icon.png')} />
  </Container>
  );
};
export default SearchResult;
