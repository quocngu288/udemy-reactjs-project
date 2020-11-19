import * as type from '../../constans/type'
let initialState = [];
const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.ADD_TO_CART: {
            let newState = [...state];
            newState.push(action.payload)
            localStorage.setItem('cart', JSON.stringify(newState))
            state = newState;
            return [...state];
        }
        case type.DELETE_CART: {
            let newState = [...state];
            let index = newState.findIndex(item => item.maKhoaHoc == action.maKhoaHoc)
            newState.splice(index, 1);
            state = newState;

            return [...state]
        }
        default: return state
    }
}
export default CartReducer