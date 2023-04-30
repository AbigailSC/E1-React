import {
  ContainerSidebar,
  ContainerList,
  ListElement,
  Button
} from './sidebar.styles';
import { categories } from '@helpers/categories';

const Sidebar = () => {
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
      <Button>Reset filter</Button>
    </ContainerSidebar>
  );
};

export default Sidebar;
