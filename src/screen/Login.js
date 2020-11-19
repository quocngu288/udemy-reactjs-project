import React, { Component } from 'react'
import ModelSignIn from '../component/SignIn/ModelSignIn'
import { Link } from 'react-router-dom'
export default class Login extends Component {
    render() {
        console.log(this.props);
        return (
            <section className="container container__config1">
                <div className="row">
                    <div className="col-md-5">
                        <div className="content-signin">
                            <h3>NỀN TẢNG GIÁO DỤC TRỰC TUYẾN LỚN NHẤT ĐÔNG NAM Á</h3>
                            <p>Đăng nhập nhanh với</p>

                            <button className="btn btn--btn_blue"><span>f</span>Facebook</button>
                            <button className="btn btn--btn_red-1"><span>G</span>Gmail</button>
                            <p>Hoặc đăng nhập ngay</p>
                            {/* SIGN IN */}
                            <ModelSignIn history={this.props.history} />
                            <Link to={'/signin'} className='haveAccount' ><p>Bạn chưa có tài khoản ?</p></Link>
                        </div>
                    </div>
                    {/* style="background-image: url(./img/im-digital.png);" */}
                    <div className="col-md-7">
                        <div className="content_img" style={{ backgroundImage: 'url(./img/im-digital.png)' }}>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
