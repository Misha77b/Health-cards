import { AUTH_SUCCESS } from "./auth.actions";

const initialState = {
    auth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case(AUTH_SUCCESS): {
            return{
                ...state,
                auth: action.payload,
                
                // Think about payload success
            }
        }

        default:
            return state;
    }
}

export default authReducer;