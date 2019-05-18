import React, { Component } from 'react';
import { connect } from 'react-redux';

class TagList extends Component {
    render() {
        return(
            // {
            //     this.props.reduxState.map(tag => {
            //         return (
            //             <p>tag</p>
            //         )
            //     })
            // }
            <p>tags here</p>
        )
        
    }
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }

}
export default connect(mapStateToProps)(TagList)