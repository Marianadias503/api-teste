
import axios from 'axios';

// Configurando Axios com a base URL da API
export const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // Base URL para todas as requisições
  timeout: 20000, 
});
