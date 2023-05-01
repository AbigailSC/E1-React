import { ModalWrapper, Overlay } from '@styles/global';

const EditModal = ({
  isOpen,
  onClose,
  title,
  category,
  isCompleted,
  description,
  date,
  time,
  id
}) => {
  if (!isOpen) return null;
  const handleClose = () => {
    onClose();
  };
  return (
    <Overlay>
      <ModalWrapper>
        <p>Edit task</p>
        <form>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" defaultValue={title} />
          <label htmlFor="description">description</label>
          <input type="text" id="description" defaultValue={description} />
        </form>
        <button onClick={() => handleClose()}>close</button>
      </ModalWrapper>
    </Overlay>
  );
};

export default EditModal;
