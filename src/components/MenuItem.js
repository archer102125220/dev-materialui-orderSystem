import React from 'react';
import classNames from 'classNames';
import { enquireScreen } from 'enquire-js';
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
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
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
    cardMobile: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: "2.5%",
    },
    cardPhone: {
        transition: theme.transitions.create('padding', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
        marginRight: 0,
    },
});
//margin-left: 0px;
class MenuItem extends React.Component {
    constructor() {
        super();
        this.state = {
            isPhone: false,
        }
    }


    componentDidMount = () => {
        //enquire-js參考文件  https://github.com/alibaba/ice/wiki/%E5%93%8D%E5%BA%94%E5%BC%8F%E6%96%B9%E6%A1%88
        this.enquireHandler = enquireScreen(mobile => {
            this.setState({
                isPhone: mobile ? true : false,
            });
        }, "(max-width: 358px)");
    }

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

                        return (<Card key={inde} className={classNames(classes.card, {
                            [classes.cardMobile]: isMobile,
                            [classes.cardPhone]: this.state.isPhone,
                        })}>
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