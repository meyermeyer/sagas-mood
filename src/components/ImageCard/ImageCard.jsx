import React, {Component} from 'react';
import {connect} from 'react-redux';

class ImageCard extends Component {
    render() {
        return(
            <img src={this.props.image.path} />
        )
    }
}

export default connect()(ImageCard);