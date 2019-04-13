import * as authService from '../service/auth';
import { INVALID_USER, LOGIN_SUCCESSFULL, LOGOUT } from '../reducer/auth';

export const loginUser = (credentials) => {
    return (dispatch) => {
        authService.login(credentials)
            .then((response) => {
                if (response.status === 200) {
                    localStorage.setItem("token", response.data.token);
                    dispatch({
                        type: LOGIN_SUCCESSFULL,
                        data: { token: response.data.token, role: "admin" }
                    });
                }
            })
            .catch((error) => {
                if (error.response) {
                    dispatch({ type: INVALID_USER, data: { error_msg: error.response.data.error } });
                }
            })
    }
};

export const logoutUser = () => {
    return (dispatch) => {
        dispatch({
            type: LOGOUT,
        });
    }
};