//fastfood
import React from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MyDrawer from '../components/MyDrawer';
import Fastfood from '@material-ui/icons/Fastfood';

class PageChage extends React.Component {

    render() {
        return (
            <MyDrawer open={this.props.open} anchor="left" toggleDrawer={this.props.toggleDrawer} keyDownClose={true}>
                <List>
                    <ListItem>
                        <ListItemText primary="XXX早餐店" />
                    </ListItem>
                    <Divider />
                    <ListItem button >
                        <ListItemIcon><Fastfood /></ListItemIcon>
                        <ListItemText primary="點餐" />
                    </ListItem>
                </List>
            </MyDrawer>
        );
    }
}


export default PageChage;
