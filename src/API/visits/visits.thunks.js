import { createVisitRequest, getVisitsRequest, updateVisitRequest, deleteVisitRequest } from "./visits.actions";
import { setError } from "../errorHandler/errorHandler.actions";
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
        }).catch(err => {
            dispatch(setError(err))
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
        .catch(err => {
            dispatch(setError(err))
        })
    }
};


// wordk with edt request Immediatley!!!!!!!!!!!
export const updateVisit = ({id, visit}) => {
    return (dispatch) => {
        // dispatch(updateVisitRequest(id))
        fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(visit),
        }).then(res => res.json())
        .then(visit => {dispatch(updateVisitRequest(visit))})
        .catch(err => {
            dispatch(setError(err))
        })
    }
};

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
        }).catch(err => {
            dispatch(setError(err))
        })
    }
};