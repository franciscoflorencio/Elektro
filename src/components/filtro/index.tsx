import React from 'react';
import { Subitem } from './style';

type filtroProps = {
  icon: string;
}

const Filtro = ({ icon }: filtroProps) => {
  return (
    <Subitem>
      <img src={icon} alt="filtro" />
      <span>Filtro</span>
    </Subitem>
  );
}

export default Filtro;
