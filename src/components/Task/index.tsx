import {Container} from './styles';
import { Item } from '../../types/item';
import { Draggable } from 'react-beautiful-dnd';

type Props = {
  item: Item
  onChange: (id: number, done: boolean) => void
}

const Task: React.FC<Props> = ({item, onChange}: Props) => {
  return (
    <Container>
      <Draggable draggableId={item.id.toString()} index={item.id}>
        {(provided, snapshot) => (
          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            <input 
              type="checkbox"
              id={`task-${item.id}`}
              checked={item.done}
              onChange={e => onChange(item.id, e.target.checked)}
            />
            <label htmlFor={`task-${item.id}`} >{item.name}</label>
          </div>
        )}
      </Draggable>
    </Container>
  );
}

export default Task;