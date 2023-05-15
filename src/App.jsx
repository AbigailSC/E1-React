import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '@pages/Home';
import { NotFound } from '@pages/NotFound';
import { Tasks } from '@pages/Tasks';
import { Navbar } from '@components/Navbar';
import { Pokemon } from '@pages/Pokemon';
import Globals from '@styles/global';

function App() {
  return (
    <>
      <Globals />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </>
  );
}

export default App;
