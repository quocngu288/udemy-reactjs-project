import React, { Component } from 'react'
import reduxAction from '../../store/actions/reduxAction'
import { ADD_TO_CART } from '../../constans/type'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
class CourseItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            changeStateAddCart: false
        }
    }

    changeCart = (item) => {
        this.props.addToCart(item);
        this.setState({
            changeStateAddCart: true
        })

    }

    render() {
        let { item } = this.props
        return (
            <div className="product__item">
                <Link to={`courses/${item.maKhoaHoc}`}>
                    <div className="item__img"><img src={item.hinhAnh} alt="item" />
                        <div className="img__overlay" />
                    </div>
                    <div className="item__info">
                        <h6>{item.tenKhoaHoc}</h6>
                        <div className="rating"><i className="fas fa-star" aria-hidden="true" /><i className="fas fa-star" aria-hidden="true" /><i className="fas fa-star" aria-hidden="true" /><i className="fas fa-star-half-alt" aria-hidden="true" /><i className="far fa-star" aria-hidden="true" /><span className="score">3.5 <span className="reviews">(176,466)</span></span></div>
                        <div className="price"><span className="old__price">$199.99</span><span className="price">$19.99 <i className="fas fa-tag" aria-hidden="true" /></span></div>
                    </div>
                </Link>
                <div className="sub__info">
                    <div className="info__content">
                        <div className="teacher"><img src="./img/teacher.jpg" alt="teacher" />
                            <h6>{item.nguoiTao.taiKhoan}</h6>
                        </div>
                        <h5>{item.tenKhoaHoc} &amp;{item.ngayTao}</h5>
                        <p>{item.moTa.length > 60 ? item.moTa.substr(0, 60) + "..." : item.moTa}</p>
                        <div className="meta">
                            <div><i className="fas fa-signal" aria-hidden="true" /> Advanced</div>
                            <div><i className="fas fa-list-ul" aria-hidden="true" /> 6 Lectures</div>
                            <div><i className="far fa-clock" aria-hidden="true" /> 6 Hours</div>
                        </div>
                        {this.state.changeStateAddCart ? <Link to={'/cart'} className="add__cart btn" style={{ backgroundColor: '#000' }} >GO TO CART</Link>
                            : <button className="add__cart" onClick={() => this.changeCart(item)}>ADD TO CART</button>}
                        <div className="wishlist">
                            <div className="add__list">
                                <div className="heart"><i className="lnr lnr-heart" /></div><span>Add to
      Wishlist</span>
                            </div><span className="price">$19.99</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addToCart: item => {
            dispatch(reduxAction(ADD_TO_CART, item))
        }
    }
}
export default connect(null, mapDispatchToProps)(CourseItem)