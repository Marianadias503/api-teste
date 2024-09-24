// src/components/FilteredList.tsx
import { useState } from 'react';
import{ Busca } from './styles';
//definindo a estrutura
interface FilteredListProps<T> { //T significa que o tipo pode ser qualquer um ...(posts,albums,todos..)
  title: string;
  items: T[];//T significa que o tipo pode ser qualquer um ...(posts,albums,todos..) e começa com um array vazio
  loading: boolean;
  error: string | null;
  renderItem: (item: T) => JSX.Element; // Função para renderizar cada item, retorna um elemento jsx para renderizar cada lista
  //JSX.Element indica que deve ser retornado um componente que pode ser renderizado
}

//armazenando os dados recebidos
const FilteredList = <T,>({ title, items, loading, error, renderItem }: FilteredListProps<T>) => {
  const [searchQuery, setSearchQuery] = useState(''); //useState para armazenar, searchQuery= guarda o valor e setSearchQuery atualiza ele 

  // Função para filtrar itens com base no título, ela filtra o array 'items'
  const filteredItems = items.filter(item => //item representa cada elemento do array 'items' 
    (item as any).title.toLowerCase().includes(searchQuery.toLowerCase()) //any serve para ignorar a verificação de tipo para este item específico
  ); //includes, verifica se se item.title.toLowerCase está guardado em searchQuery

  return (
    <>
     
      <Busca
        type="text" 
        placeholder="Buscar..." 
        onChange={(e) => setSearchQuery(e.target.value)} // atualiza o o searchQuery com o valor atual do input
      />
      <div>
        {loading && <p>Carregando...</p>}
        {error && <p>{error}</p>}
        {filteredItems.map(renderItem)} {/* para cada item do filteredItems, a função é chamda, isso faz com que 
        o componente renderize cada item de maneira especifica
       */}
      </div>
    </>
  );
};

export default FilteredList;
