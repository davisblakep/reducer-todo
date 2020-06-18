

export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },
    {
        item: 'Smell the wall',
        completed: true,
        id: 3892989289
    },
];

export const reducer = (state=[], action) => {
    switch(action.type){
        case 'ADD_TODO':
            return[
                ...state,
                {
                item: action.payload,
                completed: false,
                id: Date.now()
                }];
        case 'CHANGE_STATUS':
            return state.map(item => {return(
                     item.id === action.payload ? {...item, completed: !item.completed} : item
                 )})
                 
        default: 
            return state;
            
    }
}