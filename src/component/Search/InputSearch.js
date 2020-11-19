import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchCourse } from '../../store/actions/action';
class InputSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            this.props.onSearchCourse(this.state.search)
        })
    }
    onSearch = () => {
        // e.preventDefault();
        this.props.onSearchCourse(this.state.search)
    }
    render() {
        return (
            <form>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Search for Course" name='search' value={this.state.search} onChange={this.onChange} />
                    <div className="input-group-prepend" onClick={this.onSearch}>
                        <span className="input-group-text"><i className="fa fa-search" /></span>
                    </div>
                </div>
            </form>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onSearchCourse: (search) => {
            return (
                dispatch(searchCourse(search))
            )

        }
    }
}
export default connect(null, mapDispatchToProps)(InputSearch)  
