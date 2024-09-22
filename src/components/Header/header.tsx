import React, { useState } from 'react';
import { AlbumsTodos, HeaderStyle, MenuIcon, MenuItems } from './styles';
import { StyledNavLink } from '../Header/styles'; // Importa o StyledNavLink

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderStyle>
      <div>Return Api</div>
      <MenuIcon onClick={toggleMenu}>
        &#9776; {/* Ícone de menu hambúrguer */}
      </MenuIcon>
      <MenuItems open={menuOpen}>
        {/* Usando o componente estilizado para navegação */}
        <AlbumsTodos>
          <StyledNavLink to="/albums">Albums</StyledNavLink>
        </AlbumsTodos>
        <AlbumsTodos>
          <StyledNavLink to="/todos">Todos</StyledNavLink>
        </AlbumsTodos>
      </MenuItems>
    </HeaderStyle>
  );
};
