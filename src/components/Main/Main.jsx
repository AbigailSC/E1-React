import { useContext, useState, useEffect } from 'react';
import { ContainerMain, Article, ContainerCards } from './Main.styles';
import { Card } from '@components/Card';
import { Context } from '@store/context';

const Main = () => {
  const { state } = useContext(Context);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(state.showFiltered ? state.itemsFiltered : state.items);
  }, [state]);

  // useEffect(() => {
  //   setItems(state.items);
  // }, [state.items]);

  return (
    <ContainerMain>
      <Article>
        <ContainerCards>
          {items.length === 0 ? (
            <p className="label">You haven{"'"}t created a task yet</p>
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
