import { SIGN_UP_URL } from "../../constants/DataBase";
export const SIGN_UP = "SIGN_UP";
export const SIGN_UP_FAIL = "SIGN_UP_FAIL";

export const signUp = (email, password) => {
  return async dispatch => {
    try {
      dispatch({
        type: 'SIGN_UP_START'
      })
      const response = await fetch(SIGN_UP_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true
        }),
      });
      const data = await response.json();

      if (!response.ok) {
        const errorResData = await response.json();
        const errorId = errorResData.error.message;
        let message = 'No se pudo registrar!';

        if (errorId === 'EMAIL_EXISTS') {
          message = 'Este email ya existe!';
        }
        throw new Error(message);
      }

      dispatch({
        type: SIGN_UP,
        token: data.idToken,
        userId: data.localId
      })
    } catch (error) {
      dispatch({
        type: "SIGN_UP_FAIL"
      })
      alert(error);
    }
  }
}