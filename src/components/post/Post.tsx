// src/components/post/Post.tsx
import { Title, Posts, PostBody} from './styles';
import usePost from './hook/usePost';
// Definindo a interface para a estrutura dos posts

// Definindo como uma constante de função e exportando
export const Post = () => {
 const {posts,loading,error} = usePost();
  // Renderizando o componente (mostrando os posts)
  return (
    <>

      <Title>Retorno dos posts</Title>
      
      <PostBody >
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
      </PostBody>
    </>
  );
};