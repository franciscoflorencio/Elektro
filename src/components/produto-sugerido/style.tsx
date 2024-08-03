import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;
  margin-left: 2rem;
  padding-top: 1rem;
`;

export const Text = styled.p`
color: var(--Cores-Secundrias-Secundria, #2B2B2B);

/* Montserrat/Button - Montserrat */
font-family: Montserrat;
font-size: 1rem;
font-style: normal;
font-weight: 500;
line-height: normal;
`;

export const Icon = styled.img`
  width: 5rem;
  height: 4.5rem;
  border-radius: 1rem;
`;

export const TextDiv = styled.div`
display: flex;
width: 11.75rem;
height: 3rem;
padding: 8px 16px;
justify-content: center;
align-items: center;
gap: 4px
border-radius: 1rem;
border-bottom: 1px solid var(--Cores-Primrias-Primria-2, #DEDEDE);
background: var(--Cores-Primrias-Primria, #F5F5F5);

/* Sombra/Sombra Leve */
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.08);
`;

