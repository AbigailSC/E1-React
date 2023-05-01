import { useContext } from 'react';
import {
  ContainerSidebar,
  ContainerList,
  ListElement,
  Button,
  Form
} from './sidebar.styles';
import { categories } from '@helpers/categories';
import { Context } from '../../store/context';

const Sidebar = () => {
  const { state, dispatch } = useContext(Context);
  console.log('🚀 ~ file: Sidebar.jsx:14 ~ Sidebar ~ state:', state);

  const hideDoneTasks = () => {
    dispatch({ type: 'FILTER_TASKS' });
  };
  return (
    <ContainerSidebar>
      <header>Filter By:</header>
      <ContainerList>
        {categories.map((category) => (
          <ListElement key={category.id} color={category.color}>
            <input
              data-color={category.color}
              type="radio"
              name="categories"
              value={category.name}
              id={category.name}
            />
            <label htmlFor={category.name}>{category.name}</label>
          </ListElement>
        ))}
      </ContainerList>
      <Form>
        <input
          type="checkbox"
          id="completed"
          checked={state.showFiltered}
          onChange={() => hideDoneTasks()}
        />
        <label htmlFor="completed">Hide done tasks</label>
      </Form>
      <Button>Reset filter</Button>
    </ContainerSidebar>
  );
};

export default Sidebar;
