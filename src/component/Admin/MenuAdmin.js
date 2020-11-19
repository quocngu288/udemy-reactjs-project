import React, { Component } from 'react'

export default class MenuAdmin extends Component {
    render() {
        return (
            <div className="admin__manager">
                <div className="title">
                    <i className="fas fa-tools" aria-hidden="true" />
Management
</div>
                <ul className="px-0">
                    <li>
                        <i className="fas fa-chart-line" aria-hidden="true" />
Dashboard
</li>
                    <li className="active">
                        <i className="fas fa-graduation-cap" aria-hidden="true" />
Courses
</li>
                    <li>
                        <i className="fas fa-user-tag" aria-hidden="true" />
Users
<span className="badge badge-danger">20</span>
                    </li>
                    <li>
                        <i className="fas fa-pencil-ruler" aria-hidden="true" />
Messages
<span className="badge badge-danger">6</span>
                    </li>
                    <li>
                        <i className="fas fa-gavel" aria-hidden="true" />
Rules
</li>
                    <li>
                        <i className="fas fa-toolbox" aria-hidden="true" />
Utilities
</li>
                </ul>
            </div>
        )
    }
}
