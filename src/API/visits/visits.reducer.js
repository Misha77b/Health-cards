import { CREATE_VISIT_REQUEST, GET_VISITS_REQUEST } from "./visits.actions";

const initState = {
    createVisitRequest: {},
    visits: [],
}

const visitsReducer = (state = initState, action) => {
    switch(action.type) {
        case CREATE_VISIT_REQUEST: {
            return {
                ...state,
                createVisitRequest: action.payload,
            }
        }

        case GET_VISITS_REQUEST: {
            return {
                ...state,
                visits: action.payload,
            }
        }

        default:
            return state
    }
}

export default visitsReducer