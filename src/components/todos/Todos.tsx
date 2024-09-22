
import { useEffect, useState } from "react";
import { Title, TodosStyle } from "./styles";
import { PostBody } from "../post/styles";
import {api} from '../../Axios/axios';


// Definindo o componente Todos
export const Todos = () => {
  // Criando interface para a estrutura dos dados
  interface TodosData {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }

  // Declarando estados para armazenar dados e controlar o carregamento e erros
  const [todos, setTodos] = useState<TodosData[]>([]); // Armazena lista de 'todos'
  const [loading, setLoading] = useState<boolean>(true); // Indica que 'todos' está sendo carregado
  const [error, setError] = useState<string | null>(null); // Armazena mensagens de erro

  // Função para buscar dados da API 
  const fetchTodos = async () => {
    try {
      const response = await api.get<TodosData[]>('/todos'); 
      setTodos(response.data); // Atualiza o estado com os dados recebidos
    } catch (err) {
      setError('Erro ao carregar todos'); // Mensagem de erro, caso aconteça
    } finally {
      setLoading(false); // Atualiza o estado de carregamento após a busca
    }
  };

  // Usando o hook useEffect para chamar a função fetchTodos
  useEffect(() => {
    fetchTodos();
  }, []); // Array vazio para garantir que a função seja chamada apenas uma vez

  return (
    <div>
     
      <Title>Retorno de Todos</Title>

    <PostBody>


      {loading && <p>Carregando todos...</p>} {/* Exibe a mensagem de carregamento */}
      {error && <p>{error}</p>} {/* Exibe mensagem de erro caso aconteça */}
      {todos.map((todo) => (
        <div key={todo.id}>
        
        <TodosStyle>
            <p><strong>Title:</strong> {todo.title}</p>
            <p><strong>UserId:</strong> {todo.userId}</p>
            <p><strong>Id:</strong> {todo.id}</p>
           
          </TodosStyle>
        </div>
      
      ))}
      
      </PostBody>
    </div>
  );
};
