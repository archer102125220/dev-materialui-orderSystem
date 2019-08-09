//fastfood
import React from 'react';
import { Link } from 'dva/router';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MaterialDrawer from './MyMaterial/MaterialDrawer';
import Fastfood from '@material-ui/icons/Fastfood';
import LocalDining from '@material-ui/icons/LocalDining';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import defaultUser from "./../assets/defaultUser.png";

const styles = theme => ({
    hyperLink: {
        textDecoration: "none",
    },
    bigAvatar: {
        rgin: 10,
        dth: 60,
        ight: 60,
    },
});

class PageChage extends React.Component {
    constructor() {
        super();
        this.state = {
            router: [
                { button: true, component: Link, to: '/', icons: LocalDining, primary: "點餐" },
                { button: true, component: Link, to: '/menu_edit', icons: Fastfood, primary: "餐點管理" },
            ]
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <MaterialDrawer open={this.props.open} anchor="left" toggleDrawer={this.props.toggleDrawer} keyDownClose={true} clickClose={true}>
                <List>
                    <ListItem>
                        <ListItemText primary="XXX早餐店" />
                    </ListItem>
                    <Divider />

                    <ListItem>
                        <ListItemIcon>
                            <Avatar alt="Remy Sharp" src={defaultUser} className={classes.bigAvatar} />
                        </ListItemIcon>
                        <ListItemText primary="6恩恩" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="職位" />
                        <ListItemText primary="員工A" />
                    </ListItem>
                    <Divider />
                    {
                        this.state.router.map((val, key) =>
                            <ListItem key={key} button={val.button} component={val.component} to={val.to} className={classes.hyperLink} >
                                <ListItemIcon><val.icons /></ListItemIcon>
                                <ListItemText primary={val.primary} />
                            </ListItem>
                        )
                    }

                </List>
            </MaterialDrawer>
        );
    }
}


export default withStyles(styles)(PageChage);
