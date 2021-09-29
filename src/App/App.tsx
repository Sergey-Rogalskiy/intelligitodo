import { useState, useCallback } from 'react';
import AddItem from 'AddItem/AddItem';
import TodoList from 'TodoList/TodoList';
import Options from 'Options/Options';
import type { Element } from 'types';
import { FilterOptions } from 'Options/Options';
import styled from 'styled-components'

const Container = styled.div`
    margin: auto;
    width: 50%;
    font-family: 'Courier New', Courier, monospace;
    min-width: 350px;
`;
const Inner = styled.div`
    background-color: blueviolet;
    box-shadow: 0px 00px 50px #0005;
`;

const App = () => {
    const [todoList, setTodoList] = useState(()=> {
        const todos = localStorage.getItem('todos')
        let initialTodoList: Array<Element> = []
        if (todos != null) {
            initialTodoList = JSON.parse(todos);
        }
        return initialTodoList
    })

    const [filter, setFilter] = useState(FilterOptions.All)
    const doneCount = todoList && todoList.filter((el: Element) => !el.done).length;
  
    const setTodoListWithLocalStorage = useCallback((e: Array<Element>) => {
        setTodoList(e)
        localStorage.setItem('todos', JSON.stringify(e));
    }, [])
    
    return(
        <Container>
            <h1>TODO</h1>
            <AddItem setTodoList={setTodoListWithLocalStorage} todoList={todoList}/>

            <Inner>
                <TodoList setTodoList={setTodoListWithLocalStorage} todoList={todoList} filter={filter}/>
                <Options filter={filter} setFilter={setFilter} doneCount={doneCount} />
            </Inner>
        </Container>
    )
}

export default App