import React, { Component } from 'react'
import HeaderContainer from '../container/HeaderContainer'
import FooterContainer from '../container/FooterContainer'
import DetailCourse from '../component/DetailCourse/DetailCourse'
import DetailCart from '../component/DetailCourse/DetailCart'
import { getCoursesDetailRequest, searchCourse } from '../store/actions/action'
import { connect } from 'react-redux'
class CourseDetail extends Component {
    componentDidMount() {
        this.props.dispatch(getCoursesDetailRequest(this.props.math.params.id))
        this.props.dispatch(searchCourse(''))
    }
    render() {
        return (
            <>
                <HeaderContainer />
                <section className="container">
                    <div className="row">
                        <div className="col-8">
                            <DetailCourse />
                            <div className="content__item">
                                <div className="section__header">
                                    <div>SECTION 1: INTRODUCTION
                                                            <span>Preview</span>
                                    </div>
                                </div>
                                <div className="content__entry">
                                    <div className="gap" />
                                    <div className="lessons">
                                        <div className="lessons__header">
                                            <div>
                                                Lessons
                                                                            </div>
                                            <ul>
                                                <li>
                                                    <i className="fa fa-play-circle" aria-hidden="true" />
                                                                                     How to obtain your Certificate of Completion for this course
                                                                                     <span><i className="fa fa-clock" aria-hidden="true" />15:32</span>
                                                </li>
                                                <li><i className="fa fa-play-circle" aria-hidden="true" />
                                                                                     Working Files – Download These First
                                                                                     <span><i className="fa fa-clock" aria-hidden="true" /> 14:24</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="content__item">
                                <div className="section__header">
                                    <div>SECTION 2: WORKSPACE AND PREFERENCES
                                    <span>Preview</span>
                                    </div>
                                </div>
                                <div className="content__entry">
                                    <div className="gap" />
                                    <div className="lessons">
                                        <div className="lessons__header">
                                            <div>Lessons</div>
                                            <ul>
                                                <li>
                                                    <i className="fa fa-play-circle" aria-hidden="true" />
                                                 Get In Total Control Of The Control Panel<span>
                                                        <i className="fa fa-clock" aria-hidden="true" />15:32</span>
                                                </li>
                                                <li><i className="fa fa-play-circle" aria-hidden="true" />
                                                     The Magic Of Auto Recovery<span>
                                                        <i className="fa fa-clock" aria-hidden="true" /> 14:24</span>
                                                </li>
                                                <li>
                                                    <i className="fa fa-play-circle" aria-hidden="true" />
                                                              Customize The Workspace<span>
                                                        <i className="fa fa-clock" aria-hidden="true" /> 14:24</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="content__item">
                                <div className="section__header">
                                    <div>SECTION 3: LAYOUT<span>Preview</span>
                                    </div>
                                </div>
                                <div className="content__entry">
                                    <div className="gap" />
                                    <div className="lessons">
                                        <div className="lessons__header">
                                            <div>
                                                Lessons
                                                                                          </div>
                                            <ul>
                                                <li>
                                                    <i className="fa fa-play-circle" aria-hidden="true" />
                                                Outside-The-Box Thinking With Grids<span>
                                                        <i className="fa fa-clock" aria-hidden="true" />15:32</span>
                                                </li>
                                                <li>
                                                    <i className="fa fa-play-circle" aria-hidden="true" />
                                                        The Magic Of Auto Recovery<span>
                                                        <i className="fa fa-clock" aria-hidden="true" /> 14:24
                                                            </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <DetailCart />
                        </div>
                    </div>
                </section>
                <FooterContainer />
            </>
        )
    }
}
export default connect()(CourseDetail)