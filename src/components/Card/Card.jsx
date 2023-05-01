import { useState, useContext } from 'react';
import { changeDate } from '../../helpers/changeDate';
import { findColorByCategory } from '../../helpers/findColorByCategory';
import {
  CardContainer,
  Header,
  HStack,
  Footer,
  ModalContainer,
  Form
} from './card.styles';
import { TfiMoreAlt } from 'react-icons/tfi';
import { MdOutlineDateRange, MdAccessTime } from 'react-icons/md';
import { Context } from '../../store/context';
import EditModal from '../EditModal/EditModal';

const Card = ({
  title,
  category,
  isCompleted,
  description,
  date,
  time,
  id
}) => {
  const { dispatch } = useContext(Context);
  const [show, setShow] = useState(false);
  const bgColor = findColorByCategory(category);
  const newDate = changeDate(date);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleShow = () => {
    setShow(!show);
  };

  const handleRemove = () => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  };

  const handleDone = () => {
    dispatch({ type: 'TOGGLE_TASK', payload: id });
  };

  return (
    <CardContainer id={id} color={bgColor}>
      <EditModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        title={title}
        category={category}
        isCompleted={isCompleted}
        description={description}
        date={date}
        time={time}
        id={id}
      />
      <Header className="element">
        <h3>{title}</h3>
        <button onClick={() => handleShow()}>
          <TfiMoreAlt className="icon" />
        </button>
        <ModalContainer show={show}>
          <button
            onClick={() => {
              handleShow();
              handleOpenModal();
            }}
          >
            Edit
          </button>
          <button
            onClick={() => {
              handleRemove(id);
              handleShow();
            }}
          >
            Delete
          </button>
        </ModalContainer>
      </Header>
      <HStack className="element">
        <div>
          <MdOutlineDateRange />
          {newDate || '--/--'}
        </div>
        <div>
          <MdAccessTime />
          {time || '--:--'}
        </div>
      </HStack>
      <p className="element">{description}</p>
      <Footer className="element">
        <Form color={bgColor}>
          <input
            onChange={() => handleDone()}
            type="checkbox"
            id={id}
            checked={isCompleted}
          />
          <label onChange={() => handleDone()} htmlFor={id}>
            Done
          </label>
        </Form>
      </Footer>
    </CardContainer>
  );
};

export default Card;
