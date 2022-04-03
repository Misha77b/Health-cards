import { createVisitRequest, getVisitsRequest, editVisitRequest, deleteVisitRequest } from "./visits.actions";
const token = localStorage.getItem('token');

export const createVisit = (createVisitData) => {
    return (dispatch) => {
        fetch('https://ajax.test-danit.com/api/v2/cards', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(createVisitData),
        }).then(res => res.json())
        .then(createVisit => {
            dispatch(createVisitRequest(createVisit));
        })
    }
};

export const getVisits = () => {
    return (dispatch) => {
        fetch('https://ajax.test-danit.com/api/v2/cards', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }).then(res => res.json())
        .then(visits => {dispatch(getVisitsRequest(visits))})
    }
};


// wordk with edt request
export const editVisit = (id) => {
    return (dispatch) => {
        fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(body),
        }).then(res => res.json())
        .then(visit => dispatch(editVisitRequest(visit)))
    }
}

export const deleteVisit = (id) => {
    return (dispatch) => {
        fetch (`https://ajax.test-danit.com/api/v2/cards/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }).then(() => {
            dispatch(deleteVisitRequest(id))
        })
    }
}