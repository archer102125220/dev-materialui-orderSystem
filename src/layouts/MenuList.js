import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '../components/MenuItem';

const styles = theme => {
    // console.log(theme);
    return ({
        MenuBody: {
            marginRight: theme.spacing.unit,
            width: "85%",
            display: "inline",
            marginLeft: 0,
            marginTop: 0,
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
            MenuSelectItemChange,
        } = this.props;
        
        return (
            <div className={classes.MenuBody}>
                <div className={classes.root}>
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
