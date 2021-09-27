import { useState } from 'react';
import AddItem from 'AddItem/AddItem';
import TodoList from 'TodoList/TodoList';
import Options from 'Options/Options';
import { Element } from 'types';

import s from 'App/index.module.css'
import { useEffect } from 'react';

const App = () => {
    const initialTodoList: Array<Element> = []
    const [todoList, setTodoList] = useState(initialTodoList)
    const todos = localStorage.getItem('todos')
    
    if (todos != null) {
        var initialTodoList2 = JSON.parse(todos)
    }
    useEffect(()=> {
        if (initialTodoList2) {
            setTodoList(initialTodoList2)
        }// eslint-disable-next-line
    }, [setTodoList])


    const [filter, setFilter] = useState('all')
    const doneCount = todoList && todoList.filter((el: Element) => !el.done).length;

    const setTodoListWithLocalStorage = (e: Array<Element>) => {
        setTodoList(e)
        localStorage.setItem('todos', JSON.stringify(e));
    }
    
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