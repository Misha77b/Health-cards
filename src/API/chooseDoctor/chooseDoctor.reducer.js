import { SET_CHOOSE_DOCTOR, SELECT_DOCTOR } from "./chooseDoctor.actions";

const initialState = {
    setChooseDoctor: [],
    selectedDoctor: '',
}

export const chooseDoctorReducer = (state = initialState, action) => {
    switch(action.type) {
        case (SET_CHOOSE_DOCTOR) : {
            return{
                ...state, 
                setChooseDoctor: action.payload,
            }
        }

        case (SELECT_DOCTOR) : {
            return {
                ...state, 
                selectedDoctor: action.payload
            }
        }

        default: 
            return state
    }
}

export default chooseDoctorReducer