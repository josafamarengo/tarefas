import React, {useState} from 'react'
//import { DndProvider, useDrag } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Item } from '../types/item'

import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from '../styles/global'
import light from '../styles/themes/light'
import dark from '../styles/themes/dark'

import Header from '../components/Header'
import Task from '../components/Task'
import AddNewTask from '../components/AddNewTask'
import Filter from '../components/Filter'

/* usePersistedState é um hook que recebe um nome do estado e um valor padrão e armazena o valor no localStorage */
import usePersistedState from '../utils/usePersitedState'

const App = () => {
    const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
    const [list, setList] = useState<Item[]>([{id:1, name: 'Tarefa 1', done: false}, {id: 2, name: 'Tarefa 2', done: false}]);
    const [selectedFilter, setSelectedFilter] = useState('all');

    const toggleTheme = () => {
      setTheme(theme.title === 'light' ? dark : light);
    };


    const addTask = (task: string) => { // Clona a lista e adiciona um novo item
        let newList = [...list];
        newList.push({id: list.length + 1, name: task, done: false});
        setList(newList);
    }

    const taskChange = (id: number, done:boolean) => {
        let newList = [...list];
        for(let i = 0; i < newList.length; i++){
            if(newList[i].id === id){
                newList[i].done = done;
            }
        }
        setList(newList);
    }

    const removeTask = (id: number) => {  // Remove um item da lista
        let newList = [...list];
        newList = newList.filter(item => item.id !== id);
        setList(newList);
    }

    // Filtro de tarefas
    const updateFilter = (selected) => {
      setSelectedFilter(selected)
    }

    const getTasks = () => {
      let newList = [...list];
      if(selectedFilter === 'active'){
        newList = newList.filter(item => !item.done);
      }
      if(selectedFilter === 'completed'){
        newList = newList.filter(item => item.done);
      }
      return newList;
    }

  return(
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header toggleTheme={toggleTheme} />
        <AddNewTask onEnter={addTask}/>

        <section className="listArea">
          <div className="task-list">
          {list.map((item, index) => (
            <Task key={index} item={item} onChange={taskChange} onRemove={removeTask}/>
          ))}
          </div>
          <Filter selectedFilter={selectedFilter} updateFilter={updateFilter} />
        </section>
      </div>
      <p className="frase">Drag and drop to reorder list</p>
      <footer>
          <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="https://josafa.com.br" target="_blank">Josafá Marengo</a>.</p>
      </footer>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
