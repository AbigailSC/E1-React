import { useState } from 'react';
import Modal from '../Modal/Modal';
import { Header, Nav, Button } from './navbar.styles';

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
        <Button onClick={handleOpenModal}>
          <span className="span"></span>
        </Button>
        <Modal isOpen={isOpen} onClose={handleCloseModal} />
      </Nav>
    </Header>
  );
};

export default Navbar;
