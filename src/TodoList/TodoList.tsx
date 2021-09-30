import type { FC } from 'react'
import type { Element} from 'types'
import s from './index.module.css'

type TodoListProps = {
    visibleItems: Element[]
    removeItem(e: number): void
    toogleDone(e: number, checked: boolean): void
}

const TodoList:FC<TodoListProps> = (props: TodoListProps) => {
    const {toogleDone, removeItem, visibleItems} = props

    return(
        <ul className={s.list}>
            {
                visibleItems.map((item: Element) => {
                    return(
                        <li key={item.id} className={s.element}>
                            <span>
                                <input 
                                id={item.id.toString()} 
                                className={s.custom_checkbox} 
                                type="checkbox"
                                checked={item.done} 
                                onChange={(e) => toogleDone(item.id, e.target.checked)}/>
                                <label htmlFor={item.id.toString()} className={`${s.label} ${item.done ? s.checked : ''}`}>{item.label}</label> 
                            </span>
                            <button className={s.button} onClick={()=>removeItem(item.id)}>x</button>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default TodoList