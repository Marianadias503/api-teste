// src/components/post/styles.ts
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
// Estilo para o header
export const HeaderStyle = styled.div`
  background-color: #000000;
  color: #ffffff;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
  position: relative; /* position relative para que o menu seja posicionado absolutamente dentro dele */

  @media (max-width: 768px) {
    text-align: center;
    font-size: 1.5rem;
  }
`;

// Ícone de menu hambúrguer (mobile)
export const MenuIcon = styled.div`
  display: none;
  font-size: 2rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex; /* Exibe o ícone de menu hambúrguer em telas menores */
  }
`;

// Estilo para os itens do menu (Albums e Todos)
interface MenuItemsProps {
  open: boolean;
}
export const StyledNavLink = styled(NavLink)`
  text-decoration: none; /* Remove o sublinhado */
  color: #ff0000; /* Define a cor do texto, se desejar */
  
  &:hover {
    color: #00ff00; /* Cor ao passar o mouse, se desejado */
  }
`;
export const MenuItems = styled.div<MenuItemsProps>`
  display: flex;
  gap: 2rem; /* Espaçamento entre Albums e Todos */
  margin-left: auto; /* Empurra o menu para o canto direito no desktop */
  align-items: center;


  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'block' : 'none')}; /* Se o menu estiver aberto, exibe em bloco */
    position: absolute;
    top: 100%; /* Posiciona o menu logo abaixo do header */
    left: 0;
    right: 0;
    background-color: #000;
    padding: 1.5rem;
    text-align: center;
    border-bottom: 8px solid #ffffff;
    flex-direction: column; /* Empilha os itens verticalmente no mobile */
  }
`;

// Estilo dos itens Albums e Todos
export const AlbumsTodos = styled.div`
  font-size: 1.5rem;
  color: #ff0000;
  cursor: pointer;

  
`;

// Container para outros itens (opcional)
export const OutrasApi = styled.div`
  display: flex;
  gap: 5rem;
  margin-right: 5rem;
`;
