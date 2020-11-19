import * as Yub from 'yup'
export const signupUserSchema = Yub.object().shape({
    taiKhoan: Yub.string().required('vui lòng nhập tài khoản'),
    matKhau: Yub.string().required('vui lòng nhập mật khẩu'),
    hoTen: Yub.string().required('vui lòng nhập họ tên'),
    email: Yub.string().required('vui lòng nhập email'),
    soDT: Yub.string().required('vui lòng nhập số điện thoại')
})
export const loginUserSchema = Yub.object().shape({
    taiKhoan: Yub.string().required('vui long nhập tài khoản'),
    matKhau: Yub.string().required('vui lòng nhập mật khẩu')
})