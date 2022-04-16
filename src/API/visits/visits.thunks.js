import { 
    createVisitRequest, 
    getVisitsRequest, 
    getVisitRequest, 
    deleteVisitRequest, 
    updateVisitSuccess, 
    setIsLoading 
} from "./visits.actions";
import { setError } from "../errorHandler/errorHandler.actions";

export const createVisit = (createVisitData) => {
    return (dispatch) => {
        fetch('https://ajax.test-danit.com/api/v2/cards', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(createVisitData),
        }).then(res => res.json())
        .then(createVisit => {
            dispatch(setIsLoading(true));
            dispatch(createVisitRequest(createVisit));
        }).catch(err => {
            dispatch(setIsLoading(false));
            dispatch(setError(err));
        })
    }
};

export const getVisits = () => {
    return (dispatch) => {
        fetch('https://ajax.test-danit.com/api/v2/cards', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => res.json())
        .then(visits => {
            dispatch(setIsLoading(true));
            dispatch(getVisitsRequest(visits));
        })
        .catch(err => {
            dispatch(setIsLoading(false));
            dispatch(setError(err));
        })
    }
};

export const getVisit = (id) => {
    return (dispatch) => {
        fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => res.json())
        .then(visit => {dispatch(getVisitRequest(visit.id))})
        .catch(err => {
            dispatch(setError(err))
        })
    }
};

export const updateVisit = (visit) => {
    return (dispatch) => {
        fetch(`https://ajax.test-danit.com/api/v2/cards/${visit.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(visit),
        }).then(res => res.json())
        .then(visit => {dispatch(updateVisitSuccess(visit))})
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
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(() => {
            dispatch(deleteVisitRequest(id))
        }).catch(err => {
            dispatch(setError(err))
        })
    }
};