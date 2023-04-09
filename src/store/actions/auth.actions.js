import { SIGN_UP_URL, SIGN_IN_URL } from "../../constants/DataBase";
export const SIGN_UP = "SIGN_UP";
export const SIGN_UP_FAIL = "SIGN_UP_FAIL";
export const SIGN_IN = "SIGN_IN";
export const SIGN_IN_FAIL = "SIGN_IN_FAIL";

export const signUp = (email, password, displayName) => {
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
          displayName,
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
        userId: data.localId,
        userEmail: data.email,
        userName: data.displayName
      })
    } catch (error) {
      dispatch({
        type: "SIGN_UP_FAIL"
      })
      alert(error);
    }
  }
}

export const signIn = (email, password) => {
  return async dispatch => {
    try {
      dispatch({
        type: 'SIGN_IN_START'
      })
      const response = await fetch(SIGN_IN_URL, {
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
        let message = 'Usuario o contraseña incorrecta!';

        if (errorId === 'USER_DISABLED') {
          message = 'Su usuario a sido suspendido';
        }
        throw new Error(message);
      }

      dispatch({
        type: SIGN_IN,
        token: data.idToken,
        userId: data.localId,
        userEmail: data.email,
        userName: data.displayName
      })
    } catch (error) {
      dispatch({
        type: "SIGN_IN_FAIL"
      })
      alert(error);
    }
  }
}


export const signOut = (email, password) => {
  return async dispatch => {
    try {

      dispatch({
        type: SIGN_IN,
        token: null,
        userId: null,
        userEmail: null,
        userName: null
      })
    } catch (error) {
      dispatch({
        type: "SIGN_IN_FAIL"
      })
      alert(error);
    }
  }
}