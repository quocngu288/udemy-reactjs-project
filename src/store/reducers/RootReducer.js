import { combineReducers } from 'redux'
import Courses from './CourseReducer'
import currentUSer from './currentUser'
import cartReducer from './CartReducer'
import SearchReducer from './SearchReducer'
export const RootReducer = combineReducers({
    //noi chua tung store nghiep vu
    Courses,
    currentUSer,
    cartReducer,
    SearchReducer
    // User
});