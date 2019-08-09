import React from 'react';
import classNames from 'classNames';
import { enquireScreen } from 'enquire-js';
import grey from '@material-ui/core/colors/grey';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import phe from "./../assets/EiPCT.jpg";
import usaBreakfast from "./../assets/usaBreakfast.jpg";
import defaultImg from "./../assets/defaultImg.png";

const styles = theme => ({
    card: {
        width: 300,
        height: 300,
        margin: theme.spacing.unit + 5,
        float: "inherit",
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    media: {
        height: "70%",
    },
    MenuItemBody: {
        float: "left",
        height: '100%',
        width: "92%",
        marginLeft: "2%",
        backgroundColor: grey[150],
    },
    MenuItemBodyMobile: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: "1.2%",
        width: "100%",
    },
    cardMobile: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: "2.5%",
        width: 150,
        height: 150,
    },
    cardPhone: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
        marginRight: 10,
    },
    cardActionArea: {
        height: '100%',
    },
    mediaMobile: {
        height: "60%",
        transition: theme.transitions.create('height', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    mediaPhone: {
        height: "50%",
        transition: theme.transitions.create('height', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    cardContentPhone: {
        transition: theme.transitions.create('padding', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        paddingTop: 5,
    },
    cardContentMobile: {
        transition: theme.transitions.create('padding', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        paddingTop: 1,
    }
});
//    paddingTop
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
                                val = { ...val, src: defaultImg };
                        }
                        val.special = [];
                        val.class = [];
                        val.type = orderType;
                        val.action = "add";
                        val.key = -1;

                        return (<Card key={inde} className={classNames(classes.card, {
                            [classes.cardMobile]: isMobile,
                            [classes.cardPhone]: this.state.isPhone,
                        })}>
                            <CardActionArea
                                classes={
                                    {
                                        root: classes.cardActionArea,
                                    }
                                }
                                onClick={() => {
                                    StateChange(true);
                                    SelectItemChange(val);
                                }}>
                                <CardMedia
                                    component="img"
                                    alt={val.name}
                                    className={classNames(classes.media, {
                                        [classes.mediaMobile]: isMobile,
                                        [classes.mediaPhone]: this.state.isPhone,
                                    })}
                                    image={val.src}
                                    title={val.name}
                                />
                                <CardContent
                                    classes={
                                        {
                                            root: classNames({
                                                [classes.cardContentMobile]: isMobile,
                                                [classes.cardContentPhone]: this.state.isPhone,
                                            })
                                        }
                                    }>
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