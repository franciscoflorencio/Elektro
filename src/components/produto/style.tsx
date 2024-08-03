import styled from 'styled-components';

export const Subproduto = styled.div`
flex-direction: column;
border-radius: 15.133px;
background: var(--Cores-Primrias-Primria, #F5F5F5);
padding: 9.458px 9.458px 0 9.458px; 
/* Sombra/Sombra Leve */
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.08);
`;

export const Name = styled.p`
margin: 0;
color: var(--Cores-Secundrias-Secundria, #2B2B2B);
font-family: Montserrat;
font-size: 13.241px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

export const Price = styled.p`
margin: 0.1rem 0 0.4rem 0;
color: var(--Cores-Secundrias-Secundria, #2B2B2B);
font-family: Montserrat;
font-size: 15.133px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;

export const ProdutoContainer = styled.div`
position: relative;
display: flex;
flex-direction: column;
`;

export const Coracao = styled.img`
position: absolute;
right: 0.5rem;
bottom: 0.8rem;
width: 24px;
height: 24px;
background-size: contain;
cursor: pointer;
`;
