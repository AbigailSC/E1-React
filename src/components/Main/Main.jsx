import { useState, useEffect } from 'react';
import { ContainerMain, Article, ContainerCards } from './Main.styles';
import { Card } from '@components/Card';
import { useSelector } from 'react-redux';

const Main = () => {
  const state = useSelector((state) => state.tasks);
  console.log('🚀 ~ file: Main.jsx:9 ~ Main ~ state:', state);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(state.items);
  }, [state]);

  useEffect(() => {
    if (state.filterBy !== 'all') {
      setItems(state.items.filter((item) => item.category === state.filterBy));
    }
  }, [state.filterBy]);

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
