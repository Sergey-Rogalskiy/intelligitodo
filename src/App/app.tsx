import { useState } from 'react';
import s from './index.module.css'

const App = () => {
    let initialTodoList = [
        {
            label: 'Todo',
            done: false
        },
        {
            label: 'Todo2',
            done: true
        },
    ]

    const [text, setText] = useState('')
    const [todoList, setTodoList] = useState(initialTodoList)
    const [filter, setFilter] = useState('all')

    const addItem = (e: any) => {
        e.preventDefault()
        if (text) {
            setTodoList(
                [
                    ...todoList,
                    {label: text, done: false}
                ]
            )
        }
        setText('')
    }

    const setDone = (e: any, index:number) => {
        e.preventDefault()
        console.log(index);
        let newArray = [...todoList]
        newArray[index].done = !todoList[index].done
        setTodoList(newArray)
    }

    const showVisibleItems = () => {
		switch(filter) {
			case 'all':
				return todoList;
			case 'current':
				return todoList.filter((item) => !item.done);
			case 'done':
				return todoList.filter((item) => item.done);
			default:
				return todoList;
        }

    }
    const visibleItems = showVisibleItems()

    return(
        <div className={s.container}>
            <div className={s.options}>
                <button onClick={()=>{setFilter('done')}}>
                    Done
                </button>
                <button onClick={()=>{setFilter('current')}}>
                    Current
                </button>
                <button onClick={()=>{setFilter('all')}}>
                    All
                </button>
            </div>
            <div>
                <ul className={s.list}>
                    {
                        visibleItems.map((item, index) => {
                            return(
                                <li key={index} onClick={(e) => setDone(e, index)} className={s.element}>
                                    <input className={s.radio} type="radio" checked={item.done}/><span className={s.label}>{item.label}</span>
                                </li>
                            )
                        })
                    }
                    <li className={s.last_element}>
                        <form onSubmit={(e) => {addItem(e)}}>
                            <button>&#10010;</button>
                            <input 
                                type="text" 
                                placeholder='Add item' 
                                value={text}
                                onChange={(e) => setText(e.target.value)}/>
                        </form>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default App