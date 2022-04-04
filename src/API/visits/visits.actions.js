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

export const EDIT_VISIT_REQUEST = 'EDIT_VISIT_REQUEST';
export const editVisitRequest = (data) => ({
    type: EDIT_VISIT_REQUEST,
    payload: data
})

// export const EDIT_VISIT_SUCCESS = 'EDIT_VISIT_SUCCESS';
// export const editVisitSuccess = (data) => ({
//     type: EDIT_VISIT_SUCCESS,
//     payload: data,
// })

export const DELETE_VISIT_REQUEST = 'DELETE_VISIT_REQUEST';
export const deleteVisitRequest = (data) => ({
    type: DELETE_VISIT_REQUEST,
    payload: data
})