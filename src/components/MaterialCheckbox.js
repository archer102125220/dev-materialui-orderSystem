import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';

const styles = theme => ({
    root: {
        color: green[600],
        '&$checked': {
            color: green[500],
        },
    },
    checked: {},
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    group: {
        display: 'inline',
    },
});

class MaterialCheckbox extends React.Component {
    state = {
    };

    handleChange(valueName,name, Check) {
        this.setState({ [name]: Check }, () => {
            this.props.ChangeValue({ [valueName]: Object.FilterToName(this.state,true) });
        });

    };

    componentWillMount() {
        const { CheckValue, DefCheck, } = this.props;
        CheckValue.map(val =>
            this.setState({
                [val]: (typeof (DefCheck.find(Deval => val === Deval)) === "undefined") ? false : true,
            })
        );
        this.setState({ CheckName: CheckValue });
    }

    render() {
        const {
            classes,
            label,
            valueName,
        } = this.props;
        const { CheckName } = this.state;
        return (
            <div>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">{label}</FormLabel>
                    <FormGroup className={classes.group}>
                        {
                            CheckName.map((val, ind) => <FormControlLabel
                                key={ind}
                                label={val}
                                control={
                                    <Checkbox
                                        checked={this.state[val]}
                                        onChange={e => { this.handleChange(valueName,val, e.target.checked) }}
                                        value={val}
                                        classes={
                                            {
                                                root: classes.root,
                                                checked: classes.checked,
                                            }
                                        }
                                    />
                                }
                            />)
                        }
                    </FormGroup>
                </FormControl>
            </div>
        );
    }
}

export default withStyles(styles)(MaterialCheckbox);