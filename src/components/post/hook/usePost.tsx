import { useEffect, useState } from "react";
import { api } from "../../../Axios/axios";

interface PostData {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  
export default function usePost(){

  // Declarando os estados para armazenar dados e o estado de carregamento
const [posts, setPosts] = useState<PostData[]>([]); // Armazena a lista dos posts
const [loading, setLoading] = useState<boolean>(true); // Indica que os posts estão sendo carregados
const [error, setError] = useState<string | null>(null); // Armazena mensagens de erro

// Função para buscar dados da API
const fetchPosts = async () => {
  try {
    const response = await api.get<PostData[]>('/post');
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

 return{
  posts,loading,error
 }
    
   
 
}
