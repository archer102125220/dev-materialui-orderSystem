import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { withStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

const styles = theme => {
    // console.log(theme);
    return ({
        MenuBody: {
            marginRight: theme.spacing.unit,
            width: "85%",
            display: "inline",
            marginLeft: 0,
            marginTop: 0,
            backgroundColor: grey[150],
        },
        root: {
            flexGrow: 1,
            width: '100%',
            backgroundColor: grey[150],
        },
        Bar: {
            boxShadow: "none",
        },
        BarButton: {
            fontSize: 20
        }
    });
}


class MaterialTabBody extends React.Component {

    handleChangeIndex = index => {
        this.props.TageIdChange(index);
    };

    render() {
        const {
            classes,
            theme,
            index,
        } = this.props;

        return (
            <div className={classes.MenuBody}>
                <div className={classes.root}>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={index}
                        onChangeIndex={this.handleChangeIndex}
                    >
                        {this.props.children}
                    </SwipeableViews>
                </div>
            </div>
        );
    }
};
export default withStyles(styles, { withTheme: true })(MaterialTabBody);
