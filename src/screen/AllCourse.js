import React, { Component } from 'react'
import { connect } from 'react-redux'
import HeaderContainer from '../container/HeaderContainer'
import FooterContainer from '../container/FooterContainer'
import AllCourseItem from '../component/Course/AllCourseItem'
import { getCourseRequest } from '../store/actions/action'

class AllCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueCourse: ''
        }
    }

    componentDidMount() {
        this.props.dispatch(getCourseRequest())
    }
    handleChange = (e) => {
        this.setState({
            valueCourse: e.target.value
        }, () => {
            console.log(this.state.valueCourse)
        })
    }
    render() {
        let { allCourse } = this.props;

        return (
            <>
                {/* HEADEr */}
                <HeaderContainer />

                <section className="container content">
                    <div className="row mb-5">
                        <div className="col-6">
                            <h3>Danh sách khóa học: </h3>
                        </div>
                        <div className="col-6">
                            <div className="input">
                                <form>
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Tìm Kiếm Khóa Học" />
                                        <div className="search__result">
                                            <div className="search__form">
                                            </div>
                                        </div>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="fa fa-search" aria-hidden="true" />
                                            </span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-6">
                            <form>
                                <div className="form-group">
                                    <select className="form-control" name={this.state.valueCourse} onChange={this.handleChange}>
                                        <option value={-1}>
                                            VUI LÒNG CHỌN KHÓA HỌC
            </option>
                                        <option value="BackEnd" >Lập trình Backend</option>
                                        <option value="Design" >Thiết kế Web</option>
                                        <option value="DiDong" >Lập trình di động</option>
                                        <option value="FrontEnd" >Lập trình Front end</option>
                                        <option value="FullStack" >Lập trình Full Stack</option>
                                        <option value="TuDuy" >Tư duy lập trình</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div className='col-6'></div>
                    </div>
                    <div className="product__items d-flex">
                        {this.props.allCourse.map((item, i) => {
                            return <AllCourseItem item={item} key={i} />
                        })}



                    </div>
                </section>
                <FooterContainer />
            </>
        )
    }
}
const mapStateToProps = state => {
    return {
        allCourse: state.Courses.courses
    }
}
export default connect(mapStateToProps, null)(AllCourse)