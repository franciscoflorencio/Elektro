import styled from 'styled-components';

export const Container = styled.div`
background-color: #F5F5F5;
`;

export const HomeDiv = styled.div`
  background-color: #F5F5F5;
  height: 100vh;
  margin-right: 2rem;
  margin-left: 2rem;
`;

export const Subheader = styled.div`
display: grid;
grid-template-columns: repeat(2, 3fr);
align-items: center;
justify-content: center;
background-color: #F5F5F5;
`;


export const ProdutoDiv = styled.div`
position: relative;
display: grid;
grid-template-columns: repeat(2, 1fr);
margin-right: 2rem;
margin-left: 2rem;
flex-direction: row;
gap: 1rem;
padding-top: 8px;
align-items: center;
padding-right: 0.3rem;
justify-content: center;
padding-bottom: 2.5rem;
height: 75%;
`;
