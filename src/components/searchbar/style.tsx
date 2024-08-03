import styled from 'styled-components';

export const InputContainer = styled.div`
margin-top: 1.2rem;
margin-left: 2rem;
display: flex;
width: 257px;
height: 40px;
flex-shrink: 0;
flex-direction: row;
align-items: center;
justify-content: start;
border-radius: 16px;
border-bottom: 1px solid var(--Cores-Secundrias-Secundria-2, #1B1B1B);
background: var(--Cores-Secundrias-Secundria, #2B2B2B);

/* Sombra/Sombra Leve */
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.08);
`;

export const Lupa = styled.img`
align-self: center;
padding: 5px;
width: 1.75rem;
height: 1.75rem;
`;

export const Input = styled.input`
align-self: center;
width: 80%;
padding: 5px 0 5px 5px;
border: none;
outline: none;
color: var(--Cores-Primrias-Primria-3, #B9B9B9);

/* Montserrat/Body - Montserrat */
font-family: Montserrat;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: normal;

background: transparent;
border-bottom: 1px solid #B9B9B9;
`;
