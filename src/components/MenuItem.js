import React from 'react';
import classNames from 'classNames';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import phe from "./../assets/EiPCT.jpg";
import usaBreakfast from "./../assets/usaBreakfast.jpg";

const styles = theme => ({
    card: {
        width: 345,
        margin: theme.spacing.unit + 5,
        float: "inherit",
    },
    media: {
        height: 140,
    },
    MenuItemBody: {
        float: "left",
        height: '100%',
        marginLeft: "2%",
    },
    MenuItemBodyMobile: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
});
//margin-left: 0px;
class MenuItem extends React.Component {
    render() {
        const {
            classes,
            val,
            StateChange,
            SelectItemChange,
            special,
            selectclass,
            orderType,
            isMobile,
        } = this.props;

        return (
            <div className={classNames(classes.MenuItemBody, {
                [classes.MenuItemBodyMobile]: isMobile,
            })}>
                {
                    val.map((val, inde) => {
                        switch (val.src) {
                            case "phe":
                                val = { ...val, src: phe };
                                break;
                            case "usaBreakfast":
                                val = { ...val, src: usaBreakfast };
                                break;
                            default:
                                val = { ...val };
                        }
                        val.special = [];
                        val.class = [];
                        val.type = orderType;
                        val.action = "add";

                        return (<Card key={inde} className={classes.card}>
                            <CardActionArea onClick={() => {
                                StateChange(true);
                                SelectItemChange(val);
                            }}>
                                {
                                    val.src !== "" &&
                                    <CardMedia
                                        component="img"
                                        alt={val.name}
                                        className={classes.media}
                                        image={val.src}
                                        title={val.name}
                                    />
                                }
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {val.name}
                                    </Typography>
                                    <Typography component="p">
                                        ${val.price}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>);
                    })
                }
            </div>
        );
    }
}


export default withStyles(styles)(MenuItem);