import { useState } from 'react';
import Modal from '../Modal/Modal';
import { Header, Nav, Button, NavBar } from './navbar.styles';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <Header>
      <Nav>
        <h1>Todo List</h1>
        <NavBar>
          <Link to="/">Home</Link>
          <Link to="/tasks">Tasks pendings</Link>
          <Link to="/pokemon">Search a Pokemon</Link>
        </NavBar>
        <Button onClick={handleOpenModal}>
          <span className="span"></span>
        </Button>
        <Modal isOpen={isOpen} onClose={handleCloseModal} />
      </Nav>
    </Header>
  );
};

export default Navbar;
