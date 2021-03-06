//import { useDrag } from 'react-dnd';
import {Container} from './styles';
import { Item } from '../../types/item';

type Props = {
  item: Item
  onChange: (id: number, done: boolean) => void
  onRemove: (id: number) => void
}

const Task: React.FC<Props> = ({item, onChange, onRemove}: Props) => {
  return (
    <Container>
            <input
              type="checkbox"
              id={`task-${item.id}`}
              checked={item.done}
              onChange={e => onChange(item.id, e.target.checked)}
            />
            <label htmlFor={`task-${item.id}`} >{item.name}</label>
            <button onClick={() => onRemove(item.id)}><img src="https://img.icons8.com/ios-glyphs/30/000000/filled-trash.png" alt="delete" height="25" /></button>
    </Container>
  );
}

export default Task;
