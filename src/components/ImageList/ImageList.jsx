import React, {Component} from 'react';
import {connect} from 'react-redux';
import ImageCard from '../ImageCard/ImageCard';
import { Button, Typography} from '@material-ui/core'
import Tags from '../Tags/Tags'
import './ImageList.css'

class ImageList extends Component {
    state = {
        index: 0
    }

    handlePreviousClick = () => {
        //if it's the first image, go to the last, otherwise decrement image
        if (this.state.index === 0){
            this.setState({
                index: this.props.images.length - 1
            }) 
        }
        else {
            this.setState({
                index: this.state.index-1
            })
        }
    }//end handlePreviousClick

    handleNextClick = () => {
        //if it's the last image, go the the first, otherwise increment
        if(this.state.index===this.props.images.length-1){
            this.setState({
                index: 0
            })
        }
        else {
            this.setState({
                index: this.state.index+1
            })
        }
    }

    componentDidMount(){
        this.props.dispatch({type:'FETCH_IMAGES'})
        this.props.dispatch({ type: 'FETCH_ADDED_TAGS'})
    };
    
    
    render(){
        console.log('in handlePreviousClick', this.state.index);
        console.log(this.props.images);
        let index = this.state.index;
        console.log(this.state.index);
        
        return (
            <div>
                <h1>The Mood Ring</h1>
                <div id="container">
                    <div id="carousel">
                        <Button className="button" onClick={this.handlePreviousClick} variant="contained" color="primary"><i aria-hidden="true" class="material-icons" id="back-icon" >skip_previous</i>Previous</Button>
                        {this.props.images.map((image, i) => {
                            if (image.id - 1 === index) {
                                this.props.dispatch({ type: 'SAVE_IMAGE_ID', payload: image.id })
                                return (
                                    <ImageCard key={i} image={image} />
                                )
                            }
                        })}
                        <Button className="button" onClick={this.handleNextClick} variant="contained" color="primary">Next<i aria-hidden="true" class="material-icons" id="next-icon" >skip_next_black_24x24</i></Button>
                    </div>

                    <Tags />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return(
        reduxState
    )
}
export default connect(mapStateToProps)(ImageList);