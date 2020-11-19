import React, { Component } from 'react'

export default class DetailCart extends Component {
    render() {
        return (
            <div className="sidebar__info">
                <div className="info__img">
                    <img src="http://elearning0706.cybersoft.edu.vn/hinhanh/lap-trinh-golang-2020.png" alt="item" />
                </div>
                <div className="info__inner">
                    <div className="wishlist">
                        <p className="text-center text-uppercase font-weight-bold">
                            Lập trình Golang 2020</p>
                        <span className="price">$19.99</span>
                    </div>
                    <button className="add__cart btn btn--red">
                        THÊM GIỎ HÀNG
                                                                    </button>
                    <ul className="meta">
                        <li>
                            <div>Enrolled: <span> 3 students</span>
                            </div>
                        </li>
                        <li>
                            <div>Duration: <span> 6 hours</span>
                            </div>
                        </li>
                        <li>
                            <div>Lectures:
                                                                                         <span> 6</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                Video: <span> 3 hours</span>
                            </div>
                        </li>
                        <li>
                            <div>Level: <span>
                                3 Beginner</span>
                            </div>
                            <i className="lnr lnr-sort-amount-asc" />
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
