import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCourseCategoriesRequest, setCourseCategoriesRequest } from '../../store/actions/action'

class CourseCategories extends Component {
    componentDidMount() {
        this.props.dispatch(getCourseCategoriesRequest())
    }
    handleClickCategories = id => {
        this.props.dispatch(setCourseCategoriesRequest(id))
    }
    render() {
        return (
            <ul class="nav nav-tabs nav_config" role="tablist">
                {this.props.listCategories.map((item, i) => {
                    return (
                        <li class="nav-item" key={i}>
                            <a class={this.props.chooseCategories == item.maDanhMuc
                                ? "nav-link active show"
                                : "nav-link "}
                                onClick={() => this.handleClickCategories(item.maDanhMuc)}
                                data-toggle="tab"
                                href={this.props.choosenCategory}>
                                {/* <img src='/img/data.svg' className="mr-2" style={{ width: 15, height: 15 }} /> */}
                                {item.tenDanhMuc}
                            </a>
                        </li>
                    )
                })}

                {/* <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#menu2">
                        <img src='/img/html.svg' className="mr-2" style={{ width: 15, height: 15 }} />
                    Androids
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#menu3">
                        <img src='/img/android.svg' className="mr-2" style={{ width: 15, height: 15 }} />
                    Frond-End
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#menu4">
                        <img src='/img/settings.svg' className="mr-2" style={{ width: 15, height: 15 }} />
                    Back-End
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#menu5">
                        <img src='/img/thinking.svg' className="mr-2" style={{ width: 15, height: 15 }} />
                    Back-End
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#menu6">
                        <img src='/img/html.svg' className="mr-2" style={{ width: 15, height: 15 }} />
                    Back-End
                    </a>
                </li> */}
            </ul>
        )
    }
}
const mapStateToProps = state => {
    return {
        listCategories: state.Courses.categories,
        chooseCategories: state.Courses.choosenCategory
    }
}
export default connect(mapStateToProps, null)(CourseCategories)