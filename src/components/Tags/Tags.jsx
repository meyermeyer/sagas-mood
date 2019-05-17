import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core'


class Tags extends Component {
    //dispatch action to trigger fetchTags saga to GET tags from database
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_TAGS' })
    }

    render(){
        return(
            
            <select>
                {this.props.reduxState.tags.map((tag) => {
                    return(
                        <option>{tag.name}</option>
                    )
                })}
                
            </select>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return{
        reduxState
    }
    
}

export default connect(mapStateToProps)(Tags)