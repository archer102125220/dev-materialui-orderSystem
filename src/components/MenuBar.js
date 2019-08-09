import React from 'react';
import green from '@material-ui/core/colors/green';
import yellow from '@material-ui/core/colors/yellow';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Assignment from '@material-ui/icons/Assignment';
import Tab from '@material-ui/core/Tab';
import MaterialTabHeader from './MyMaterial/MaterialTabHeader';

const styles = theme => ({
    MenuBody: {
        // margin: theme.spacing.unit,
        width: "100%",
        // height: "10%",
        marginLeft: 0,
        marginTop: 0,
        float: "inherit",
    },
    menuButton: {
        width: 50,
        height: 50,
        backgroundColor: green[600],
    },
    BarButton: {
        backgroundColor: green[600],
        fontSize: 20,
    },
    ordersButton: {
        backgroundColor: green[600],
        position: "relative",
        right: 0,
    },
    hide: {
        display: 'none',
    },
    selectedTab: {
        backgroundColor: green[600],
        transition: theme.transitions.create(['opacity', 'fontSize'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        opacity: 0.5,
    },
});

class MenuBar extends React.Component {

    handleChange = (event, value) => {
        this.props.TageIdChange(value);
    };

    render() {
        const {
            classes,
            menuItems,
            toggleDrawer,
            className,
            tageid,
            right,
            isMobile,
            TageIdChange,
            sideMenu,
        } = this.props;

        return (
            <div className={classes.MenuBody}>
                <MaterialTabHeader
                    className={className}
                    BarPosition="relative"
                    tageid={tageid}
                    handleChange={TageIdChange}
                    beforTab={
                        sideMenu && <IconButton
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="Menu"
                            onClick={toggleDrawer("left", true)}
                        >
                            <MenuIcon />
                        </IconButton>
                    }
                    afterTab={
                        <IconButton
                            className={classNames(classes.menuButton, classes.ordersButton, { [classes.hide]: (right && !isMobile) })}
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={toggleDrawer("right", true)}
                        >
                            <Assignment />
                        </IconButton>
                    }
                >
                    {
                        menuItems.map((val, inde) =>
                            <Tab
                                className={classes.BarButton}
                                key={inde}
                                label={val.type}
                                classes={
                                    {
                                        selected: classes.selectedTab,
                                    }
                                }
                            />
                        )
                    }
                </MaterialTabHeader>
            </div>
        );
    }
}
//sideMenu

MenuBar.defaultProps = {
    sideMenu: false,
}

export default withStyles(styles)(MenuBar);
