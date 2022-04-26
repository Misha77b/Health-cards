export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const authSuccess = (data) => {
    return {
        type: AUTH_SUCCESS,
        paylodad: data
    }
}