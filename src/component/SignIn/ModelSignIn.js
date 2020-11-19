import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { loginUserSchema } from '../../services/validate'
import { connect } from 'react-redux'
import { loginRequest } from '../../store/actions/action'
import { notify } from '../../services/notify'
import { Redirect } from 'react-router-dom'
class ModelSignIn extends Component {
    myFunction(data) {
        this.props.loginSubmit(data)
        this.props.history.push('/')
    }
    render() {
        console.log('usserSign', this.props.userSignin);
        let userStore = JSON.parse(localStorage.getItem('user'))

        return (
            <Formik
                initialValues={{
                    taiKhoan: "",
                    matKhau: "",
                }}
                validationSchema={loginUserSchema}
                onSubmit={data => {

                    this.myFunction(data)
                    // if (this.props.userSignin.maLoaiNguoiDung === 'HV') {
                    //     this.props.history.push('/courses')
                    // }
                    // else if (this.props.userSignin.maLoaiNguoiDung === 'GV') {
                    //     this.props.history.push('/admin')
                    // }
                }}
                render={formikProps => (
                    < Form action className="content-signin__form" onSubmit={formikProps.handleSubmit} >
                        <div className="form-group">
                            <Field type="text" className="form-control"
                                placeholder="Tài Khoản"
                                name="taiKhoan"
                                onChange={formikProps.handleChange}
                            />
                            <ErrorMessage name="taiKhoan">{msg => <div className='alert alert-danger '>{msg}</div>}</ErrorMessage>
                        </div>
                        <div className="form-group">
                            <Field type="text" className="form-control"
                                placeholder="Mật Khẩu"
                                name="matKhau"
                                onChange={formikProps.handleChange} />
                            <ErrorMessage name="matKhau">{msg => <div className='alert alert-danger '>{msg}</div>}</ErrorMessage>
                        </div>
                        <button className="btn btn--red w-100">Đăng Nhập</button>
                    </Form >
                )}
            />
        )
    }
}
const mapStateToProps = state => {
    return {
        userSignin: state.currentUSer.currentUser
    }
}
const mapDispatchToProps = dispatch => {
    return {
        loginSubmit: user => {
            dispatch(loginRequest(user))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModelSignIn)
