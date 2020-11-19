import * as type from '../../constans/type'
let initialState = '';

const SearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.SEARCH_COURSES: {

            // console.log(typeof (action.payload));
            return action.payload;
        }
        default: return state

    }
}
export default SearchReducer;