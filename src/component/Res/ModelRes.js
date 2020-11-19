import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { signupUserSchema } from '../../services/validate'
import { connect } from 'react-redux'
import { signinRequest } from '../../store/actions/action'
class ModelRes extends Component {
    render() {
        return (
            <Formik
                initialValues={{ //tương tự như state
                    taiKhoan: "",
                    matKhau: "",
                    hoTen: "",
                    email: "",
                    soDT: "",
                    maNhom: "GP01",
                    maLoaiNguoiDung: "HV",
                }}
                validationSchema={signupUserSchema}
                onSubmit={async data => {
                    try {
                        await this.props.signinSubmit(data)
                        this.props.history.push('/login')
                    } catch (error) {
                        console.log(error);
                    }
                }}
                render={formikProps => (
                    <Form action className="content-signin__form" onSubmit={formikProps.handleSubmit}>
                        <div className="form-group">
                            <Field type="text" className="form-control"
                                name="taiKhoan"
                                onChange={formikProps.handleChange}
                                placeholder="Tài Khoản" />
                            <ErrorMessage name="taiKhoan">{(msg) => <div className="alert alert-danger">{msg}</div>}</ErrorMessage>
                        </div>
                        <div className="form-group">
                            <Field type="text" className="form-control"
                                name="matKhau"
                                onChange={formikProps.handleChange}
                                placeholder="Mật Khẩu" />
                            <ErrorMessage name="matKhau">{(msg) => <div className="alert alert-danger">{msg}</div>}</ErrorMessage>
                        </div>
                        <div className="form-group">
                            <Field type="text" className="form-control"
                                name="hoTen"
                                onChange={formikProps.handleChange}
                                placeholder="Họ Tên" />
                            <ErrorMessage name="hoTen">{(msg) => <div className="alert alert-danger">{msg}</div>}</ErrorMessage>
                        </div>
                        <div className="form-group">
                            <Field type="text" className="form-control"
                                name="email"
                                onChange={formikProps.handleChange}
                                placeholder="Email" />
                            <ErrorMessage name="email">{(msg) => <div className="alert alert-danger">{msg}</div>}</ErrorMessage>
                        </div>
                        <div className="form-group">
                            <Field type="text" className="form-control"
                                name="soDT"
                                onChange={formikProps.handleChange}
                                placeholder="Số Điện Thoại" />
                            <ErrorMessage name="soDT">{(msg) => <div className="alert alert-danger">{msg}</div>}</ErrorMessage>
                        </div>
                        <button className="btn btn--red w-100">Đăng ký</button>
                    </Form>
                )}
            >
            </Formik>
        )
    }
}
const mapStateToProps = state => {
    return {
        userSignin: state.currentUSer.user
    }
}
const mapDispatchToProps = dispatch => {
    return {
        signinSubmit: user => {
            dispatch(signinRequest(user))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModelRes)