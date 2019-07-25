//fastfood
import React from 'react';
import { Link } from 'dva/router';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MyDrawer from '../components/MyDrawer';
import Fastfood from '@material-ui/icons/Fastfood';

const styles = theme => ({
    hyperLink: {
        textDecoration: "none",
    },
});

class PageChage extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <MyDrawer open={this.props.open} anchor="left" toggleDrawer={this.props.toggleDrawer} keyDownClose={true} clickClose={true}>
                <List>
                    <ListItem>
                        <ListItemText primary="XXX早餐店" />
                    </ListItem>
                    <Divider />
                    <Link to="/" className={classes.hyperLink}>
                        <ListItem button >
                            <ListItemIcon><Fastfood /></ListItemIcon>
                            <ListItemText primary="點餐" />
                        </ListItem>
                    </Link>
                </List>
            </MyDrawer>
        );
    }
}


export default withStyles(styles)(PageChage);
