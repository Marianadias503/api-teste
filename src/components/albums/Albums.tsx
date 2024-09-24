
import { Title } from "../post/styles"; // Certifique-se de que o caminho está correto
import { AlbumsStyle, PostBody } from "./styles";
import useAlbums from "./hook/useAlbums";
// Interface para estrutura dos albums
// Definindo o componente Albums
export const Albums = () => {

const { albums,loading,error} = useAlbums();
  
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
