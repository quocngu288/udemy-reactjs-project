import React, { Component } from 'react'
import { connect } from 'react-redux'
class DetailCourse extends Component {
    render() {
        return (
            <div className="content_detaiItem">
                <h3>Lập trình Golang 2020</h3>
                <div className="content_mainInfo d-flex">
                    <div className="item__teacher">
                        <img src="../img/face5.jfif" alt="không hiển thị ảnh" />
                        <p className="first">Giảng Viên</p>
                        <p className="second">Cao Chi Hieu</p>
                    </div>
                    <div className="item__category">
                        <i className="fa fa-bookmark" aria-hidden="true" />
                        <p className="first">Danh Mục</p>
                        <p className="second">Lập trình Golang 2020</p>
                    </div><div className="item__rating">
                        <div className="ratingStart">
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star-half-o" aria-hidden="true" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        courseDetail: state.Courses.couseDetail || {
            //couserDetail lânf đầu load lên màn hình sẽ trống nên cần đưa thông tinh cần show ra màn hình vô đây
            maKhoaHoc: '',
            tenKhoaHoc: '',
            hinhAnh: '',
            luotXem: '',
            moTa: '',
            nguoiTao: {
                hoTen: '',
            }
        },
    }
}
export default connect(mapStateToProps, null)(DetailCourse)