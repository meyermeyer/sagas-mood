import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core'
import TagList from '../TagList/TagList'
import './Tags.css'


class Tags extends Component {
    //dispatch action to trigger fetchTags saga to GET tags from database
    state = {
        image_id : 0,
        tag_id : 0
    }
    
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_TAGS' })
    }


    handleChange = (event) => {
        console.log('in handleChange', event.target.value);
        this.setState({
            image_id: this.props.reduxState.image_id,
            tag_id: parseInt(event.target.value)
        })
    }

    handleSubmit = () => {
        console.log('in handleSubmit');
        //dispatch an action with local state as payload - to SAGA where PUT will happen
        this.props.dispatch({ type:'ADD_TAG', payload: this.state})
    }
    render(){
        console.log(this.state);
        
        return(
            <>
                <select onChange={this.handleChange}>
                    {/* default to select blank */}
                    <option selected disabled>Pick One</option>
                    {this.props.reduxState.tags.map((tag) => {
                        return(
                            <option value={tag.id}>{tag.name}</option>
                        )
                    })}
                </select>
                    <Button onClick={this.handleSubmit} variant="contained" color="primary">Add Tag</Button>
                <TagList />
            </>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return{
        reduxState
    }
    
}

export default connect(mapStateToProps)(Tags)