export default (state = {}, action) => {
    console.log(action)
    let newState;
    const { name, todos, id } = action
    switch (action.type) {
        case 'ADD_CATEGORY':
            newState = Object.assign({}, state, {
                [id]: {
                    name: name,
                    todos: todos,
                    id: id
                }
            });
            return newState;
        default:
            return state;
    }
};