import type { FC } from 'react'
import type { Element} from 'types'
import { FilterOptions } from 'Options/Options'
import { List, ElementLi, Label, CustomCheckbox, Button } from './elements'

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