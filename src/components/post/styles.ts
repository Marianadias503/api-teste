// src/components/post/styles.ts
import styled from 'styled-components';

export const Header = styled.div`
  background-color: #000000; // Cor de fundo preta
  color: #ffffff; // Cor do texto branca (opcional)
  padding: 20px; // Espaçamento interno (opcional)
  text-align: center; // Centraliza o texto (opcional)
  font-size:2rem;
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-left:0%;
  
  
`;

export const AlbumsTodos = styled.div`
  font-size:1.5rem;
  color:#FF0000;
  



`;
export const OutrasApi = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;
align-items:center;
margin-left:25rem;
width:100%;




`;



;
export const Title = styled.div`

 text-align: center;
 margin-top:2rem;
 margin-bottom:2.5rem;
 color: #000000;
 font-size:2rem;
 font-weight:bold;

`;
export const Posts = styled.div`

background-color: #A9A9A9;
border-radius: 20px;
padding: 1.5rem;
margin-bottom:2rem;

strong{
    font-family: 'Mulish", sans-serif';
    padding: 3rem;
};

`;
