import React from 'react';
import { Link } from 'dva/router';
import MaterialLink from '@material-ui/core/Link';
import green from '@material-ui/core/colors/green';
import yellow from '@material-ui/core/colors/yellow';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Assignment from '@material-ui/icons/Assignment';
import Tab from '@material-ui/core/Tab';
import Fastfood from '@material-ui/icons/Fastfood';
import LocalDining from '@material-ui/icons/LocalDining';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import defaultUser from "./../assets/defaultUser.png";
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
        width: "100%",
        height: "100%",
        backgroundColor: green[600],
        padding: 0,
        margin: 0,
        paddingTop: 2,
        paddingRight: 10,
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
    wrapper: {
        display: 'flow-root'
    },
    labelIcon: {
        minHeight: 60,
        paddingTop: "unset",
    },
    bigAvatar: {
        margin: 10,
        marginTop: 5,
        marginLeft: 0,
    },
    login: {
        width: "15vw",
    }
});

class Header extends React.Component {

    constructor() {
        super();
        this.state = {
            router: [
                { button: true, key: "router-home", component: Link, to: '/pos', icons: LocalDining, primary: "點餐" },
                { button: true, key: "router-menu_edit", component: Link, to: '/admin/menu_edit', icons: Fastfood, primary: "餐點管理" },
            ]
        }
    }

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
            centered,
        } = this.props;

        return (
            <div className={classes.MenuBody}>
                <MaterialTabHeader
                    className={className}
                    BarPosition="relative"
                    tageid={tageid}
                    handleChange={TageIdChange}
                    centered={centered}
                    beforTab=""
                    afterTab={
                        <span className={classes.login}>
                            <Button
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="login"
                            >
                                <Avatar alt="Remy Sharp" src={defaultUser} className={classes.bigAvatar} />
                                6恩恩
                            </Button>
                        </span>
                    }
                    justStyle={true}
                >
                    {
                        this.state.router.map((val, key) =>
                            // <Tab
                            //     className={classes.BarButton}
                            //     key={key}
                            //     label={val.primary}
                            //     icon={<val.icons />}
                            //     component={val.component}
                            //     to={val.to}
                            //     classes={
                            //         {
                            //             selected: classes.selectedTab,
                            //             wrapper: classes.wrapper,
                            //             labelIcon: classes.labelIcon,
                            //         }
                            //     }
                            // />
                            <Button
                                className={classes.BarButton}
                                key={key}
                                color="inherit"
                                component={val.component}
                                to={val.to} 
                            >
                                <val.icons />
                                {val.primary}
                            </Button>
                        )
                    }

                </MaterialTabHeader>
            </div>
        );
    }
}


export default withStyles(styles)(Header);
