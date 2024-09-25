import { Title, TodosStyle } from "./styles";
import { PostBody } from "../post/styles";
import useTodos from "./hooks/useTodos";
import FilteredList from "../../Busca/filteredList"; // Importando o FilteredList

// Definindo o componente Todos
export const Todos = () => {
  const { todos, loading, error } = useTodos(); //Chama o hook useTodos() para obter os dados de todos, loading e error

  // Função para renderizar cada todo
  const renderTodo = (todo: { id: number; title: string; userId: number }) => (
    //retorna o TodosStyle
    <TodosStyle key={todo.id}>
      <p><strong>Title:</strong> {todo.title}</p>
      <p><strong>UserId:</strong> {todo.userId}</p>
      <p><strong>Id:</strong> {todo.id}</p>
    </TodosStyle>
  );

  return (
    <div>
      <Title>Retorno de Todos</Title>

      <PostBody>
          {/* Usando FilteredList para filtrar todos */}
        <FilteredList
          title="Todos" // Título da lista
          items={todos} // Passa a lista de todos
          loading={loading} // Passa o estado de carregamento
          error={error} // Passa qualquer erro
          renderItem={renderTodo} // Passa a função para renderizar cada todo
        />
      </PostBody>
    </div>
  );
};
