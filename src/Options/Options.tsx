import { FC } from 'react';
import s from './index.module.css'

type OptionsProps = {
    filter: string
    setFilter: any
    doneCount: number
}

const Options:FC<OptionsProps> = (props) => {
    const {filter, setFilter, doneCount} = props
    const buttons = [
        { name: 'all', label: 'All'},
        { name: 'current', label: 'Current'},
        { name: 'done', label: 'Done'}
    ]

    return(
        <div className={s.options}>
            <div className={s.counter}>{doneCount} left</div>
            {
                buttons.map((item, index) => {
                    return(
                        <button key={index} 
                            className={filter === item.name ? s.active : ''} onClick={()=>{setFilter(item.name)}}>
                            {item.label}
                        </button>
                    )
                })
            }
        </div>
    )
}

export default Options