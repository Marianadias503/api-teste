// src/components/post/Post.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Header, Title, Posts, AlbumsTodos, OutrasApi} from './styles'; // Importa o componente estilizado Header

// Definindo a interface para a estrutura dos posts
interface PostData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Definindo como uma constante de função e exportando
export const Post = () => {
  // Declarando os estados para armazenar dados e o estado de carregamento
  const [posts, setPosts] = useState<PostData[]>([]); // Armazena a lista dos posts
  const [loading, setLoading] = useState<boolean>(true); // Indica que os posts estão sendo carregados
  const [error, setError] = useState<string | null>(null); // Armazena mensagens de erro

  // Função para buscar dados da API
  const fetchPosts = async () => {
    try {
      const response = await axios.get<PostData[]>('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data); // Atualiza o estado com os dados que estão armazenados em 'response'
    } catch (err) {
      setError('Erro ao carregar posts'); // Em caso de erro, atualiza o 'setError'
    } finally {
      setLoading(false); // Atualiza o estado de carregamento após a requisição
    }
  };

  // Usando o hook useEffect para chamar a função fetchPosts
  useEffect(() => {
    fetchPosts();
  }, []); // Array vazio para garantir que a função seja chamada apenas uma vez

  // Renderizando o componente (mostrando os posts)
  return (
    <>
      <Header>
        Return Api
        <OutrasApi>

        <AlbumsTodos > Albums </AlbumsTodos>
        <AlbumsTodos> Todos </AlbumsTodos>
        </OutrasApi>

       
          
        
      </Header> {/* Componente Header estilizado */}
      <Title>Retorno dos posts</Title>
      
      <div>
        {loading && <p>Carregando...</p>} {/* Exibe uma mensagem de carregamento enquanto os dados estão sendo buscados */}
        {error && <p>{error}</p>} {/* Exibe uma mensagem de erro se houver algum */}
        {posts.map(post => (
          <div key={post.id}>
            <Posts>
            <p> <strong> Title: </strong> {post.title}</p>
            <p> <strong> UserId: </strong> {post.userId}</p>
            <p> <strong> Body: </strong> {post.body}</p>

            </Posts>
          
          </div>
        ))}
      </div>
    </>
  );
};