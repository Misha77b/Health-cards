import { CREATE_VISIT_REQUEST } from "./createVisit.actions";

const initState = {
    createVisitRequest: {},
}

const createVisitReducer = (state = initState, action) => {
    switch(action.type) {
        case CREATE_VISIT_REQUEST: {
            return {
                ...state,
                createVisitRequest: action.payload,
            }
        }

        default:
            return state
    }
}

export default createVisitReducer