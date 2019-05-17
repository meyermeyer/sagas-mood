import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core'

class Tags extends Component {
    render(){
        return(
            <p>tag stuff here</p>
        )
    }
}

export default connect()(Tags)