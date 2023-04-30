import { useState } from 'react';
import { changeDate } from '../../helpers/changeDate';
import { findColorByCategory } from '../../helpers/findColorByCategory';
import {
  CardContainer,
  Header,
  HStack,
  Footer,
  ModalContainer
} from './card.styles';
import { TfiMoreAlt } from 'react-icons/tfi';
import { MdOutlineDateRange, MdAccessTime } from 'react-icons/md';

const Card = ({
  title,
  category,
  isCompleted,
  description,
  date,
  time,
  id
}) => {
  const [show, setShow] = useState(false);
  const bgColor = findColorByCategory(category);
  const newDate = changeDate(date);

  const handleShow = () => {
    setShow(!show);
  };
  return (
    <CardContainer id={id} color={bgColor}>
      <Header>
        <h3>{title}</h3>
        <button onClick={() => handleShow()}>
          <TfiMoreAlt className="icon" />
        </button>
        <ModalContainer show={show}>
          <button onClick={() => handleShow()}>Edit</button>
          <button onClick={() => handleShow()}>Delete</button>
        </ModalContainer>
      </Header>
      {(date || time) && (
        <HStack>
          <div>
            <MdOutlineDateRange />
            {newDate}
          </div>
          <div>
            <MdAccessTime />
            {time} hs
          </div>
        </HStack>
      )}
      <p>{description}</p>
      <Footer>
        <input type="checkbox" checked={isCompleted} />
        <span>Done</span>
      </Footer>
    </CardContainer>
  );
};

export default Card;
