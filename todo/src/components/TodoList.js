import React, { useReducer } from 'react';

import { initialState, reducer } from '../reducers/todoReducer';


const TodoList = () => {

    const [state] = useReducer(reducer, initialState);

    console.log("Todo list", state);


    return(
        
        <div style={{width: "100%"}}>
            <ul style={{width: "100%"}}>
                
                {state.map(item => {
                    return(
                        <li key={item.id} style={{textAlign: "left"}}>{item.item}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default TodoList;