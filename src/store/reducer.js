import { INPUT_CHANGE, CLICK_BUTTON, DELETE_ITEM } from './action';

const defaultState = {
    input: "",
    arr: [],
};

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case INPUT_CHANGE:
            return {
                ...state,
                input: action.value,
            }
        case CLICK_BUTTON:
            return {
                ...state,
                arr: [...state.arr, state.input],
                input: "",
            }
        case DELETE_ITEM:
            const arr = state.arr.slice();
            arr.splice(action.value, 1);
            return {
                ...state,
                arr,
            }
        default:
            return state;
    }
};

export default reducer;