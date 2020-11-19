import * as type from '../../constans/type'
let initialState = {
    categories: [],
    choosenCategory: "BackEnd",//lưu giá trị là mã danh mục
    courseCategories: [],
    courses: [],
    couseDetail: null,
}

const Courses = (state = initialState, action) => {
    switch (action.type) {
        case type.GET_COURSES: {
            state.courses = action.payload
            return { ...state };
        }
        case type.GET_COURSES_DETAIL: {
            state.couseDetail = action.payload
            return { ...state }
        }
        case type.FETCH_CATEGORIES: {
            state.categories = action.payload
            return { ...state };
        }
        case type.SET_COURSE_CATEGORIES: {
            state.courseCategories = action.payload
            return { ...state };
        }
        default: return state; //vào cái gì ra cái đó,ko thay đổi, k chỉnh sửa
    }

};
export default Courses