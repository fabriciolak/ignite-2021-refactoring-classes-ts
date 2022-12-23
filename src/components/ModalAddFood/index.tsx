import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

interface Foods {
  id: number,
  name: string
  description: string
  price: string
  available: boolean
  image: string
}

interface ModalAddFoodProps {
  handleAddFood: (data: Foods) => void
  isOpen: boolean
  setIsOpen: () => boolean
}

function ModalAddFood({ handleAddFood, isOpen, setIsOpen }: ModalAddFoodProps) {
  async function handleSubmit(data: Foods) {

    handleAddFood(data);
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalAddFood;
