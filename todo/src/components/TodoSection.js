import React, { useState, useReducer } from 'react';

import { initialState, reducer } from '../reducers/todoReducer';




const TodoSection = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    console.log('Todosection state', state)

    const [formState, setFormState] = useState({
        item: ""
    })

    const inputChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value})
    };

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_TODO', payload: formState.item})
        setFormState({item: ""})
    };

    const clearCompleted = (e) => {
        e.preventDefault();
        dispatch({ type: "CLEAR_COMPLETED"});
    }

   


    return(
        <div>
        <div style={{width: "100%"}}>
            <form onSubmit={onSubmit}>
                <label style={{fontSize: "1rem"}}>
                    Add Your Todo Items:
                <input 
                    autoFocus
                    htmlFor="item"
                    type="text"
                    value={formState.item}
                    id="item"
                    name="item"
                    onChange={inputChange}
                />
                </label>
                <button type="submit">Add Item</button>
            </form>
        </div>
    
        
        <div style={{width: "100%"}}>
            <ul>
                
                {state.map(item => {
                    return(
                        <li onClick={(() => dispatch({ type: 'CHANGE_STATUS', payload: item.id}))} className={ item.completed ? "completed" : ""} key={item.id} style={{textAlign: "left"}}>{item.item}</li>
                    )
                })}
            </ul>
            <button onClick={clearCompleted}>Clear Completed Items</button>
        </div>
        </div>
     ) }

export default TodoSection;