import {Container} from './styles';
import { useState } from 'react';

type Props = {
  onEnter: (task: string) => void;
}

const AddNewTask = ({onEnter}: Props) => {

  const [inputText, setInputText] = useState('');

  const handleEnter = (e: React.KeyboardEvent) => {
    if (e.code === 'Enter' && inputText !== '') {
      onEnter(inputText);
      setInputText('');
    }
  }

  const addClick = () => {
    if (inputText !== '') {
      onEnter(inputText);
      setInputText('');
    }
  }

  return (
    <Container>
        <button className="add-new-task" onClick={addClick}><img src="https://img.icons8.com/android/24/000000/plus.png"/></button>
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
