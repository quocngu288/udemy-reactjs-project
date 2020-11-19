import React, { Component } from 'react'
import HeaderAdmin from '../container/HeaderAdmin'
import MenuAdmin from '../component/Admin/MenuAdmin'
import ModelAdd from '../component/Admin/ModelAddEdit'
import ShowUser from '../component/Admin/ShowUser'

export default class Admin extends Component {
    render() {
        return (
            <div className="container-fluid admin__panel px-0">
                <HeaderAdmin />
                <div className="row admin__content px-0">
                    <div className=" col-sm-2 col-md-2 col-lg-2 col-xl-2 px-0">
                        <MenuAdmin />
                    </div>
                    <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10 admin__dashboard pl-4">
                        <div className="title">
                            <i className="fas fa-user-shield" aria-hidden="true" />
        My Dashboard</div>
                        <div className="row post__title">
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 add__search">
                                <button className="add__course" data-toggle="modal" data-target="#courseModal">
                                    <i className="fas fa-plus" aria-hidden="true">
                                    </i> ADD COURSE
          </button>
                                <input name="search" type="text" placeholder="Search Course" />
                            </div>
                        </div>
                        {/* Modal ADD,EDIT Course */}
                        <ModelAdd />
                        <ShowUser />
                    </div>
                </div>
            </div>



        )
    }
}

