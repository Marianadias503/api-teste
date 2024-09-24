import { Title } from "../post/styles"; // Certifique-se de que o caminho está correto
import { AlbumsStyle, PostBody } from "./styles";
import useAlbums from "./hook/useAlbums";
import FilteredList from "../../Busca/filteredList"; // Importando o FilteredList

// Interface para estrutura dos albums
// Definindo o componente Albums
export const Albums = () => {
  const { albums, loading, error } = useAlbums();

  // Função para renderizar cada álbum
  const renderAlbum = (album: { id: number; title: string; userId: number }) => (
    <AlbumsStyle key={album.id}>
      <p><strong>Title:</strong> {album.title}</p>
      <p><strong>UserId:</strong> {album.userId}</p>
      <p><strong>Id:</strong> {album.id}</p>
    </AlbumsStyle>
  );

  return (
    <>
      <Title>Retorno dos Albums</Title>

      <PostBody>
        {/* Usando FilteredList para filtrar álbuns */}
        <FilteredList
          title="Álbuns"
          items={albums} // Passa a lista de álbuns
          loading={loading} // Passa o estado de carregamento
          error={error} // Passa qualquer erro
          renderItem={renderAlbum} // Passa a função para renderizar cada álbum
        />
      </PostBody>
    </>
  );
};
