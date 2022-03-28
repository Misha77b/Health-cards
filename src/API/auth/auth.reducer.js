import { AUTH_ERROR, AUTH_SUCCESS } from "./auth.actions";

const initialState = {
    auth: false,
    // authError: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case(AUTH_SUCCESS): {
            return{
                ...state,
                auth: action.payload,
            }
        }

        // case(AUTH_ERROR): {
        //     return{
        //         ...state, 
        //         authError: action.payload,
        //     }
        // }

        default:
            return state;
    }
}

export default authReducer;