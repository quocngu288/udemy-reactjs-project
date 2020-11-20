import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ModelSignIn from '../component/SignIn/ModelSignIn';
import ModelRes from '../component/Res/ModelRes'
import { connect } from 'react-redux'
import InputSearch from '../component/Search/InputSearch';
import PanelSearch from '../component/Search/PanelSearch';
import { LOGIN_FAIL } from '../constans/type';
import _ from 'lodash'
import { setCurrentUserEmpty } from '../store/actions/action'
import { notify } from '../services/notify';
class HeaderContainer extends Component {


    checkShowAccount = (userCurrent) => {
        let userStore = JSON.parse(localStorage.getItem('user'))
        if (_.isEmpty(userCurrent) && !userStore) {
            return (
                <li className="nav-item">
                    <div className="button">
                        <Link to={'/login'} className="btn btn--white mr-1" >Log In</Link>
                        <Link to={'/signin'} className="btn btn--red" >Sign Up</Link>
                    </div>
                </li>
            )
        } else {
            return (
                <li className="nav-item account">
                    <img src='img/kh8.jpg' />
                    <div className="wrapAccount">
                        <a> {userStore.hoTen}     <i class="fa fa-caret-down"></i>     </a>
                        <div className='content'>
                            <Link to={'/admin'} className='btnAdmin'>
                                Quản lý người dùng
                            </Link>
                            <a className='btnLogout' onClick={this.handleLogout}>
                                Đăng xuất
                            </a>

                        </div>
                    </div>

                </li>
            )
        }
    }

    handleLogout = async () => {
        await this.props.logoutSubmit({})
        localStorage.removeItem("user");
        notify('success', 'Đăng suất thành công')
        this.props.history.push('/login')
    }
    render() {
        let cartStorage = JSON.parse(localStorage.getItem('cart'))
        let { cartList } = this.props;

        let { userCurrent } = this.props
        console.log(this.props.history);
        return (
            <>
                <header className="container-fluid myNavBar p-0">
                    <nav className="navbar navbar-expand-sm navbar-light bg-light">
                        <div className="col-xl-6 col-lg-9 col-md-8">
                            <div className="row">
                                <Link className="navbar-brand" to="/">
                                    <img src="/img/logo-coral.svg" alt="không hiển thi ảnh" />
                                </Link>
                                {/* <div class="categories">
                    <i class="fa fa-th"></i>Categories
                </div> */}
                                <div className="input_search">
                                    {/* sử dụng input group */}
                                    <InputSearch />
                                    <PanelSearch />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-3 col-md-4">
                            <nav className="navbar navbar-expand-md navbar-light bg-light">
                                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div className="collapse navbar-collapse" id="collapsibleNavId">
                                    <ul className="navbar-nav">
                                        <li className="nav-item business">
                                            <a className="nav-link" href="#">Udemy for Business</a>
                                        </li>
                                        <li className="nav-item cart">
                                            <Link className="nav-link" to="/cart">
                                                <img src="./img/cart.svg" className="w-20" height={20} alt />

                                            </Link>
                                            <span className="badge_cart">{cartList.length}</span>
                                            <div className="header__items">
                                                <div className="header__item__content">
                                                    {cartList.map((item, i) => {
                                                        return (
                                                            <a key={i} className="heade__item" style={{ textDecoration: 'none' }}>
                                                                <div className=" header-img">
                                                                    <img className="img-fluid" src={item.hinhAnh} alt />
                                                                </div>
                                                                <div class="header-content ">
                                                                    <p class="name">{item.moTa.length > 60 ? item.moTa.substr(0, 60) + "..." : item.moTa}</p>
                                                                    <p class="info"> {item.nguoiTao.hoTen}</p>
                                                                    <p class="price">$19.99
                                                     <span class="price-old">$89.99</span>
                                                                    </p>
                                                                </div>
                                                            </a>
                                                        )
                                                    })}
                                                    {/* <a className="heade__item" style={{ textDecoration: 'none' }}>
                                                    <div className=" header-img">
                                                        <img className="img-fluid" src="/img/item9.jpg" alt />
                                                    </div>
                                                    <div className="header-content ">
                                                        <span>Advanced CSS and Sass:</span>
                                                        <span> By Chris Croft</span>
                                                        <span>$19.99  <span className="price-old">$89.99</span> </span>
                                                    </div>
                                                </a> */}
                                                </div>
                                                <div className="btn__goToWistlist">
                                                    <div className="btn__goToWistlist__button__price">Total :
                                            <span className="price__new p-2"> {cartList.length * 19.99} $</span>
                                                        {/* <span className="price__old"> $64.903</span> */}
                                                    </div>
                                                    <button className="btn__goToWistlist__button">Go to Cart</button>
                                                </div>
                                            </div>


                                            <a className="nav-link" href="#">
                                                <img src="./img/love.svg" className="w-20" height={20} alt />
                                            </a>
                                            <span className="badge_love">2</span>

                                            <a className="nav-link" href="#"><img src="./img/bell.svg" className="w-20" height={20} alt /></a>
                                            <span className="badge_bell">0</span>

                                        </li>
                                        {/* ............. */}
                                        {this.checkShowAccount(userCurrent)}
                                    </ul>
                                </div>
                            </nav></div>
                    </nav>
                </header>


            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        cartList: state.cartReducer,
        userCurrent: state.currentUSer.currentUser
    }
}
const mapDispatchToProps = dispatch => {
    return {
        logoutSubmit: (user) => {
            dispatch(setCurrentUserEmpty(user))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)