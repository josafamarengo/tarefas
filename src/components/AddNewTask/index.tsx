import {Container} from './styles';
import { useState } from 'react';

type Props = {
  onEnter: (task: string) => void;
}

const AddNewTask = ({onEnter}: Props) => {

  const [inputText, setInputText] = useState('');

  const handleEnter = (e: React.KeyboardEvent) => { // Função para adicionar uma nova tarefa
    if (e.code === 'Enter' && inputText !== '') {
      onEnter(inputText);
      setInputText('');
    }
  }

  const addClick = () => { // Função para adicionar uma nova tarefa com o mouse
    if (inputText !== '') {
      onEnter(inputText);
      setInputText('');
    }
  }

  return (
    <Container>
        <button
          className="add-new-task"
          onClick={addClick}>
            <img
              src="https://img.icons8.com/ios/50/000000/add--v1.png"
              alt="add task"
              width="29"
              height="29"/>
        </button>
      <input
        type="text"
        placeholder="Adicionar tarefa"
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        onKeyDown={handleEnter}
      />
    </Container>
  );
}
export default AddNewTask;
