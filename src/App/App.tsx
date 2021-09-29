import { useState, useCallback, useEffect, useMemo } from 'react';
import AddItem from 'AddItem/AddItem';
import TodoList from 'TodoList/TodoList';
import Options from 'Options/Options';
import type { Element } from 'types';
import { FilterOptions } from 'Options/Options';

import s from './index.module.css'

const App = () => {
    const [todoList, setTodoList] = useState(()=> {
        const todos = localStorage.getItem('todos')
        let initialTodoList: Array<Element> = []
        if (todos != null) {
            initialTodoList = JSON.parse(todos);
        }
        return initialTodoList
    })
    useEffect(()=>localStorage.setItem('todos', JSON.stringify(todoList)), [todoList])

    // AddItem
    const addItem = useCallback((text:string) => {
        const newArray = [
            ...todoList,
            {id: Date.now(), label: text, done: false},
        ]
        setTodoList(()=>newArray)
    }, [todoList])
    
    //Options
    const [filter, setFilter] = useState(FilterOptions.All)
    const doneCount = useMemo(()=>todoList && todoList.filter((el) => !el.done).length,[todoList])
  
    // TodoList
    const removeItem = useCallback((index:number) => {
        const newArray = todoList.filter((el) => el.id !== index);
        setTodoList(()=>newArray)
    }, [todoList])
    
    const toogleDone = useCallback((id:number, checked:boolean) => {
        setTodoList((prevState)=>{
            let newArray = [...prevState]
            const index = newArray.findIndex((el) => el.id === id);
            newArray[index].done = checked
            return newArray
        })
    }, [todoList])

    const showVisibleItems = useCallback(() => {
		switch(filter) {
			case FilterOptions.All:
				return todoList;
			case FilterOptions.Current:
				return todoList.filter((item) => !item.done);
			case FilterOptions.Done:
				return todoList.filter((item) => item.done);
			default:
				return todoList;
        }
    }, [todoList, filter])
    const visibleItems = showVisibleItems()
    
    return(
        <div className={s.container}>
            <h1>TODO</h1>
            <AddItem addItem={addItem}/>

            <div className={s.inner}>
                <TodoList removeItem={removeItem} toogleDone={toogleDone} visibleItems={visibleItems}/>
                <Options filter={filter} setFilter={setFilter} doneCount={doneCount} />
            </div>
        </div>
    )
}

export default App