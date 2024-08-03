import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
text-decoration: none;
`;

export const Container = styled.div`
  display: flex;
  position: relative;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #F5F5F5;
`;

export const TitleContainer = styled.h1`
color: #000;
text-align: center;
font-family: "Russo One";
font-size: 32px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

export const Text = styled.p`
color: var(--Cores-Secundrias-Secundria, #2B2B2B);
text-align: center;

/* Montserrat/Body - Montserrat */
font-family: Montserrat;
font-size: 1.1rem;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-right: 2rem;
margin-left: 2rem;
margin-bottom: 6.5rem;
`;

export const GoBackButton = styled.button`
bottom: 6.5rem;
right: 2rem;
padding-bottom: 1.5rem;
display: flex;
position: absolute;
align-items: 'center';
justify-content: 'center';
border: none;
border-radius: 50%;
width: 3rem;
height: 3rem;
fill: #D9D9D9;
background-color: #D9D9DD9;
`;

export const Imagem = styled.img`
padding-top: 0.625rem;
padding-left: 0.313rem;
`;
