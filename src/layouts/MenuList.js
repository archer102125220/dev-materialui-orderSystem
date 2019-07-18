import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MenuItem from '../components/MenuItem';

const styles = theme => {
    // console.log(theme);
    return ({
        MenuBody: {
            margin: theme.spacing.unit,
            width: "85%",
            display: "inline",
            marginLeft: 0,
            marginTop: 0
        },
        root: {
            flexGrow: 1,
            width: '100%',
            backgroundColor: theme.palette.background.paper,
        },
        Bar: {
            boxShadow: "none",
        },
        BarButton: {
            fontSize: 20
        }
    });
}


class MenuList extends React.Component {

    handleChange = (event, value) => {
        this.props.TageIdChange(value);
    };

    handleChangeIndex = index => {
        this.props.TageIdChange(index);
    };

    render() {
        const {
            classes,
            theme,
            menuItems,
            open,
            StateChange,
            MenuSelectItemChange
        } = this.props;
        
        return (
            <div className={classes.MenuBody}>
                <div className={classes.root}>
                    <AppBar position="static" className={classes.Bar}>
                        {
                            //Tabs相關參數 https://v3.material-ui.com/api/tabs/#__next
                        }
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
                    </AppBar>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={this.props.tageid}
                        onChangeIndex={this.handleChangeIndex}
                    >
                        {menuItems.map((val, inde) =>
                            <MenuItem
                                key={inde}
                                val={val.items}
                                special={val.special}
                                selectclass={val.class}
                                orderType={val.type}
                                open={open}
                                StateChange={StateChange}
                                SelectItemChange={MenuSelectItemChange}
                            />
                        )}
                    </SwipeableViews>
                </div>
            </div>
        );
    }
};
export default withStyles(styles, { withTheme: true })(MenuList);
