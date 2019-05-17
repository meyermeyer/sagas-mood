import React, {Component} from 'react';
import {connect} from 'react-redux';
import ImageCard from '../ImageCard/ImageCard';

class ImageList extends Component {
    render(){
        return(
            <ImageCard />
        )
    }
}

export default ImageList;