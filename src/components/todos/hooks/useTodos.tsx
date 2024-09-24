import { useState, useEffect } from "react";
import {api} from '../../../Axios/axios';

interface TodosData {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }

export default function useTodos() {
 
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

return {
    todos,
    loading,
    error
    
}
}
