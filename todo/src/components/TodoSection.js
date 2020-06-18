import React, { useState, useReducer } from 'react';

import { initialState, reducer } from '../reducers/todoReducer';




const TodoSection = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

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

   


    return(
        <div>
        <div style={{width: "100%"}}>
            <form onSubmit={onSubmit}>
                <label style={{fontSize: "1rem"}}>
                    Add Your Todo Items:
                <input 
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
            <ul style={{width: "100%"}}>
                
                {state.map(item => {
                    return(
                        <li onClick={(() => dispatch({ type: 'CHANGE_STATUS'}))} key={item.id} style={{textAlign: "left"}}>{item.item}</li>
                    )
                })}
            </ul>
        </div>
        </div>
     ) }

export default TodoSection;