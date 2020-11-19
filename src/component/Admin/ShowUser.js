import React, { Component } from 'react'

export default class ShowUser extends Component {
    render() {
        return (
            <table className="table table-striped table__courses">
                <thead>
                    <tr>
                        <th>
                            Name<i className="fas fa-sort-amount-up" aria-hidden="true" />
                        </th>
                        <th>
                            Created by
</th>
                        <th>
                            Published at
</th>
                        <th>
                            Displayed
</th>
                        <th>
                            Action
</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="name__wrapper d-flex">
                                <img src="http://elearning0706.cybersoft.edu.vn/hinhanh/angular.jpg" alt="avatar" />
                                <div className="course__name ml-3">
                                    <h6>Angular</h6>
                                    <span className="badge badge-info">development</span>
                                </div>
                            </div>
                        </td>
                        <td className="pt-4">
                            <h6>nguyenduc</h6>
                            <div className="badge badge-danger">
                                Giáo vụ
</div>
                        </td>
                        <td className="pt-4">09/04/2020</td>
                        <td className="pt-4">
                            <label className="switch">
                                <input type="checkbox" defaultChecked />
                                <span className="slider round" />
                            </label>
                        </td>
                        <td className="pt-4">
                            <button data-toggle="modal" data-target="#courseModal" className="btn btn-info mr-2">
                                <i className="far fa-edit" aria-hidden="true" />
                            </button>
                            <button className="btn btn-danger">
                                <i className="far fa-trash-alt" aria-hidden="true" />
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="name__wrapper d-flex">
                                <img src="http://elearning0706.cybersoft.edu.vn/hinhanh/vue-js.png" alt="avatar" />
                                <div className="course__name ml-3">
                                    <h6>Vue js</h6>
                                    <span className="badge badge-info">development</span>
                                </div>
                            </div>
                        </td>
                        <td className="pt-4">
                            <h6>nguyenduc</h6>
                            <div className="badge badge-danger">Giáo vụ</div>
                        </td>
                        <td className="pt-4">08/04/2020</td>
                        <td className="pt-4"><label className="switch">
                            <input type="checkbox" defaultChecked /><span className="slider round" />
                        </label>
                        </td>
                        <td className="pt-4">
                            <button data-toggle="modal" data-target="#courseModal" className="btn btn-info mr-2">
                                <i className="far fa-edit" aria-hidden="true" />
                            </button><button className="btn btn-danger">
                                <i className="far fa-trash-alt" aria-hidden="true" />
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="name__wrapper d-flex">
                                <img src="http://elearning0706.cybersoft.edu.vn/hinhanh/angular-9-new.jpeg" alt="avatar" />
                                <div className="course__name ml-3">
                                    <h6>Angular 9 New</h6>
                                    <span className="badge badge-info">development</span>
                                </div>
                            </div>
                        </td>
                        <td className="pt-4">
                            <h6>caochihieu</h6>
                            <div className="badge badge-danger">Giáo vụ</div>
                        </td>
                        <td className="pt-4">31/03/2020</td>
                        <td className="pt-4">
                            <label className="switch">
                                <input type="checkbox" defaultChecked />
                                <span className="slider round" />
                            </label>
                        </td>
                        <td className="pt-4">
                            <button data-toggle="modal" data-target="#courseModal" className="btn btn-info mr-2">
                                <i className="far fa-edit" aria-hidden="true" />
                            </button>
                            <button className="btn btn-danger">
                                <i className="far fa-trash-alt" aria-hidden="true" />
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="name__wrapper d-flex">
                                <img src="http://elearning0706.cybersoft.edu.vn/hinhanh/lap-trinh-golang-2020.png" alt="avatar" />
                                <div className="course__name ml-3">
                                    <h6>Lập trình Golang 2020</h6>
                                    <span className="badge badge-info">
                                        development
  </span>
                                </div>
                            </div>
                        </td>
                        <td className="pt-4">
                            <h6>caochihieu</h6>
                            <div className="badge badge-danger">
                                Giáo vụ
</div>
                        </td>
                        <td className="pt-4">31/03/2020</td>
                        <td className="pt-4">
                            <label className="switch">
                                <input type="checkbox" defaultChecked />
                                <span className="slider round" />
                            </label>
                        </td>
                        <td className="pt-4">
                            <button data-toggle="modal" data-target="#courseModal" className="btn btn-info mr-2">
                                <i className="far fa-edit" aria-hidden="true" />
                            </button>
                            <button className="btn btn-danger">
                                <i className="far fa-trash-alt" aria-hidden="true" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}
