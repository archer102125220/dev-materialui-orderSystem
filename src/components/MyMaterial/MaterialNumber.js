import React from 'react';
import { enquireScreen } from 'enquire-js';
import classNames from 'classNames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddCircle from '@material-ui/icons/AddCircle';
import RemoveCircle from '@material-ui/icons/RemoveCircleOutline';

const styles = theme => ({
    root: {
        height: 61,
    },
    textField: {
        margin: 0,
        marginTop: theme.spacing.unit,
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        maxWidth: 100
    },
    textFieldMobile: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
        marginRight: 0,
    },
    textFieldPhone: {
        transition: theme.transitions.create(['width', 'height', 'margin'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        margin: 2,
        maxWidth: 80,

    },
    button: {
        marginTop: theme.spacing.unit,
        height: 61,
    },
    buttonPhone: {
        transition: theme.transitions.create(['width', 'height', 'margin'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginTop: 0,
        maxHeight: 61,
    },
});

class MaterialNumber extends React.Component {
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
        }, "(max-width: 385px)");
    }

    NumberInput(valueName = "", value) {
        value = (Number(value) < 0 || isNaN(value) === true || value === "") ? 0 : Number(value);
        if (valueName === "") {
            valueName = "number";
        } else {
            this.props.ChangeValue({ [valueName]: value });
        }
        this.setState({ [valueName]: value });
    }

    render() {
        const {
            classes,
            label,
            textMargin,
            textVariant,
            buttonVariant,
            value,
            error,
            valueName,
            className,
        } = this.props;

        const inputProps = {
            classes: {
                root: classes.root,
            },
        };

        return (
            <span>
                <Button variant={buttonVariant} className={classNames(classes.button, {
                    [classes.buttonPhone]: this.state.isPhone,
                }, className.addButton)} onClick={e => { this.NumberInput(valueName, value - 1) }} ><RemoveCircle /></Button>
                <TextField
                    error={error}
                    label={label}
                    value={value}
                    className={classNames(classes.textField, {
                        [classes.textFieldPhone]: (textMargin === "normal") && this.state.isPhone,
                    }, className.TextField)}
                    margin={textMargin}
                    variant={textVariant}
                    onChange={e => {
                        this.NumberInput(valueName, e.target.value)
                    }}
                    InputProps={inputProps}
                />
                <Button variant={buttonVariant} className={classNames(classes.button, {
                    [classes.buttonPhone]: this.state.isPhone,
                }, className.lessButton)} onClick={e => { this.NumberInput(valueName, value + 1) }} ><AddCircle /></Button>
            </span>
        );
    }
}

MaterialNumber.defaultProps = {
    value: 0,
    className: {},
}

export default withStyles(styles)(MaterialNumber);