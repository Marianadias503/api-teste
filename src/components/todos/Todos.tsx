
import { Title, TodosStyle } from "./styles";
import { PostBody } from "../post/styles";
import useTodos from "./hooks/useTodos";


// Definindo o componente Todos
export const Todos = () => {
  // Criando interface para a estrutura dos dados
  const { todos,loading,error} = useTodos();

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
