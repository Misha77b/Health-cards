import { 
    CREATE_VISIT_REQUEST,
    SET_IS_LOADING, 
    GET_VISITS_REQUEST, 
    UPDATE_VISIT_REQUEST, 
    UPDATE_VISIT_SUCCESS, 
    DELETE_VISIT_REQUEST, 
    GET_VISIT_REQUEST,
    SEARCH_FILTER,
    SEARCH_BY_DOCTOR_FILTER,
    SEARCH_BY_URGENCY_FILTER
} from "./visits.actions";

const initState = {
    isLoading: false,
    createVisitRequest: {},
    editVisitId: null,
    updateVisitRequest: null,
    visits: [],
    deleteVisitRequest: null,
    searchValue: '',
    searchByDoctorValue: '',
    searchByUrgencyValue: ''
}

const visitsReducer = (state = initState, action) => {
    switch(action.type) {

        case SET_IS_LOADING: {
            return {
                ...state,
                isLoading: action.payload,
            }
        }

        case GET_VISITS_REQUEST: {
            return {
                ...state,
                visits: action.payload,
            }
        }

        case GET_VISIT_REQUEST: {
            return {
                ...state,
                editVisitId: action.payload
            }
        }

        case SEARCH_FILTER: {
            return {
                ...state,
                searchValue: action.payload,
            }
        }

        // SEARCH_BY_DOCTOR_FILTER dropdown
        case SEARCH_BY_DOCTOR_FILTER: {
            return {
                ...state,
                searchByDoctorValue: action.payload,
            }
        }

        // SEARCH_BY_URGENCY_FILTER dropdown
        case SEARCH_BY_URGENCY_FILTER: {
            return {
                ...state,
                searchByUrgencyValue: action.payload,
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