export const SET_CHOOSE_URGENCY = 'SET_CHOOSE_URGENCY';
export const setChooseUrgency = (choose_urgency) => ({
    type: SET_CHOOSE_URGENCY,
    payload: choose_urgency, 
});

export const SELECT_URGENCY = 'SELECT_URGENCY';
export const selectUrgency = (select_urgency) => ({
    type: SELECT_URGENCY,
    payload: select_urgency, 
});