export const ObjectReducer = (state = {obj:{}}, action) => {
    switch(action.type) {
        case "ADD_PROPERTY":
            return {obj: action.payload};
        
        default:
            return state; 
    }
}