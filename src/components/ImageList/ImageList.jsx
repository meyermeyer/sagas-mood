import React, {Component} from 'react';
import {connect} from 'react-redux';
import ImageCard from '../ImageCard/ImageCard';

class ImageList extends Component {
    state = {
        index: 0
    }

    componentDidMount(){
        this.props.dispatch({type:'FETCH_IMAGES'})
    };
    
    
    render(){
        console.log(this.props.images);
        let index = this.state.index
        console.log(this.state.index);
        
        return(
            <>
                {this.props.images.map((image)=> {
                    if (image.id-1 === index) {
                        return (
                            <ImageCard image={image} />
                        )
                    }
                    
                })}
                
                {/* <ImageCard /> */}
                
            </>
            
            
        )
    }
}

const mapStateToProps = (reduxState) => {
    return(
        reduxState
    )
}
export default connect(mapStateToProps)(ImageList);