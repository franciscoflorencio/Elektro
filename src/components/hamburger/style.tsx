import styled from 'styled-components';

export const Menu = styled.div`
  position: relative;
  cursor: pointer;
  z-index: 3;
`;

export const MenuContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 220px;
  height: 100%;
  background-color: #F5F5F5;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 3; 
`;

export const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Container = styled.div`
font-family: Montserrat;
position: relative;
display: flex;
width: 24px;
height: 24px;
`;

export const UserMenuList = styled.div`
display: flex;
flex-direction: row;
padding: 20px;
align-items: center;
justify-content: start;
gap: 30px;
background-color: #2B2B2B;
color: white;
font-size: 0.5rem;
z-index: 3;
`;

export const UserImage = styled.img`
width: 2rem;
height: 2rem;
`;

export const UserText = styled.h1`
align-self: center;
color: #FFF;

/* Montserrat/H6 - Montserrat */
font-family: Montserrat;
font-size: 1.1rem;
font-style: normal;
font-weight: 500;
line-height: normal;
`;

export const MenuListItem = styled.div`
display: flex;
flex-direction: row;
padding: 1px;
align-items: right;
`;

export const DividerMenu = styled.div`
display: flex;
position: relative;
margin: 20px;
width: 180px;
height: 1.5px;
justify-content: center;
align-items: center;
flex-shrink: 0;
background-color: #B9B9B9;
border-radius: 8px;
align-self: center;
`;

export const Exit = styled.p`
display: flex;
position: relative;
color: #000;
bottom: -24.5rem;
padding-left: 20px;
/* Montserrat/Subtitle - Montserrat */
font-family: Montserrat;
font-size: 1rem;
font-style: normal;
font-weight: 500;
line-height: normal;
`
