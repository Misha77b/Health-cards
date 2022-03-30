import { createVisitRequest } from "./createVisit.actions";
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
}