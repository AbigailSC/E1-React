import {
  ContainerSidebar,
  ContainerList,
  ListElement,
  Button,
  Form
} from './sidebar.styles';
import { categories } from '@helpers/categories';
import { useDispatch, useSelector } from 'react-redux';
import { filterTasks, filterBy, resetFilter } from '@store/slices/tasks';

const Sidebar = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.tasks);

  const hideDoneTasks = () => {
    dispatch(filterTasks());
  };

  const filterByCategory = (e) => {
    const category = e.target.value;
    dispatch(filterBy(category));
  };

  const reserFilter = () => {
    dispatch(resetFilter());
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
