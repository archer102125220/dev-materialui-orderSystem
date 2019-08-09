import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { withStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import MaterialTabBody from './MyMaterial/MaterialTabBody';
import MenuItem from './MenuItem';

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


class MenuList extends React.Component {

    handleChangeIndex = index => {
        this.props.TageIdChange(index);
    };

    render() {
        const {
            classes,
            menuItems,
            open,
            StateChange,
            MenuSelectItemChange,
            isMobile,
            TageIdChange,
            tageid,
        } = this.props;

        return (
            <div className={classes.MenuBody}>
                <MaterialTabBody
                    TageIdChange={TageIdChange}
                    index={tageid}>
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
                            isMobile={isMobile}
                        />
                    )}
                </MaterialTabBody>
                {
                    // <div className={classes.root}>
                    //     <SwipeableViews
                    //         axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    //         index={tageid}
                    //         onChangeIndex={this.handleChangeIndex}
                    //     >

                    //     </SwipeableViews>
                    // </div>
                }
            </div>
        );
    }
};
export default withStyles(styles)(MenuList);
