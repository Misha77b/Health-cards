export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const authSuccess = (data) => {
    return {
        type: AUTH_SUCCESS,
        paylodad: data
    }
}

export const AUTH_ERROR = "AUTH_ERROR";
export const authError = (string) => {
    return {
        type: AUTH_ERROR,
        payload: string
    }
}