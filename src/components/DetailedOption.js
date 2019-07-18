import React from 'react';
import MaterialCheckbox from './MaterialCheckbox';
import MaterialRadio from './MaterialRadio';
import MaterialNumber from './MaterialNumber';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    container: {
        display: '-webkit-box',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        height: 25,
        width: 100
    },
    button: {
        height: 70
    },
    span: {
        float: 'right',
        width: "50%"
    },
    contentText: {
        width: "50%"
    },
    checkbox:{
        maxWidth: "650px"
    }
});

class DetailedOption extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 1,
            tempItem: {}
        }
    }

    componentWillMount() {
        const { ItemCount, tempItem } = this.props;
        this.setState({ count: ItemCount, tempItem });
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
        } = this.props;
        const { count } = this.state;
        const error = count === 0;

        return (
            <DialogContent>
                <div className={classes.container}>
                    <DialogContentText className={classes.contentText}>
                        {description}
                    </DialogContentText>
                    <MaterialNumber
                        label="請輸入數量"
                        textMargin="normal"
                        textVariant="outlined"
                        buttonVariant="outlined"
                        className={classes.span}
                        value={count}
                        error={error}
                        valueName="count"
                        ChangeValue={this.SetStates}
                    />
                </div>
                <MaterialRadio label="請選擇特需..." CheckValue={types} DefCheck={ItemClass} valueName="class" ChangeValue={this.SetStates} />
                <MaterialCheckbox className={classes.checkbox} label="請選擇類型..." CheckValue={special} DefCheck={ItemSpecial} valueName="special" ChangeValue={this.SetStates} />
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