import { SIGN_IN, SIGN_UP } from "../actions/auth.actions";

const initalState = {
    token: null,
    userId: null,
    userEmail: null,
    userName: null,
    userPic:null,
    isLoading: false,

}

const authReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'SIGN_UP_START':
            return {
                ...state,
                isLoading: true,
            }
        case 'SIGN_IN_START':
            return {
                ...state,
                isLoading: true,
            }
        case SIGN_UP:
            return {
                ...state,
                token: action.token,
                userId: action.userId,
                userEmail: action.userEmail,
                userName: action.userName,
                isLoading: false
            }
        case SIGN_IN:
            return {
                ...state,
                token: action.token,
                userId: action.userId,
                userEmail: action.userEmail,
                userName: action.userName,
                isLoading: false
            }
        default:
            return state;
    }
}

export default authReducer;