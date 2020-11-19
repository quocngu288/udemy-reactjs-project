import React, { Component } from 'react'

export default class ModelAdd extends Component {
    render() {
        return (
            <div className="modal" id="courseModal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">
                            Add New Course
</h4>
                        <button type="button" className="close" data-dismiss="modal">×</button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label htmlFor="tenKhoaHoc">
                                Course's Name
</label>
                            <input name="tenKhoaHoc" type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="moTa">
                                Description
</label>
                            <input name="moTa" type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="hinhAnh">Image</label>
                            <input name="hinhAnh" type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">
                            Add
</button>
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
