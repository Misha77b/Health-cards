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