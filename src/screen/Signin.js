import React, { Component } from 'react'
import { signupUserSchema } from '../services/validate'
import ModelSignIn from '../component/SignIn/ModelSignIn'
import ModelRes from '../component/Res/ModelRes'
import { Link } from 'react-router-dom'
export default class Signin extends Component {
    render() {
        console.log(this.props);
        return (
            <section className="container container__config">
                <div className="row">
                    <div className="col-md-5">
                        <div className="content-signin">
                            <h3>NỀN TẢNG GIÁO DỤC TRỰC TUYẾN LỚN NHẤT ĐÔNG NAM Á</h3>
                            <p>Đăng kí nhanh với</p>
                            <button className="btn btn--btn_blue"><span>f</span>Facebook</button>
                            <button className="btn btn--btn_red-1"><span>G</span>Gmail</button>
                            <p>Hoặc đăng kí ngay</p>
                            <ModelRes />
                            <Link to={'/login'} className='haveAccount' ><p>Bạn đã có tài khoản ?</p></Link>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="content_img" style={{ backgroundImage: 'url(./img/im-digital.png)' }}>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
