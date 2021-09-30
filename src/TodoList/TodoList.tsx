import type { FC } from 'react'
import type { Element} from 'types'
import { FilterOptions } from 'Options/Options'
import styled from 'styled-components'

const List = styled.ul`
    background-color: #fff;
    border-radius: 5px;
`;
const ElementLi = styled.li`
    padding: 10px 20px;
    border-bottom: solid 3px #aaa;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`;
const Label = styled.label`
    display: inline-flex;
    align-items: center;
    user-select: none;
    padding: 0 0 0 15px;
    &:hover {
        color: #aaa;
    }
    .checked {
        color: #000;
        text-decoration: line-through;
    }
    &::before {
        content: '';
        display: inline-block;
        width: 0.5em;
        height: 0.5em;
        flex-shrink: 0;
        flex-grow: 0;
        background-color: #0000;
        border: solid 1px #000;
        box-sizing: border-box;
        border-radius: 50%;
        margin-right: 20px;
    }
`;
const CustomCheckbox = styled.input`
    width: 30px;    
    position: absolute;
    z-index: -1;
    opacity: 0;
    &:checked+${Label}::before {
        background-color: #000;
        box-sizing: border-box;
    }
    &:checked+${Label} {
        color: #000;
        text-decoration: line-through;
    }
    &+${Label}:hover::before {
        background-color: #aaa;
    }
    &:active+${Label}::before {
        background-color: #aaa;
    }
`;
const Button = styled.button`
    background-color: #0000;
    border: none;
    border-radius: 50%;
    &:hover {
        color: #aaa;
    }
    &:active {
        font-weight: 900;
    }
`;

type TodoListProps = {
    filter: string
    setTodoList: (e: Element[]) => void
    todoList: Array<Element>
}

const TodoList:FC<TodoListProps> = (props: TodoListProps) => {
    const {todoList, setTodoList, filter} = props
    
    const setDone = (e: React.ChangeEvent<HTMLInputElement>, id:number) => {
        // e.preventDefault()
        let newArray = [...todoList]
        // const index = newArray.map(e => e.id).indexOf(id);
        const index = newArray.findIndex((el) => el.id === id);
        newArray[index].done = e.target.checked
        setTodoList(newArray)
    }

    const deleteItem = (e: React.FormEvent<EventTarget>, id:number) => {
        e.preventDefault()
        const index = todoList.findIndex((el: Element) => el.id === id);
        
        let newArray = [
			...todoList.slice(0, index),
			...todoList.slice(index + 1)
        ]
        setTodoList(newArray)
    }

    const showVisibleItems = () => {
		switch(filter) {
			case FilterOptions.All:
				return todoList;
			case FilterOptions.Current:
				return todoList.filter((item: Element) => !item.done);
			case FilterOptions.Done:
				return todoList.filter((item: Element) => item.done);
			default:
				return todoList;
        }

    }
    const visibleItems = showVisibleItems()
    
    return(
        <List>
            {
                visibleItems.map((item: Element) => {
                    return(
                        <ElementLi key={item.id}>
                            <span>
                                <CustomCheckbox 
                                id={item.id.toString()} 
                                type="checkbox"
                                checked={item.done} 
                                onChange={(e) => setDone(e, item.id)}/>
                                <Label 
                                htmlFor={item.id.toString()}>
                                    {item.label}
                                </Label> 
                            </span>
                            <Button onClick={e=>deleteItem(e, item.id)}>x</Button>
                        </ElementLi>
                    )
                })
            }
        </List>
    )
}

export default TodoList