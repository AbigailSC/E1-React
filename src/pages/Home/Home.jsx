import { Main } from '@components/Main';
import { Sidebar } from '@components/Sidebar';
import { HomeContainer } from './home.styles';

const Home = () => {
  return (
    <>
      <HomeContainer>
        <Sidebar />
        <Main />
      </HomeContainer>
    </>
  );
};

export default Home;
