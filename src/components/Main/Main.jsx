import { useContext } from 'react';
import { ContainerMain, Article, ContainerCards } from './Main.styles';
import { Card } from '@components/Card';
import { Context } from '@store/context';

const Main = () => {
  const { state } = useContext(Context);
  return (
    <ContainerMain>
      <Article>
        <ContainerCards>
          {state.items === null || state.items.length === 0 ? (
            <p>no hay nada</p>
          ) : (
            state.items.map((item, index) => (
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
