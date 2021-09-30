import { FC } from 'react';
import s from './index.module.css'

type OptionsProps = {
    filter: string
    setFilter: any
    doneCount: number
}

export enum FilterOptions {
    All= "All",
    Current = "Current",
    Done = "Done"
}

const Options:FC<OptionsProps> = (props) => {
    const {filter, setFilter, doneCount} = props
    
    return(
        <div className={s.options}>
            <div className={s.counter}>{doneCount} left</div>
            {
                Object.keys(FilterOptions).map((item) => {
                    return(
                        <button key={item} 
                            className={filter === item ? s.active : ''} onClick={()=>{setFilter(item)}}>
                            {item}
                        </button>
                    )
                })
            }
        </div>
    )
}

export default Options