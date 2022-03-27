import { authError, authSuccess } from "./auth.actions";

export const logIn = (userDate) => {
    return (dispatch) => {
        fetch("https://ajax.test-danit.com/api/v2/cards/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userDate)
        })
        // .then(
        //     response => {
        //       if (response.status !== 200) {
        //         dispatch(authError(response.text()));
        //         return Promise.reject();
        //       } else {
        //         return response.text();
        //       }
        //     },
        //     error => {
        //       dispatch(authError(error.text()));
        //       return Promise.reject();
        //     }
        //   )
        //   .then(data => {
        //     dispatch(authSuccess(json));
        //   });
                
        .then(res => res.text())
        .then(token => {
          console.log(token);
          localStorage.setItem('token', token)
          dispatch(authSuccess(token))
        })
    }
}