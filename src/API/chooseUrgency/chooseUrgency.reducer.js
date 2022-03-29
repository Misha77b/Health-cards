import { SET_CHOOSE_URGENCY, SELECT_URGENCY } from './chooseUrgency.actions'

const initialState = {
    setChooseUrgency: [],
    selectedUrgency: '',
}

export const chooseUrgencyReducer = (state = initialState, action) => {
    switch(action.type) {
        case (SET_CHOOSE_URGENCY) : {
            return{
                ...state, 
                setChooseUrgency: action.payload,
            }
        }

        case (SELECT_URGENCY) : {
            return {
                ...state, 
                selectedUrgency: action.payload
            }
        }

        default: 
            return state
    }
}

export default chooseUrgencyReducer