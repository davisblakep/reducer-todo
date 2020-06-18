

export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },
    {
        item: 'Smell the wall',
        completed: false,
        id: 3892989289
    },
];

export const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_TODO':
            return[
                ...state,
                {
                item: action.payload,
                completed: false,
                id: Date.now()
                }]
                
        default: 
            return state;
            
    }
}