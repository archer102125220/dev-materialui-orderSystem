import React from 'react';
import classNames from 'classNames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

const styles = theme => ({
    list: {
        width: 250,
    },
    RightLeft: {
        height: "100%",
    }
});

class MaterialDrawer extends React.Component {

    render() {
        const {
            classes,
            open,
            toggleDrawer,
            anchor,
            variant,
            className,
            clickClose,
            keyDownClose,
            myClasses,
            contentclass
        } = this.props;
        //Contentclass
        return (
            <Drawer className={className} classes={myClasses} anchor={anchor || "left"} variant={variant || "temporary"} open={open} onClose={toggleDrawer(anchor, false)}>
                <div
                    tabIndex={0}
                    role="button"
                    className={anchor.match(/left||right/) && classes.RightLeft}
                    onClick={clickClose && toggleDrawer(anchor, false)}
                    onKeyDown={keyDownClose && toggleDrawer(anchor, false)}
                >
                    <div className={classNames(classes.list, anchor.match(/left||right/) && classes.RightLeft, contentclass)}>
                        {this.props.children}
                    </div>
                </div>
            </Drawer>
        );
    }
}


export default withStyles(styles)(MaterialDrawer);
