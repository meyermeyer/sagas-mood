import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core'
import './Tags.css'


class Tags extends Component {
    //dispatch action to trigger fetchTags saga to GET tags from database
    state = {
        // image_id : 0,
        tag_id : 0
    }
    
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_TAGS' })
    }


    handleChange = (event) => {
        console.log('in handleChange', event.target.value);
        this.setState({
            tag_id: event.target.value
        })

        
    }
    render(){
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