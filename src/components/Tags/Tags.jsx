import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core'
import TagList from '../TagList/TagList'
//MUI
import PropTypes from 'prop-types';
import { withStyles, OutlinedInput, InputLabel, FormControl, Select } from '@material-ui/core';
//CSS
import './Tags.css'

const styles = theme => ({
    
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

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
        const { classes } = this.props;
        
        return(
            <div id="tagComponent">
                <div className={classes.root}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel
                            ref={ref => {
                                this.InputLabelRef = ref;
                            }}
                            htmlFor="outlined-age-native-simple"
                        >
                            {this.props.name}
                        </InputLabel>
                            <Select
                                native
                                value={this.state.scale}
                                onChange={this.handleChange}
                                input={
                                    <OutlinedInput
                                        name="tag"
                                        labelWidth={this.state.labelWidth}
                                        id="outlined-tag-native-simple"
                                    />
                                }
                            >
                                <option selected >Select Tag</option>
                                {this.props.reduxState.tags.map((tag) => {
                                    return (
                                        <option value={tag.id}>{tag.name}</option>
                                    )
                                })}
                            </Select>
                        {/* <select onChange={this.handleChange}> */}
                            
                            {/* default to select blank */}
                            {/* <option selected disabled>Pick One</option>
                            {this.props.reduxState.tags.map((tag) => {
                                return (
                                    <option value={tag.id}>{tag.name}</option>
                                )
                            })}
                        </select> */}
                    </FormControl>
                    
                </div>
                    <Button onClick={this.handleSubmit} variant="contained" color="primary">Add Tag</Button>
                <TagList />
            </div>
        )
    }
}
Tags.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (reduxState) => {
    return{
        reduxState
    }
    
}

export default connect(mapStateToProps)(withStyles(styles)(Tags));