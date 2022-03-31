import { setChooseDoctor } from "./chooseDoctor.actions";
import api_chooseDoctorParser from "./api_chooseDoctorParser";

export const getChooseDoctor = () => {
    return (dispatch) => {
        fetch('./chooseDoctor.json')
        .then(res => res.json())
        .then(data => {dispatch(setChooseDoctor(api_chooseDoctorParser(data)))})
    }
}