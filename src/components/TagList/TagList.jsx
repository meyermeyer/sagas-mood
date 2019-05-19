import React, { Component } from 'react';
import { connect } from 'react-redux';
//MaterialUI stuff
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    chip: {
        margin: theme.spacing.unit,
    },
});

// function TagList(props) {
//     const { classes } = props;
//     {this.props.reduxState.addedTags.map((tag => {
//         if (tag.image_id === this.props.reduxState.image_id)
//             return (
//             <div className={classes.root}>
//             <Chip label={tag.name} className={classes.chip} />
//         </div>
//     );
//     }))}
// }

class TagList extends Component {
    
    render() {
        const { classes } = this.props;
        return(
           < div className = { classes.root }>
                {this.props.reduxState.addedTags.map((tag=>{
                        if (tag.image_id === this.props.reduxState.image_id) {
                            return(
                                <Chip label={tag.name} className={classes.chip} />
                            )
                        }
                        
                    
                    
                }))}
           </div>
        )
        
    }
}
TagList.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }

}
export default connect(mapStateToProps)(withStyles(styles)(TagList))