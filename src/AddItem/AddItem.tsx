import { useState, memo } from 'react';
import type { FC } from 'react';
import s from './index.module.css'

type AddItemProps = {
    addItem(e: string): void
}

const AddItem:FC<AddItemProps> = (props) => {
    const {addItem} = props
    const [text, setText] = useState('')
    
    const onSubmit = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault()
        if (text) {
            addItem(text)
            setText('')
        }
    }

    return(
        <div className={s.new_element}>
            <form onSubmit={onSubmit}>
                <button>&#10010;</button>
                <input 
                    type="text" 
                    placeholder='Add item' 
                    value={text}
                    onChange={(e) => setText(e.target.value)}/>
            </form>
        </div>
    )
}

export default memo(AddItem)