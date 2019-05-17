import React, {Component} from 'react';
import {connect} from 'react-redux';
import ImageCard from '../ImageCard/ImageCard';

class ImageList extends Component {
    componentDidMount(){
        this.props.dispatch({type:'FETCH_IMAGES'})
    }

    render(){
        return(
            <ImageCard />
        )
    }
}

const mapStateToProps = (reduxState) => {
    return(
        reduxState
    )
}
export default connect(mapStateToProps)(ImageList);