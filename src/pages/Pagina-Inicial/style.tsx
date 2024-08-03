import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #F5F5F5;
`;

export const Label = styled.h1`
margin: 0;
padding: 0;
display: flex;
top: -2rem;
position: relative;
color: #2A2A2A;
font-family: "Russo One";
font-size: 56px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

export const Imagem = styled.img`
display: flex;
position: relative;
margin: 0;
padding: 0;
`;

export const StyledLink = styled(Link)`
text-decoration: none;
`;
