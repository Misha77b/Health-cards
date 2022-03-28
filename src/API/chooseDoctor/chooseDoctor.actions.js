export const SET_CHOOSE_DOCTOR = 'SET_CHOOSE_DOCTOR';
export const setChooseDoctor = (choose_doctor) => ({
    type: SET_CHOOSE_DOCTOR,
    payload: choose_doctor, 
});

export const SELECT_DOCTOR = 'SELECT_DOCTOR';
export const selectDoctor = (select_doctor) => ({
    type: SELECT_DOCTOR,
    payload: select_doctor, 
});