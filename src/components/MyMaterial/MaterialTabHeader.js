import React from 'react';
import green from '@material-ui/core/colors/green';
import yellow from '@material-ui/core/colors/yellow';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import Assignment from '@material-ui/icons/Assignment';
import Tabs from '@material-ui/core/Tabs';

const styles = theme => ({
    menuButton: {
        width: 50,
        height: 50,
        backgroundColor: green[600],
    },
    Bar: {
        backgroundColor: green[600],
        boxShadow: "none",
        flexDirection: "inherit",
    },
    selected: {
        backgroundColor: yellow[500],
        height: 4,
    },
    scrollable: {
        backgroundColor: green[600],
        // overflow: 'hidden',
    }
});

class MaterialTabHeader extends React.Component {

    handleChange = (event, value) => {
        this.props.handleChange(value);
    };

    render() {
        const {
            classes,
            className,
            tageid,
            BarPosition,
            beforTab,
            afterTab,
            centered,
            justStyle,
        } = this.props;

        return (
            <AppBar
                className={classes.Bar}
                classes={className.header}
                position={BarPosition}
            >
                {beforTab}
                {
                    (justStyle == false) ?
                        (centered == false) ?
                            <Tabs
                                value={tageid}
                                onChange={this.handleChange}
                                variant="scrollable"
                                scrollButtons="auto"
                                classes={{
                                    ...className.tabs,
                                    indicator: classes.selected,
                                    scrollable: classes.scrollable,
                                    scrollButtons: classes.menuButton,
                                }}
                            >
                                {this.props.children}
                            </Tabs> :
                            <Tabs
                                value={tageid}
                                onChange={this.handleChange}
                                scrollButtons="auto"
                                classes={{
                                    ...className.tabs,
                                    indicator: classes.selected,
                                    scrollable: classes.scrollable,
                                    scrollButtons: classes.menuButton,
                                }}
                                centered
                            >
                                {this.props.children}
                            </Tabs> :
                         this.props.children 
                }
                {afterTab}
            </AppBar>
        );
    }
}
MaterialTabHeader.defaultProps = {
    BarPosition: "relative",
    beforTab: "",
    afterTab: "",
    centered: false,
    justStyle: false,
}


export default withStyles(styles)(MaterialTabHeader);
