const INITIAL_STATE = {tasks: []};
const rootReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {...state, tasks: [...state.tasks, action.payload]};
        case 'REMOVE_TASK':
            return {...state, tasks: state.tasks.filter(t => t.id !== action.payload)};
        default:
            return state;
    };
};

export default rootReducer;