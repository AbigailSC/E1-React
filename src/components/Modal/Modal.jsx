import { useState, useContext } from 'react';
import {
  Header,
  Footer,
  Body,
  Field,
  ContainerDateField,
  Input,
  TextArea,
  ErrorLabel,
  SelectField,
  Button
} from './modal.styles';
import { Divider, Overlay, ModalWrapper } from '@styles/global';
import { IoClose } from 'react-icons/io5';
import { categories } from '@helpers/categories';
import { Context } from '@store/context';
import { v4 } from 'uuid';

const Modal = ({ isOpen, onClose }) => {
  const [input, setInput] = useState({
    id: v4(),
    title: '',
    date: '',
    time: '',
    category: '',
    description: '',
    completed: false
  });

  const [errors, setErrors] = useState({});

  const { dispatch } = useContext(Context);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedInput = { ...input, [name]: value };
    setInput(updatedInput);
    setErrors(validation(updatedInput));
  };

  const validation = (input) => {
    const errors = {};
    if (input.title.length === 0) errors.title = 'Title is required';
    if (input.title.length > 40)
      errors.title = 'Title must be less than 40 characters';
    if (!input.category) errors.category = 'Category is required';
    if (!input.description) errors.description = 'Description is required';
    if (input.description.length > 200)
      errors.description = 'Description must be less than 200 characters';
    return errors;
  };

  const verifyErrorsAndInput = () => {
    if (Object.keys(errors).length === 0) {
      if (
        input.title.length === 0 &&
        input.category.length === 0 &&
        input.description.length === 0
      ) {
        return true;
      }
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(input));
    if (Object.keys(errors).length > 0) return;
    dispatch({ type: 'ADD_TASK', payload: input });
    setInput({
      title: '',
      date: '',
      time: '',
      category: '',
      description: '',
      completed: false
    });
    setErrors({});
    onClose();
  };
  if (!isOpen) return null;
  return (
    <Overlay>
      <ModalWrapper>
        <Header>
          <h2>Create a new task</h2>
          <button onClick={onClose}>
            <IoClose className="icon" />
          </button>
        </Header>
        <Divider />
        <Body>
          <Field>
            <label htmlFor="title">Title*</label>
            <Input
              onChange={(e) => handleChange(e)}
              errors={errors.title}
              type="text"
              id="title"
              name="title"
              value={input.title}
              placeholder="add a title..."
              isError={errors.title !== undefined}
            />
            {errors.title != null && <ErrorLabel>{errors.title}</ErrorLabel>}
          </Field>
          <ContainerDateField>
            <Field>
              <label htmlFor="date">Date</label>
              <Input
                onChange={(e) => handleChange(e)}
                type="date"
                id="date"
                name="date"
                value={input.date}
              />
            </Field>
            <Field>
              <label htmlFor="time">Time</label>
              <Input
                onChange={(e) => handleChange(e)}
                name="time"
                value={input.time}
                type="time"
                id="time"
              />
            </Field>
            <Field>
              <label htmlFor="category">Category*</label>
              <SelectField
                id="category"
                onChange={(e) => handleChange(e)}
                errors={errors.category}
                name="category"
                value={input.category}
                isError={errors.category !== undefined}
              >
                <option value="" disabled selected>
                  Select a category
                </option>
                {categories.map((category) => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </SelectField>
              {errors.category != null && (
                <ErrorLabel>{errors.category}</ErrorLabel>
              )}
            </Field>
          </ContainerDateField>
          <Field>
            <label htmlFor="description">Description*</label>
            <TextArea
              onChange={(e) => handleChange(e)}
              errors={errors.description}
              name="description"
              value={input.description}
              id="description"
              placeholder="add a description..."
              isError={errors.description !== undefined}
            />
            {errors.description != null && (
              <ErrorLabel>{errors.description}</ErrorLabel>
            )}
          </Field>
        </Body>
        <Divider />
        <Footer>
          <Button
            onClick={(e) => handleSubmit(e)}
            disabled={verifyErrorsAndInput()}
            isEmpty={verifyErrorsAndInput()}
          >
            Create
          </Button>
        </Footer>
      </ModalWrapper>
    </Overlay>
  );
};

export default Modal;
