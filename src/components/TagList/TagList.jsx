import React, { Component } from 'react';
import { connect } from 'react-redux';

class TagList extends Component {
    render() {
        { this.props.reduxState.map(tag => {
            <p>tag</p>
        })}
        return(
            
            
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }

}
export default connect(mapStateToProps)(TagList)