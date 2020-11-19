import React, { Component } from 'react'
import CourseItem from './CourseItem'
import { connect } from 'react-redux'
import { getCourseRequest, setCourseCategoriesRequest } from '../../store/actions/action'
class CourseShow extends Component {
    componentDidMount() {
        this.props.dispatch(setCourseCategoriesRequest("BackEnd"))

    }
    render() {
        return (
            // <>
            <div className="tab-pane active" id={this.props.setCourseCategories.maDanhMucKhoaHoc}>
                <div className="product__items d-flex">
                    {/* justify-content-between */}
                    {/* //courseItem */}
                    {this.props.setCourseCategories.map((item, i) => {
                        return <CourseItem item={item} key={i} />
                    })}


                </div>
            </div>

            // </>
        )
    }
}
const mapStateToProps = state => {
    return {
        setCourseCategories: state.Courses.courseCategories
    }
}
export default connect(mapStateToProps, null)(CourseShow)