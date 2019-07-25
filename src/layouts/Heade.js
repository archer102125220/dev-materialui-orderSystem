import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import Assignment from '@material-ui/icons/Assignment';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = theme => ({
    MenuBody: {
        margin: theme.spacing.unit,
        width: "100%",
        height: "10%",
        marginLeft: 0,
        marginTop: 0,
        float: "inherit",
    },
    menuButton: {
        width: 48,
        height: 48,
        backgroundColor: "#3f51b5",
    },
    list: {
        width: 250,
    },
    Bar: {
        boxShadow: "none",
        flexDirection: "inherit",
    },
    BarButton: {
        fontSize: 20
    },
    ordersButton: {
        position: "relative",
        right: 0,
    },
    hide: {
        display: 'none',
    },
});

class Heade extends React.Component {
    constructor() {
        super();
        this.state = {
            left: false,
        };
    }

    handleChange = (event, value) => {
        this.props.TageIdChange(value);
    };

    handleChangeIndex = index => {
        this.props.TageIdChange(index);
    };

    toggleDrawer = (open) => () => {
        this.setState({
            'left': open,
        });
    };

    render() {
        const {
            classes,
            menuItems,
            toggleDrawer,
            className,
            right,
            isMobile,
        } = this.props;
        return (
            <div className={classes.MenuBody}>
                <AppBar
                    className={classes.Bar}
                    classes={{
                        root: className,
                    }}
                >
                    <IconButton
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="Menu"
                        onClick={toggleDrawer("left", true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Tabs
                        value={this.props.tageid}
                        onChange={this.handleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                    >
                        {menuItems.map((val, inde) =>
                            <Tab
                                className={classes.BarButton}
                                key={inde}
                                label={val.type}
                            />
                        )}
                    </Tabs>
                    <IconButton
                        className={classNames(classes.menuButton, classes.ordersButton, (right && !isMobile) ? classes.hide : "")}
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={toggleDrawer("right", true)}
                    >
                        <Assignment />
                    </IconButton>
                </AppBar>
            </div>
        );
    }
}


export default withStyles(styles)(Heade);
