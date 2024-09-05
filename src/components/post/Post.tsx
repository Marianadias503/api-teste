import { useEffect, useState } from "react";
import axios from "axios";

// Definindo a interface para a estrutura dos posts
interface PostData {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  
// Definindo como uma constante de função e exportando
export const Post = () => {

//Declarando os estados para armazenar dados e o estado de carregamento

const [posts, setPosts] = useState<PostData[]> ([]); // Armazena a lista dos post
const [loading, setLoading] = useState<boolean> (true); // Indica que os posts estão sendo carregados
const [error, setError] = useState <string | null> (null); // Armazena mensagens de erro

//Função para buscar dados da api

const fetchPosts = async () => {
    try {
      const response = await axios.get<PostData[]>('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data); // Atualiza o estado com os dados que estão armazenados em 'response
    } catch (err){
        setError('Erro ao carregar posts'); // em caso de erro, atualiza o 'setError'
    }
    finally{
        setLoading (false); // Atualiza o estado de carregamento após a requisição
    }
  };

//Usando o hook useEffect para chamar a função fetchPosts

useEffect(()=>{
    fetchPosts();
},[]) //array vazio para garantir que a função seja chamda apenas uma vez

//renderizando o componente (mostrando os posts)
return (
    <>

<h1>Retorno dos post</h1>
<div>
      {loading && <p>Carregando...</p>} {/* Exibe uma mensagem de carregamento enquanto os dados estão sendo buscados */}
      {error && <p>erro ao buscar post</p>} {/* Exibe uma mensagem de erro se houver algum */}
    
     {posts.map(post => (
        <>
        <p>Title: {post.title}</p> 
        <p>UserId: {post.userId}</p>
        <p>Body: {post.body}</p>

        </>
        ))}
    
    </div>
    </>
 );
};