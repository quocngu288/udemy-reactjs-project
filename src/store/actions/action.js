import * as type from '../../constans/type'
import api from '../../services/api'
import { notify } from '../../services/notify'
import reduxAction from './reduxAction';


const localUser = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : {};

//lấy danh sách khóa học
export const getCourse = courseData => {
    return {
        type: type.GET_COURSES,
        payload: courseData
    }
}
export const getCourseRequest = () => {
    return dispatch => {
        api.get('QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01')
            .then(res => {
                dispatch(getCourse(res.data))
            })
            .catch(err => {
                console.log(err);

            })
    }
}
//lay chi tiet khoa hoc
export const getCourseDetail = (data) => {
    return {
        type: type.GET_COURSES_DETAIL,
        payload: data
    }
}
export const getCoursesDetailRequest = (id) => {
    return dispatch => {
        api.get(`http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`)
            .then(res => {
                dispatch(getCourseDetail(res.data))
            })
            .catch(err => {
                console.log(err);
            })
    }
}
//lấy danh mục khóa học
export const getCourseCategories = courseCategoriesData => {
    return {
        type: type.FETCH_CATEGORIES,
        payload: courseCategoriesData
    }
}
export const getCourseCategoriesRequest = () => {
    return dispatch => {
        api.get('QuanLyKhoaHoc/LayDanhMucKhoaHoc')
            .then(res => {
                dispatch(getCourseCategories(res.data))
            })
            .catch(err => {
                console.log(err);

            })
    }
}
//lấy khóa học theo danh mục
export const setCourseCategories = dataCourseCategories => {
    return {
        type: type.SET_COURSE_CATEGORIES,
        payload: dataCourseCategories
    }
}
export const setCourseCategoriesRequest = (id) => {
    return dispatch => {
        api.get(`QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${id}&MaNhom=GP01`)
            .then(res => {
                dispatch(setCourseCategories(res.data))
            }).catch(err => {
                console.log(err);

            })
    }
}

//lấy danh sách người dùng
export const getUsers = userData => {
    return {
        type: type.GET_USERS,
        payload: userData
    }
}
export const getUsersRequest = () => {
    return dispatch => {
        api.get('QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01')
            .then(res => {
                dispatch(getUsers(res.data))
            })
            .catch(err => {
                console.log(err);

            })
    }
}
//post 
//post signUp(đăng kí)
export const signinRequest = (user) => {
    return dispatch => (
        api.post('/QuanLyNguoiDung/DangKy', user)
            .then(res => {
                dispatch(reduxAction(type.SIGNIN_SUCCESS, res))
                notify('success', 'Đăng kí thành công !');
            })
            .catch(err => {
                notify('error', 'Đăng kí thất bại !')
            })
    )
}
//post signIn(đăng nhập)
export const loginRequest = (user) => {
    return dispatch => (api.post('QuanLyNguoiDung/DangNhap', user)
        .then(res => {
            // console.log(res);
            localStorage.setItem('user', JSON.stringify(res.data));
            localStorage.setItem('accessToken', JSON.stringify(res.data.accessToken));
            dispatch(reduxAction(type.LOGIN_SUCCESS, res))
            notify('success', 'Đăng nhập thành công')

        })
        .catch(err => {
            notify('error', 'Đăng nhập thất bại !')
        })
    )
}

//  logout
export const setCurrentUserEmpty = (user) => {
    return {
        type: type.SET__CURRENT__USER_EMPTY,
        payload: user
    }
}
export const addToCart = course => {
    return {
        type: type.ADD_TO_CART,
        payload: course
    }
}
export const deleteCart = (maKhoaHoc) => {
    return {
        type: type.DELETE_CART,
        payload: maKhoaHoc
    }
}
export const searchCourse = (search) => {
    return {
        type: type.SEARCH_COURSES,
        payload: search
    }
}