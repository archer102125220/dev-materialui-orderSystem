import React from 'react';
import { enquireScreen } from 'enquire-js';
import classNames from 'classNames';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';

const styles = theme => ({
    root: {
        color: green[600],
        '&$checked': {
            color: green[500],
        },
    },
    rootMobile: {
        visibility: 'hidden',
    },
    labelMobilechecked: {
        backgroundColor: green[600],
        padding: 12,
        color: '#fff',
        borderRadius: 10,
        opacity: 1,
        transition: theme.transitions.create('opacity', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    checked: {},
    label: {
        backgroundColor: green[600],
        padding: 12,
        color: '#fff',
        borderRadius: 10,
        opacity: 0.5,
        transition: theme.transitions.create('opacity', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    group: {
        display: 'inline',
        margin: `${theme.spacing.unit}px 0`,
    },
});

class MaterialRadio extends React.Component {
    constructor() {
        super();
        this.state = {
            isMobile: false,
        }
    }

    handleChange = (valueName, name) => e => {
        this.setState({ [name]: e.target.value }, () => {
            this.props.ChangeValue({ [valueName]: this.state[name] });
        });
    };

    componentDidMount = () => {
        this.enquireHandler = enquireScreen(mobile => {
            this.setState({
                isMobile: mobile ? true : false,
            });
        }, "(max-width: 1024px)");
    }

    componentWillMount() {
        const { CheckValue, DefCheck } = this.props;
        this.setState({ 'value': DefCheck === "" ? CheckValue[0] : DefCheck });
        this.setState({ CheckName: CheckValue });
    }

    render() {
        const {
            classes,
            label,
            valueName,
        } = this.props;
        const { CheckName, value, isMobile } = this.state;
        return (
            <div>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">{label}</FormLabel>
                    <FormGroup className={classes.group}>
                        <RadioGroup
                            aria-label="Gender"
                            name="gender1"
                            className={classes.group}
                            value={value}
                            onChange={this.handleChange(valueName, 'value')}
                        >
                            {
                                CheckName.map((val, ind) => <FormControlLabel
                                    key={ind}
                                    value={val}
                                    classes={
                                        {
                                            label: this.state.value === val && isMobile ?
                                                classes.labelMobilechecked :
                                                isMobile ?
                                                    classes.label :
                                                    "",
                                        }
                                    }
                                    control={
                                        <Radio
                                            classes={
                                                {
                                                    root: classNames(classes.root, {
                                                        [classes.rootMobile]: isMobile,
                                                    }),
                                                    checked: classes.checked,
                                                }
                                            }
                                        />
                                    }
                                    label={val}
                                />)
                            }
                        </RadioGroup>
                    </FormGroup>
                </FormControl>
            </div>
        );
    }
}

export default withStyles(styles)(MaterialRadio);