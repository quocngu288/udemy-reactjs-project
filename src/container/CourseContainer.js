import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CourseCategories from '../component/Course/CourseCategories'
import CourseShow from '../component/Course/CourseShow'
export default class CourseContainer extends Component {
  render() {
    return (
      <section className="myCourse">
        <div className="col offer-title text-left">
          <h3>TẤT CẢ CÁC KHÓA HỌC</h3>
          <div className="welcome-title__line" />
        </div>
        <div className="cource_Content">
          <div className="row">
            <div className="col-md-4">
              {/* //course categories */}
              <CourseCategories />
              <div className="course_intro">
                <h2>The world's largest selection of courses</h2>
                <p>Choisissez parmi plus de 100 000 vidéos de cours en ligne. De nouveaux cours sont ajoutés
                tous
                les mois</p>
              </div>
            </div>
            <div className="col-md-8 tab-content">
              {/* //course show */}
              <CourseShow />

            </div>
          </div>
        </div>
      </section>

    )
  }
}
