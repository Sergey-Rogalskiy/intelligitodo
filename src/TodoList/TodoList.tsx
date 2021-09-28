import type { FC } from 'react'
import type { Element} from 'types'
import s from './index.module.css'
import { FilterOptions } from 'Options/Options'

type TodoListProps = {
    filter: string
    setTodoList: (e: Element[]) => void
    todoList: Array<Element>
}

const TodoList:FC<TodoListProps> = (props: TodoListProps) => {
    const {todoList, setTodoList, filter} = props

    const setDone = (e: React.FormEvent<EventTarget>, id:number) => {
        e.preventDefault()
        let newArray = [...todoList]
        // const index = newArray.map(e => e.id).indexOf(id);
        const index = newArray.findIndex((el) => el.id === id);
        newArray[index].done = !todoList[index].done
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
        <ul className={s.list}>
            {
                visibleItems.map((item: Element) => {
                    return(
                        <li key={item.id} className={s.element}>
                            <span onClick={(e) => setDone(e, item.id)} >
                                <input 
                                id={item.id.toString()} 
                                className={s.custom_radio} 
                                type="radio" 
                                checked={item.done} 
                                onChange={()=>console.log('')}/>
                                <label htmlFor={item.id.toString()} className={`${s.label} ${item.done ? s.checked : ''}`}>{item.label}</label> 
                            </span>
                            <button className={s.button} onClick={e=>deleteItem(e, item.id)}>x</button>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default TodoList