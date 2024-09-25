// src/components/post/Post.tsx
import { Title, Posts, PostBody} from './styles';
import usePost from './hook/usePost';
import FilteredList from '../../Busca/filteredList';

// Definindo como uma constante de função e exportando
export const Post = () => {
 const {posts,loading,error} = usePost();
 
 //função para renderizar cada post
 const renderPost = (post: {id:number;title:string; userId:number; body: string})=>(
  //retorno
  <Posts>
  <p> <strong> Title: </strong> {post.title}</p>
  <p> <strong> UserId: </strong> {post.userId}</p>
  <p> <strong> Body: </strong> {post.body}</p>

  </Posts>
)

  // Renderizando o componente (mostrando os posts)
  return (
    <>
      <Title>Retorno dos posts</Title>
      <PostBody >
        <FilteredList
        title='Posts'
        items={posts}
        loading={loading}
        error={error}
        renderItem={renderPost} //chamado a função de renderização 
        />
      </PostBody>
    </>
  );
};

