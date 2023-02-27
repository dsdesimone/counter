import React, {useState} from 'react'
import './Counter.css'

const Counter = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        const newValueCount = count +1;
        setCount(newValueCount);
    }

    return (
        <div className='main__container'>
            <h1 className='title'>
                El contador es: <br />
                <span style={{ color: "#646cffaa" }}>
                    <div>
                        {count}
                    </div>
                </span>
            </h1>
            <button className='button' onClick={increment}>Incrementar</button>
        </div>
    );
};

export default Counter;