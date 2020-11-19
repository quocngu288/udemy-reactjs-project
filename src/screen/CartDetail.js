import React, { Component } from 'react'
import HeaderContainer from '../container/HeaderContainer'
import FooterContainer from '../container/FooterContainer'
import { connect } from 'react-redux'
import { deleteCart } from '../store/actions/action';
class CartDetail extends Component {
    render() {
        const { cartList } = this.props;
        console.log(cartList);
        return (
            <>
                <HeaderContainer />
                <div className="cart_page">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9 pl-0">
                                <table className="cart__table text-center table mt-4">
                                    <thead>
                                        <tr>
                                            <th colSpan={2}>Khóa Học</th>
                                            <th>Giá</th>

                                        </tr>
                                    </thead>
                                    <tbody className="cart__body">
                                        {cartList.map((item, i) => {
                                            return (
                                                <tr className="cart__item" key={i}>
                                                    <td className="cart__thumbnail">
                                                        <div><img src={item.hinhAnh} alt="cart" /></div>
                                                    </td>
                                                    <td className="cart__name pl-5">
                                                        <div>{item.tenKhoaHoc} &amp; Data Analytics</div>
                                                        <div>{item.moTa.length > 120 ? item.moTa.substr(0, 120) + '...' : item.moTa}</div>
                                                    </td>
                                                    <td className="cart__price">
                                                        <div className="amount">$19.90 <i className="fas fa-tag" aria-hidden="true" /></div>
                                                    </td>
                                                    <td className="cart__remove">
                                                        <div className="btn__remove" onClick={() => this.props.onDeleteCart(item.maKhoahoc)}>
                                                            <a href="#1" className="remove"><i className="fas fa-times" aria-hidden="true" /></a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })}


                                    </tbody>
                                </table>
                            </div>
                            <div className="col-md-3 px-0">
                                <div className="cart__total">
                                    <table className="table">
                                        <tbody className="table__total">
                                            <tr><td colSpan={2}>
                                                <span className="total__header">TỔNG GIỎ HÀNG</span>
                                            </td>
                                            </tr>
                                            <tr>
                                                <td>CHI TIẾT</td>
                                                <td className="amount">$ 19,99</td>
                                            </tr>
                                            <tr>
                                                <td style={{ fontWeight: 'bold' }}>TỔNG CỘNG</td>
                                                <td className="amount" style={{ fontSize: '1.4rem' }}>${cartList.length * 19.99}</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <a href="/checkout">
                                                        <button className="add">THANH TOÁN</button>
                                                    </a>
                                                    <a href="/courses">
                                                        <button className="continue">TIẾP TỤC MUA SẮM</button>
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterContainer />
            </>
        )
    } cartList
}
const mapStateToProps = state => {
    return {
        cartList: state.cartReducer,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDeleteCart: (index) => {
            dispatch(deleteCart(index))
        }
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(CartDetail)