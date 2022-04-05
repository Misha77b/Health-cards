import { CREATE_VISIT_REQUEST, GET_VISITS_REQUEST, EDIT_VISIT_REQUEST, EDIT_VISIT_SUCCESS, DELETE_VISIT_REQUEST } from "./visits.actions";

const initState = {
    createVisitRequest: {},
    visits: [],
    editVisitRequest: null,
    // editVisitSuccess: null,
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

        case CREATE_VISIT_REQUEST: {
            return {
                ...state,
                createVisitRequest: action.payload,
                visits: [...state.visits, action.payload]
            }
        }


        case EDIT_VISIT_REQUEST: {
            return{
                ...state,
                editVisitRequest: action.payload
            }
        }

        // case EDIT_VISIT_SUCCESS: {
        //     return{
        //         ...state,
        //         editVisitSuccess: action.payload
        //     }
        // }

        case DELETE_VISIT_REQUEST: {
            return {
                ...state,
                deleteVisitRequest: action.payload,
            }
        }

        default:
            return state
    }
}

export default visitsReducer