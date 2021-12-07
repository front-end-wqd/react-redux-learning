import { INPUT_CHANGE, CLICK_BUTTON, DELETE_ITEM } from './action';

export const inputChange = (value) => ({
    type: INPUT_CHANGE,
    value: value.target.value,
});

export const clickButton = (value) => ({
    type: CLICK_BUTTON,
});

export const deleteItem = (value) => ({
    type: DELETE_ITEM,
    value: value
});