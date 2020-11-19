import React, { Component } from 'react'

export default class HeaderAdmin extends Component {
    render() {
        return (
            <div>
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0">
                    <div className="admin__header">
                        <nav className="navbar navbar-expand-md bg-dark px-4">
                            <a className="navbar-brand" href="#1">
                                <i className="fas fa-cogs" aria-hidden="true" />
    Admin Panel
  </a>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">
                                        <i className="fas fa-home" aria-hidden="true" />
        Home
      </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#1">
                                        <i className="fas fa-power-off" aria-hidden="true" />
        SignOut
      </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}
