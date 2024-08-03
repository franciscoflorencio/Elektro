import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const Lista = styled.ul`
margin-top: 0;
list-style-type: none;
padding: 0;
margin-bottom: 5rem;
`;

export const ItemLista = styled.li`
display: flex;
justify-content: flex-start;
align-items: center;
margin-left: 2rem;
margin-right: 2rem;
color: var(--Cores-Secundrias-Secundria, #2B2B2B);

/* Montserrat/Caption - Montserrat */
font-family: Montserrat;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: normal;

&::before {
  content: '•';
  margin-right: 1rem;
}
`;

export const Titulo = styled.h1`
color: var(--Cores-Secundrias-Secundria, #2B2B2B);
text-align: center;
margin-top: 20rem;

/* Montserrat/H5 - Montserrat */
font-family: Montserrat;
font-size: 1.7rem;
font-style: normal;
font-weight: 500;
line-height: normal;
`;

export const Button = styled.button`
poisition: absolute;
display: flex;
width: 188px;
height: 40px;
padding: 10px;
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;
border-radius: 16px;
background: var(--Cores-Secundrias-Secundria, #2B2B2B);
color: var(--Cores-Primrias-Primria, #F5F5F5);

/* Montserrat/Button - Montserrat */
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
`;

export const StyledLink = styled(Link)`
text-decoration: none;
`;
