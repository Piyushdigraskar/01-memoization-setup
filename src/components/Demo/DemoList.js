import React,{useMemo} from 'react';
import classes from './DemoList.module.css'

const DemoList = (props) => {
    const { items, order } = props
    const sortedList = useMemo(() => {
        // Sort items based on the order (ascending or descending)
        return order ? items.slice().sort((a, b) => a - b) : items.slice().sort((a, b) => b - a);
    }, [items, order]);

    return <div className={classes.list}>
        <h2>{props.title}</h2>
        <ul>
            {sortedList.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    </div>
}

export default React.memo(DemoList);