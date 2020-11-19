import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCourseRequest } from '../../store/actions/action';
import { Link } from 'react-router-dom'
class PanelSearch extends Component {
    componentDidMount() {
        this.props.dispatch(getCourseRequest())
    }
    render() {
        console.log(this.props.allCourse);
        console.log(this.props.keyword);
        let { allCourse, keyword } = this.props;
        allCourse = allCourse.filter((course) => {
            return course.tenKhoaHoc.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
        })
        let elementCourse = allCourse.map((item, i) => {
            return (
                <Link to={`courses/${item.maKhoaHoc}`} className='row panel_search-item' style={{ visibility: keyword ? 'visible' : 'hidden' }} key={i}>
                    <div className="col-4">
                        <img className='panel_search-img' src={item.hinhAnh} />
                    </div>
                    <div className="col-8">
                        <h2>{item.tenKhoaHoc}</h2>
                        <p>{item.moTa}</p>
                    </div>
                </Link>
            )
        })
        return (

            <div className="panel_search" >
                {elementCourse}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        allCourse: state.Courses.courses,
        keyword: state.SearchReducer
    }
}
export default connect(mapStateToProps, null)(PanelSearch) 