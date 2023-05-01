import { useContext, useState, useEffect } from 'react';
import { ContainerMain, Article, ContainerCards } from './Main.styles';
import { Card } from '@components/Card';
import { Context } from '@store/context';

const Main = () => {
  const { state } = useContext(Context);
  console.log('🚀 ~ file: Main.jsx:8 ~ Main ~ state:', state);

  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(state.showFiltered ? state.itemsFiltered : state.items);
  }, [state]);

  return (
    <ContainerMain>
      <Article>
        <ContainerCards>
          {items.length === 0 ? (
            <p>no hay nada</p>
          ) : (
            items.map((item, index) => (
              <Card
                key={index}
                id={item.id}
                title={item.title}
                description={item.description}
                category={item.category}
                date={item.date}
                time={item.time}
                isCompleted={item.completed}
              />
            ))
          )}
        </ContainerCards>
      </Article>
    </ContainerMain>
  );
};

export default Main;
