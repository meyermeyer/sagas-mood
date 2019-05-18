import React, { Component } from 'react';
import { connect } from 'react-redux';

class TagList extends Component {
    render() {
        return(
           <ul>
                {this.props.reduxState.addedTags.map((tag=>{
                   
                        if (tag.image_id === this.props.reduxState.image_id) {
                            return(
                                <li>{tag.name}</li>
                            )
                        }
                        
                    
                    
                }))}
           </ul>
        )
        
    }
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }

}
export default connect(mapStateToProps)(TagList)