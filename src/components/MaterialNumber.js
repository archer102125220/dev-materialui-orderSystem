import React from 'react';
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
    button: {
        height: 70
    },
});

class MaterialNumber extends React.Component {
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
            valueName
        } = this.props;

        return (
            <span>
                <Button variant={buttonVariant} className={classes.button} onClick={e => { this.NumberInput(valueName, value - 1) }} ><RemoveCircle /></Button>
                <TextField
                    error={error}
                    label={label}
                    value={value}
                    className={classes.textField}
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