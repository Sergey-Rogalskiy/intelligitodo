import { useState, useCallback } from 'react';
import { AddItem } from 'AddItem/AddItem';
import TodoList from 'TodoList/TodoList';
import Options from 'Options/Options';
import type { Element } from 'types';

import s from './index.module.css'

const App = () => {
    let initialTodoList: Array<Element> = []
    const todos = localStorage.getItem('todos')
    if (todos != null) {
        const initialTodoList2 = JSON.parse(todos)
        initialTodoList = initialTodoList2
    }
    const [todoList, setTodoList] = useState(initialTodoList)
    
    const [filter, setFilter] = useState('all')
    const doneCount = todoList && todoList.filter((el: Element) => !el.done).length;


    const setTodoListWithLocalStorage = useCallback((e: Array<Element>) => {
        setTodoList(e)
        localStorage.setItem('todos', JSON.stringify(e));
    }, [])
    
    return(
        <div className={s.container}>
            <h1>TODO</h1>
            <AddItem setTodoList={setTodoListWithLocalStorage} todoList={todoList}/>

            <div className={s.inner}>
                <TodoList setTodoList={setTodoListWithLocalStorage} todoList={todoList} filter={filter}/>
                <Options filter={filter} setFilter={setFilter} doneCount={doneCount} />
            </div>
        </div>
    )
}

export default App