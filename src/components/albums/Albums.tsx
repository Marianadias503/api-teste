import { useEffect, useState } from "react";
import { Title } from "../post/styles"; // Certifique-se de que o caminho está correto
import { AlbumsStyle, PostBody } from "./styles";
import {api} from '../../Axios/axios';
// Interface para estrutura dos albums
interface AlbumsData {
  userId: number;
  id: number;
  title: string;
}

// Definindo o componente Albums
export const Albums = () => {
  // Declarando os estados para armazenar dados e o estado de carregamento
  const [albums, setAlbums] = useState<AlbumsData[]>([]); // Vai armazenar a listagem dos albums
  const [loading, setLoading] = useState<boolean>(true); // Indica que inicialmente os dados estão sendo carregados
  const [error, setError] = useState<string | null>(null); // Começa com 'null' pois a página não começa carregando com erro

  // Função para buscar os dados da API
  const fetchAlbums = async () => {
    try {
      const response = await api.get<AlbumsData[]>('/albums');
      setAlbums(response.data); // Atualiza o estado com os dados armazenados no 'response'
    } catch (err) {
      setError('Erro ao carregar albums'); // Em caso de erro, carrega essa mensagem
    } finally {
      setLoading(false); // Atualiza o estado de carregamento após a busca
    }
  };

  // Usando hook useEffect para chamar a função fetchAlbums
  useEffect(() => {
    fetchAlbums();
  }, []); // Array vazio que garante que a função seja chamada apenas 1 vez

  // Mostrando os 'albums'
  return (
    <>
    
      <Title>Retorno dos Albums</Title>

      <PostBody>
        {loading && <p>Carregando albums...</p>} {/* Exibe a mensagem de carregamento */}
        {error && <p>{error}</p>} {/* Exibe mensagem de erro caso tenha */}
        {albums.map((album) => (
          <div key={album.id}>
            
            <AlbumsStyle >
            <p><strong>Title:</strong> {album.title}</p>
            <p><strong>UserId:</strong> {album.userId}</p>
            <p><strong>Id:</strong> {album.id}</p>
            </AlbumsStyle>

          </div>
        ))}
      </PostBody>
    </>
  );
};
