import React from 'react';
import { enquireScreen } from 'enquire-js';
import classNames from 'classNames';
import MaterialCheckbox from '../MyMaterial/MaterialCheckbox';
import MaterialRadio from '../MyMaterial/MaterialRadio';
import MaterialNumber from '../MyMaterial/MaterialNumber';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        paddingLeft: 5,
    },
    root: {
        //transitions動畫特效用
    },
    containerMobile: {
        transition: theme.transitions.create(['width','padding'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        paddingLeft: 14,
        paddingRight: 14,
    },
    containerPhone: {
        transition: theme.transitions.create(['width','padding'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        paddingLeft: 0,
        paddingRight: 0,
    },
    contentText: {
        transition: theme.transitions.create(['width','margin'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        width: "50%",
    },
    contentTextPhone: {
        transition: theme.transitions.create(['width','margin'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        width: 'unset',
        marginBottom: 8,
    },
    checkbox: {
        maxWidth: "650px"
    },
});

class DetailedOption extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 1,
            tempItem: {},
            isPhone: false,
        }
    }

    componentWillMount() {
        const { ItemCount, tempItem } = this.props;
        this.setState({ count: ItemCount, tempItem });
    }

    componentDidMount = () => {
        //enquire-js參考文件  https://github.com/alibaba/ice/wiki/%E5%93%8D%E5%BA%94%E5%BC%8F%E6%96%B9%E6%A1%88
        this.enquireHandler = enquireScreen(mobile => {
            this.setState({
                isPhone: mobile ? true : false,
            });
        }, "(max-width: 385px)");
    }


    SetStates = (States = {}, Back = () => { }) => {
        this.setState(States, () => {
            Back(this.state);
        });
        this.props.SetStates(States);
    }

    render() {
        const {
            description,
            types,
            special,
            classes,
            ItemClass,
            ItemSpecial,
            isMobile,
        } = this.props;
        const { count, isPhone } = this.state;
        const error = count === 0;
        return (
            <DialogContent classes={{
                root: classNames({
                    [classes.containerMobile]: isMobile,
                    [classes.containerPhone]: this.state.isPhone,
                })
            }}>
                <div className={classes.container}>
                    <DialogContentText className={classNames(classes.contentText, {
                        [classes.contentTextPhone]: this.state.isPhone,
                    })}>
                        {description}
                    </DialogContentText>
                    <MaterialNumber
                        label="請輸入數量"
                        textMargin="normal"
                        textVariant="outlined"
                        buttonVariant="outlined"
                        value={count}
                        error={error}
                        valueName="count"
                        ChangeValue={this.SetStates}
                        isPhone={isPhone}
                    />
                </div>
                <MaterialRadio label="請選擇類型..." CheckValue={types} DefCheck={ItemClass} valueName="class" ChangeValue={this.SetStates} />
                <MaterialCheckbox className={classes.checkbox} label="請選擇特需..." CheckValue={special} DefCheck={ItemSpecial} valueName="special" ChangeValue={this.SetStates} />
            </DialogContent>
        );
    }
}

DetailedOption.defaultProps = {
    types: [],
    special: [],
    ItemCount: 1,
    ItemClass: "",
    ItemSpecial: [],
}

export default withStyles(styles)(DetailedOption);