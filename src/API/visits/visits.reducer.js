import { CREATE_VISIT_REQUEST, 
    GET_VISITS_REQUEST, 
    UPDATE_VISIT_REQUEST, 
    UPDATE_VISIT_SUCCESS, 
    DELETE_VISIT_REQUEST, 
    GET_VISIT_REQUEST
} from "./visits.actions";

const initState = {
    // isFetching: false,
    createVisitRequest: {},
    editVisitId: null,
    updateVisitRequest: null,
    visits: [],
    deleteVisitRequest: null,
}

const visitsReducer = (state = initState, action) => {
    switch(action.type) {

        case GET_VISITS_REQUEST: {
            return {
                ...state,
                visits: action.payload,
            }
        }

        case GET_VISIT_REQUEST: {
            console.log(action.payload);
            return {
                ...state,
                editVisitId: action.payload
            }
        }

        case CREATE_VISIT_REQUEST: {
            return {
                ...state,
                createVisitRequest: action.payload,
                visits: [...state.visits, action.payload]
            }
        }

        case UPDATE_VISIT_REQUEST: {
            return{
                ...state,
                editVisitId: action.payload
            }
        }

        case UPDATE_VISIT_SUCCESS: {
            const updatedVisit = state.visits.map((visit) => {
                if(visit.id === action.payload.id) {
                    return updatedVisit;
                }
                return visit
            })
            return {
                ...state, 
                visits: updatedVisit,
                editVisitId: null
            }
        }

        case DELETE_VISIT_REQUEST: {
            return {
                ...state,
                deleteVisitRequest: action.payload,
                visits: state.visits.filter((visit) => +visit.id !== +action.payload)
            }
        }

        default:
            return state
    }
}

export default visitsReducer