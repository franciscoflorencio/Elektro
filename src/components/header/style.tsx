import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
text-decoration: none;
`;

export const HeaderDiv = styled.div`
  font-family: 'Montserrat', Montserrat, sans-serif;
  position: relative;
  padding: 1rem 1.75rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  border-radius: 0rem 0rem 1rem 1rem;
  background-color: #2B2B2B;
`;

export const LupaDiv = styled.img`
position: absolute;
width: 24px;
height: 24px;
padding-right: 9.5rem;
padding-bottom: 0.1rem;
`;

export const IconDiv = styled.img`
width: 24px;
height: 24px;
`;

export const HeaderInput = styled.input`
display: flex;
border: none;
width: 257px;
padding: 0.8rem 0.1rem;
justify-content: center;
align-items: center;
gap: 4px;
border-radius: 16px;
border-bottom: 1px solid var(--Cores-Primrias-Primria-2, #DEDEDE);
background: var(--Cores-Primrias-Primria, #F5F5F5);

/* Sombra/Sombra Leve */
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.08);

/*PLACEHOLDER DA BARRA DE PESQUISA*/
  &::placeholder{
  color: var(--Cores-Secundrias-Secundria, #2B2B2B);

  /* Montserrat/Button - Montserrat */
  position: relative;
  font-family: Montserrat;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
  padding-left: 1.4rem; 
  padding-top: 2rem;
  }
`;
