import React from 'react';
import { useState } from 'react';
import { Subproduto, Name, Price, ProdutoContainer, Coracao } from './style';
import HeartFull from '../../assets/heart-filled.png';
import Heart from '../../assets/heart.png';

type ProdutoProps ={
  icon: string;
  name: string;
  price: string;
}


const Produto = ({icon, name, price}: ProdutoProps) => {

  const [isHeartFull, setIsHeartFull] = useState<boolean>(false);

  const handleToggle = () => {
    setIsHeartFull((prev) => !prev);
  };

  return (
    <ProdutoContainer>
      <Subproduto>
        <img src={icon} alt={name} />
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Subproduto>
      <Coracao onClick={handleToggle} src={isHeartFull? HeartFull : Heart} />
    </ProdutoContainer>
  );
}

export default Produto;
