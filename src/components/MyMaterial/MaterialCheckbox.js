import React from 'react';
import { enquireScreen } from 'enquire-js';
import classNames from 'classNames';
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
    },
});

class MaterialCheckbox extends React.Component {
    constructor() {
        super();
        this.state = {
            isMobile: false,
        }
    }

    componentDidMount = () => {
        this.enquireHandler = enquireScreen(mobile => {
            this.setState({
                isMobile: mobile ? true : false,
            });
        }, "(max-width: 1024px)");
    }

    handleChange(valueName, name, Check) {
        this.setState({ [name]: Check }, () => {
            this.props.ChangeValue({ [valueName]: Object.FilterByName(this.state, true) });
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
            className
        } = this.props;
        const { CheckName, isMobile } = this.state;
        
        return (
            <div className={className}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">{label}</FormLabel>
                    <FormGroup className={classes.group}>
                        {
                            CheckName.map((val, ind) => <FormControlLabel
                                key={ind}
                                label={val}
                                classes={
                                    {
                                        label: this.state[val] === true && isMobile ?
                                            classes.labelMobilechecked :
                                            isMobile ?
                                                classes.label :
                                                "",
                                    }
                                }
                                control={
                                    <Checkbox
                                        checked={this.state[val]}
                                        onChange={e => { this.handleChange(valueName, val, e.target.checked) }}
                                        value={val}
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
                            />)
                        }
                    </FormGroup>
                </FormControl>
            </div>
        );
    }
}

export default withStyles(styles)(MaterialCheckbox);