import { authSuccess, authError } from "./auth.actions";
import { setError } from "../errorHandler/errorHandler.actions";

export const logIn = (userDate) => {
    return (dispatch) => {
        fetch("https://ajax.test-danit.com/api/v2/cards/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userDate)
        })

        .then(res => {
            if(res.status !== 200) {
                return 
            } else {
                return res.text()
            }
        })
        .then(token => {
          if(token === undefined) {
            //   Temporary error handler
            return alert('Log in error, wrong email or password')
          } else {
            console.log(token);
            localStorage.setItem('token', token)
            dispatch(authSuccess(token))
          }
        })
        .catch(err => {
            dispatch(setError(err))
        })
    }
}