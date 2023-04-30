import { useContext } from 'react';
import { ContainerMain, Article, ContainerCards } from './Main.styles';
import { Context } from '../../store/context';
import { Card } from '@components/Card';
import { v4 } from 'uuid';

const Main = () => {
  const { state, dispatch } = useContext(Context);
  console.log('🚀 ~ file: Main.jsx:9 ~ Main ~ state:', state);

  return (
    <ContainerMain>
      <Article>
        <ContainerCards>
          {state.items.map((item) => (
            <Card
              key={v4()}
              id={v4()}
              title={item.title}
              description={item.description}
              category={item.category}
              date={item.date}
              time={item.time}
              isCompleted={item.completed}
            />
          ))}
        </ContainerCards>
      </Article>
    </ContainerMain>
  );
};

export default Main;
