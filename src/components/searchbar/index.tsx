import { InputContainer, Lupa, Input } from "./style";

export default function Searchbar(){
  return(
    <InputContainer>
      <Lupa src={require("../../assets/icone-lupa.png")}/>
      <Input placeholder="Encontrar na Elektro"/>
    </InputContainer>
  );
}
