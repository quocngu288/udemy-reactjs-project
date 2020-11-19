import * as type from '../../constans/type'
let initialState = {
    currentUser: {},
    user: {}
};

const currentUser = (state = initialState, action) => {
    switch (action.type) {
        case type.LOGIN_SUCCESS: {
            state.currentUser = action.payload;
            return { ...state };
        }
        case type.SIGNIN_SUCCESS: {
            state.user = action.payload;
            return { ...state };
        }
        case type.SET__CURRENT__USER_EMPTY: {
            state.currentUser = action.payload;
            return { ...state };
        }
        default: return state

    }
}
export default currentUser;




