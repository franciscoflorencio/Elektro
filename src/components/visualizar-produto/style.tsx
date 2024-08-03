import styled from 'styled-components';

export const Container = styled.div`
display: flex;
position: absolute;
height: 50vh;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
top: 0;
margin-top: 4.5rem;
`;

export const BlackDiv = styled.div`
background-color: var(--Cores-Secundrias-Secundria, #2B2B2B);
color: #F5F5F5;
width: 100%;
height: 100%;
border-radius: 0 0 1rem 1rem;
`;

export const UpperDiv = styled.div`
display: flex;
justify-content: flex-end;
gap: 9px;
width: 100%;
`;

export const LowerDiv = styled.div`
display: flex;
justify-content: space-between;
`;

export const LeftDiv = styled.div`
display: flex;
position: relative;
justify-content: flex-start;
margin-top: 3rem;
flex-direction: column;
margin-left: 1.5rem;
`;

export const PessoaImagem = styled.img`
width: 4rem;
height: 4rem;

`;

export const RightDiv = styled.div`
display: flex;
justify-content: flex-end;
align-items: flex-end;
flex-direction: column;
margin-right: 1.875rem;
margin-top: 3rem;
`;

export const PersonText = styled.p`
color: var(--Cores-Primrias-Primria, #F5F5F5);
text-align: right;

/* Montserrat/Button - Montserrat */
font-family: Montserrat;
font-size: 1rem;
font-style: normal;
font-weight: 500;
line-height: normal;
padding: 0;
margin: 0;
`;

export const Stars = styled.img`
padding-top: 10px;
display: flex;
height: 1.75rem;
align-items: flex-start;
gap: 4px;
`;

export const Icons = styled.img`
width: 3.5rem;
height: 1.70rem;
margin-top: 1.5rem;
margin-right: 1.5rem;
`;

export const Imagem = styled.img`
margin-top: 2.125rem;
width: 62%;
border-radius: 16px;
`;

export const Titulo = styled.h1`
color: var(--Cores-Primrias-Primria, #F5F5F5);
font-family: Montserrat;
font-size: 1.7rem;
font-style: normal;
font-weight: 500;
margin: 0;
padding: 8px;
`;

