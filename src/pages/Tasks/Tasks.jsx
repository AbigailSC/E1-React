import { useState, useEffect } from 'react';
import { Card } from '@components/Card';
import { Sidebar } from '@components/Sidebar';
import {
  Article,
  ContainerCards,
  ContainerMain
} from '@components/Main/Main.styles';
import { HomeContainer } from '../Home/home.styles';
import { useSelector } from 'react-redux';

const Tasks = () => {
  const state = useSelector((state) => state.tasks);
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(state.itemsFiltered);
  }, [state]);

  return (
    <>
      <HomeContainer>
        <Sidebar />
        <ContainerMain>
          <Article>
            <ContainerCards>
              {items.length === 0 ? (
                <p className="label">You haven{"'"}t any task pending</p>
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
      </HomeContainer>
    </>
  );
};

export default Tasks;
