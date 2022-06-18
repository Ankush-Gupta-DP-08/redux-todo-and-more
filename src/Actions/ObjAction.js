export const AddProperty = (key, value) => (dispatch, getState) => {
    const {
        myObject: {obj}
    } = getState(); 

    const hasKey = obj.hasOwnProperty(key); 

    if (!hasKey) {
        const newObj = {
        }
        newObj[key] = value; 

        dispatch({
            type: "ADD_PROPERTY", 
            payload: {...newObj, ...obj}
        })
    }
}