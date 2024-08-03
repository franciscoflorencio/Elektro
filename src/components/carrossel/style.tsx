import styled from 'styled-components';

export const CarrosselContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
align-self: center;
height: 92%;
width: 92%;
position: relative;
  .carousel .control-dots .dot {
    background: #000; /* Cor preta para os pontos */
    position: relative;
    top: 0.7rem;
    width: 0.8rem;
    height: 0.8rem;
  }

  .carousel .slide img{
    display: flex;
    position: relative;
    bottom: 1rem;
    border-radius: 1rem;
  }
`;
