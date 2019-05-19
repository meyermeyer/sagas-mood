import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { withStyles, OutlinedInput, InputLabel, FormControl, Select } from '@material-ui/core';
import { connect } from 'react-redux'
// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import InputLabel from '@material-ui/core/InputLabel';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';

const styles = theme => ({
    root: {
        // display: 'flex',
        // flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class DropDown extends React.Component {
    state = {
        scale: '',
    };

    componentDidMount() {
        this.setState({
            labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
        });
    }

    handleChange = () => event => {
        console.log('in handleChange')
    };

    render() {
        const { classes } = this.props;

        return (
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
                                name="age"
                                labelWidth={this.state.labelWidth}
                                id="outlined-age-native-simple"
                            />
                        }
                    >
                        <option selected >Select Tag</option>
                        {this.props.reduxState.tags.map((tag) => {
                            return(
                                <option value={tag.id}>{tag.name}</option>
                            )
                        })}
                    </Select>
                </FormControl>
            </div>
        );
    }
}

DropDown.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }

}

export default connect(mapStateToProps)(withStyles(styles)(DropDown));