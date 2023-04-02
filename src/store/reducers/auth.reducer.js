import { SIGN_UP} from "../actions/auth.actions";

const initalState = {
    token: null,
    userId: null,
    isLoading: false,

}

const authReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'SIGN_UP_START':
            return{
                ...state,
                isLoading:true,
            }
        case SIGN_UP:
            return {
                ...state,
                token: action.token,
                userId: action.userId,
                isLoading:false
            }
        default:
            return state;
    }
}

export default authReducer;