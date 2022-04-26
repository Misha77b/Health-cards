export const CREATE_VISIT_REQUEST = 'CREATE_VISIT_REQUEST';
export const createVisitRequest = (data) => ({
    type: CREATE_VISIT_REQUEST,
    payload: data
});

export const SET_IS_LOADING = 'SET_IS_LOADING';
export const setIsLoading = (data) => ({
    type: SET_IS_LOADING,
    payload: 'data'
})

export const GET_VISITS_REQUEST = 'GET_VISITS_REQUEST';
export const getVisitsRequest = (data) => ({
    type: GET_VISITS_REQUEST,
    payload: data
});

export const GET_VISIT_REQUEST = 'GET_VISIT_REQUEST';
export const getVisitRequest = (data) => ({
    type: GET_VISIT_REQUEST,
    payload: data
});

export const SEARCH_FILTER = 'SEARCH_FILTER';
export const searchFilter = (data) => ({
    type: SEARCH_FILTER,
    payload: data
})

export const SEARCH_BY_DOCTOR_FILTER = 'SEARCH_BY_DOCTOR_FILTER';
export const searchByDoctorFilter = (data) => ({
    type: SEARCH_BY_DOCTOR_FILTER,
    payload: data
})

export const SEARCH_BY_URGENCY_FILTER = 'SEARCH_BY_URGENCY_FILTER';
export const searchByUrgencyFilter = (data) => ({
    type: SEARCH_BY_URGENCY_FILTER,
    payload: data
})

export const UPDATE_VISIT_REQUEST = 'UPDATE_VISIT_REQUEST';
export const updateVisitRequest = (data) => ({
    type: UPDATE_VISIT_REQUEST,
    payload: data
})

export const UPDATE_VISIT_SUCCESS = 'UPDATE_VISIT_SUCCESS';
export const updateVisitSuccess = (data) => ({
    type: UPDATE_VISIT_SUCCESS,
    payload: data,
})

export const DELETE_VISIT_REQUEST = 'DELETE_VISIT_REQUEST';
export const deleteVisitRequest = (data) => ({
    type: DELETE_VISIT_REQUEST,
    payload: data
})