import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
text-decoration: none;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #F5F5F5;
`;


export const Subheader = styled.div`
display: grid;
grid-template-columns: repeat(2, 3fr);
align-items: center;
justify-content: center;
background-color: #F5F5F5;
`;

export const SearchResultsDiv = styled.div`
display: grid;
grid-template-columns: repeat(1, 1fr);
align-items: center;
justify-content: center;
flex-direction: column;
margin-top: 1.375rem;
`;

export const UnderlinedText = styled.p`
color: var(--Cores-Tercirias-Terciria, #0271A0);
font-family: Montserrat;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: normal;
text-decoration-line: underline;
display: flex;
align-self: center;
position: relative;
`;

export const SugestaoDeBuscaDiv = styled.div`
display: flex;
width: 10rem;
margin-left: 2rem;
padding: 0.75rem 2rem 0.75rem 0.75rem;
align-items: flex-start;
gap: 10px;
border-radius: 16px;
background: var(--Cores-Secundrias-Secundria, #2B2B2B);
color: var(--Cores-Primrias-Primria, #F5F5F5);

/* Montserrat/Caption - Montserrat */
font-family: Montserrat;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`;
