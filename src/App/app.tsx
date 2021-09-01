import { useState } from 'react';
import AddItem from '../AddItem/AddItem';
import TodoList from '../TodoList/TodoList';
import Options from '../Options/Options';

import s from './index.module.css'
import { useEffect } from 'react';

const App = () => {
    const initialTodoList: any = []
    const [todoList, setTodoList] = useState(initialTodoList)
    const todos = localStorage.getItem('todos')
    
    if (todos != null) {
        var initialTodoList2 = JSON.parse(todos)
    }
    useEffect(()=> {
        if (initialTodoList2) {
            setTodoList(initialTodoList2)
        }
        
    }, [setTodoList])

    const [filter, setFilter] = useState('all')
    const doneCount = todoList && todoList.filter((el: any) => !el.done).length;

    const temp = (e: any) => {
        setTodoList(e)
        localStorage.setItem('todos', JSON.stringify(e));
    }
    
    return(
        <div className={s.container}>
            <h1>TODO</h1>
            <AddItem setTodoList={(e: any) => temp(e)} todoList={todoList}/>

            <div className={s.inner}>
                <TodoList setTodoList={(e: any) => temp(e)} todoList={todoList} filter={filter}/>
                <Options filter={filter} setFilter={setFilter} doneCount={doneCount} />

            </div>
        </div>
    )
}

export default App