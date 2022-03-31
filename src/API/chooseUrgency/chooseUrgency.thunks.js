import { setChooseUrgency } from "./chooseUrgency.actions";
import api_chooseUrgencyParser from "./api_chooseUrgencyParser";

export const getChooseUrgency = () => {
    return (dispatch) => {
        fetch('./urgency.json')
        .then(res => res.json())
        .then(data => {dispatch(setChooseUrgency(api_chooseUrgencyParser(data)))})
    }
}