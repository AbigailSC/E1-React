import { useState } from 'react';
import { changeDate } from '@helpers/changeDate';
import { findColorByCategory } from '@helpers/findColorByCategory';
import {
  CardContainer,
  Header,
  HStack,
  Footer,
  ModalContainer,
  Form,
  Title,
  Text
} from './card.styles';
import { TfiMoreAlt } from 'react-icons/tfi';
import { MdOutlineDateRange, MdAccessTime } from 'react-icons/md';
import { EditModal } from '@components/EditModal';
import { useDispatch } from 'react-redux';
import { remove, toggle } from '@store/slices/tasks';

const Card = ({
  title,
  category,
  isCompleted,
  description,
  date,
  time,
  id
}) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const bgColor = findColorByCategory(category);
  const newDate = changeDate(date);

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
    dispatch(remove(id));
  };

  const handleDone = () => {
    dispatch(toggle(id));
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
        <Title decoration={isCompleted}>{title}</Title>
        <button onClick={() => handleShow()}>
          <TfiMoreAlt className="icon" />
        </button>
        <ModalContainer show={show} task="add">
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
      <Text decoration={isCompleted} className="element">
        {description}
      </Text>
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
