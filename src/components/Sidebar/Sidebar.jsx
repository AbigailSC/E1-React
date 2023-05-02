import { useContext } from 'react';
import {
  ContainerSidebar,
  ContainerList,
  ListElement,
  Button,
  Form
} from './sidebar.styles';
import { categories } from '@helpers/categories';
import { Context } from '@store/context';

const Sidebar = () => {
  const { state, dispatch } = useContext(Context);

  const hideDoneTasks = () => {
    dispatch({ type: 'FILTER_TASKS' });
  };

  const filterByCategory = (e) => {
    const category = e.target.value;
    dispatch({ type: 'FILTER_BY', payload: category });
  };

  const reserFilter = () => {
    dispatch({ type: 'RESET_FILTER' });
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
              onChange={(e) => filterByCategory(e)}
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
      <Button onClick={() => reserFilter()}>Reset filter</Button>
    </ContainerSidebar>
  );
};

export default Sidebar;
