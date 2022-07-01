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

  return (
    <Container>
        <div className="add-new-task"><img src="https://img.icons8.com/android/24/000000/plus.png"/></div>
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