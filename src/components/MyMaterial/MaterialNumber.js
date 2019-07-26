import React from 'react';
import { enquireScreen } from 'enquire-js';
import classNames from 'classNames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddCircle from '@material-ui/icons/AddCircle';
import RemoveCircle from '@material-ui/icons/RemoveCircleOutline';

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        height: 25,
        width: 100
    },
    textFieldPhone: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
        marginRight: 0,
    },
    button: {
        height: 70
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

        return (
            <span>
                <Button variant={buttonVariant} className={classes.button} onClick={e => { this.NumberInput(valueName, value - 1) }} ><RemoveCircle /></Button>
                <TextField
                    error={error}
                    label={label}
                    value={value}
                    className={classNames(classes.textField, {
                        [classes.textFieldPhone]: this.state.isPhone,
                    })}
                    margin={textMargin}
                    variant={textVariant}
                    onChange={e => { this.NumberInput(valueName, e.target.value) }}
                />
                <Button variant={buttonVariant} className={classes.button} onClick={e => { this.NumberInput(valueName, value + 1) }} ><AddCircle /></Button>
            </span>
        );
    }
}

MaterialNumber.defaultProps = {
    value: 0,
}

export default withStyles(styles)(MaterialNumber);