import React from 'react';
import { Subitem } from './style';

interface CategoriaProps{
  icon: string;
  label: string;
}

const Categoria: React.FC<CategoriaProps> = ({ icon, label }) => {
  return(
    <Subitem>
      <img src={icon} alt={label} />
      <span>{label}</span>
    </Subitem>
  );
};

export default Categoria;
