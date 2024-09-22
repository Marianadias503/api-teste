// src/components/post/styles.ts
import styled from 'styled-components';

export const Header = styled.div`
  background-color: #000000;
  color: #ffffff;
  padding: 20px;
  text-align: center;
  font-size: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-left: 0;
  position: relative; /* Adicionar position: relative para o menu se posicionar de forma correta */
  z-index: 1; /* Eleva o header acima do conteúdo */
`;
 export const PostBody= styled.div`
 
 margin:1.5rem;

 
 `
export const AlbumsTodos = styled.div`
  font-size: 1.5rem;
  color: #ff0000;
  text-align: left;
  margin-left: 0;
`;

export const OutrasApi = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 100%;
  margin-left: 0;
`;

export const Title = styled.div`
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2.5rem;
  color: #000000;
  font-size: 2rem;
  font-weight: bold;
`;

export const Posts = styled.div`
  background-color: #a9a9a9;
  border-radius: 20px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  text-align: left;
  margin-left: 0;

  strong {
    font-family: 'Mulish', sans-serif;
    padding: 3rem;

    @media (max-width: 768px) {
      padding: 0;
    }
  }

  @media (max-width: 768px) {
    margin: 5px;
    margin-bottom: 1rem;
  }
`;
