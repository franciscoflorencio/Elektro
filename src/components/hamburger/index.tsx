import React, { useState, useEffect, useRef } from 'react';
import { Menu, MenuContainer, MenuList, Container, UserMenuList, UserImage, UserText, MenuListItem, DividerMenu, Exit } from './style';

type HamburgerProps = {
  image: string;
};

const Hamburger: React.FC<HamburgerProps> = ({ image }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Container>
      <Menu onClick={toggleMenu}>
        <img src={image} alt="menu" />
      </Menu>
      <MenuContainer ref={menuRef} isOpen={isOpen}>
        <UserMenuList>
          <UserImage src={require("../../assets/usuario-pfp.png")} alt="user" />
          <UserText>Usuário</UserText>
        </UserMenuList>
        <MenuList>
          <MenuListItem>Editar dados</MenuListItem>
          <DividerMenu />
          <MenuListItem>Meus pedidos</MenuListItem>
          <DividerMenu />
          <MenuListItem>Meus produtos</MenuListItem>
          <DividerMenu />
          <MenuListItem>Meu carrinho</MenuListItem>
        </MenuList>

        <Exit>
          Sair
        </Exit>
      </MenuContainer>
    </Container>
  );
};

export default Hamburger;

