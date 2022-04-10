export const CREATE_VISIT_REQUEST = 'CREATE_VISIT_REQUEST';
export const createVisitRequest = (data) => ({
    type: CREATE_VISIT_REQUEST,
    payload: data
});

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