import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
text-decoration: none;
color: inherit;
`;

export const HomeDiv = styled.div`
flex: 1;
background-color: #F5F5F5;
min-height: 100vh;
display: flex;
flex-direction: column;
`;

export const Titulo = styled.div`
color: var(--Cores-Quaternrias-QUATERNRIA, #FF8F0E);

display: flex;
position: relative;
flex-direction: row;
align-items: center;
font-family: "Russo One", sans-serif;
font-size: 1.6rem;
font-style: normal;
font-weight: 400;
line-height: normal;
padding: 20px 1rem 20px;
margin: 0 1rem;
`;

export const Subtitulo = styled.div`
color: #000;

/* Montserrat/Subtitle - Montserrat */
font-family: Montserrat, 'Montserrat', sans-serif;
font-size: 1.1rem;
font-style: normal;
font-weight: 500;
line-height: normal;
display: flex;
position: relative;
align-items: center;
justify-content: start;
margin: 0 2rem;
`;

export const CategoriaDiv = styled.div`
position: relative;
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 3rem;
padding-top: 8px;
align-items: center;
padding-right: 0.3rem;
justify-content: center;
padding-bottom: 2.5rem;
margin-left: 2.5rem;
margin-right: 2.5rem;
`;

export const ProdutoDiv = styled.div`
position: relative;
display: grid;
grid-template-columns: repeat(2, 1fr);
margin-right: 2.5rem;
margin-left: 2.5rem;
flex-direction: row;
gap: 3rem;
padding-top: 8px;
align-items: center;
padding-right: 0.3rem;
justify-content: center;
padding-bottom: 2.5rem;
`;

export const EndDiv = styled.div`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
height: 10rem;
padding-bottom: 5rem;
gap: 0.5rem;
background-color: #FFAE50;
color: var(--Cores-Secundrias-Secundria, #2B2B2B);

/* Montserrat/Body - Montserrat */
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;
