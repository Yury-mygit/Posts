import {React,useState} from 'react';
import Counter from "./UI/Counter/Counter";

const Field = () => {

    const [value, setValue] = useState('')


    return (
        <div>
            <h1 style={{display: "block", height:20}}>{value}</h1>
            <input
                type='text'
                value={value}
                onChange={event => setValue(event.target.value)}
                onKeyDown={ e => e.key === 'Enter' && console.log('sf') }
            />
            <Counter/>
            <Counter/>
        </div>
    );
};

export default Field;