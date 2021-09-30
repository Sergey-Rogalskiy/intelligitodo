import { FC } from 'react';
import { OptionsStyle, Counter, Button,  } from './elements'

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
    const buttons = FilterOptions

    return(
        <OptionsStyle>
            <Counter>{doneCount} left</Counter>
            {
                Object.keys(FilterOptions).map((item, index) => {
                    return(
                        <Button key={index} filter={filter === item ? true: false}
                        onClick={()=>{setFilter(item)}}>
                            {item}
                        </Button>
                    )
                })
            }
        </OptionsStyle>
    )
}

export default Options