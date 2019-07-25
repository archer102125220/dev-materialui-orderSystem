import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';

const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
        marginRight: '20%',
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    specialCountPrice: {
        marginRight: 50,
    },
    action: {
        marginLeft: 50,
    }
});

class DetailedExpansionPanel extends React.Component {
    state = {
        expanded: null,
    };

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    render() {
        const {
            classes,
            orderDetail,
            orderHeader,
            SetOrders,
            OderEditStateChange,
            SelectItemChange,
        } = this.props;
        const { expanded } = this.state;

        return (
            <div className={classes.root}>
                {orderDetail.map((val, inde) =>
                    <ExpansionPanel expanded={expanded === inde} onChange={this.handleChange(inde)}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <span className={classes.heading}>{val.name + val.class}</span>
                            <span className={classes.secondaryHeading}>共 {val.count} 份</span>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <span className={classes.specialCountPrice}>
                                {orderHeader[1] + ":"}
                                {
                                    val.special.length > 0 ?
                                        val.special.map((val, key, arr) => val + ((arr[key + 1] !== undefined) ? "，" : "")) :
                                        "無"
                                }<br />
                                {`${orderHeader[3]}:$${val.count * val.price}`}
                            </span>
                            <span className={classes.action}>
                                <Button onClick={() => {
                                    val.key = inde;
                                    SelectItemChange(val);
                                    OderEditStateChange(true);
                                }
                                }>
                                    <EditIcon />
                                </Button>
                                <Button onClick={() => {
                                    window.confirm("確定要移除嗎?") === true && SetOrders(orderDetail.RemoveBykey(inde));//自定義RemoveBykey方法
                                }
                                }>
                                    <DeleteIcon />
                                </Button>
                            </span>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                )}
            </div>
        );
    }
}

DetailedExpansionPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DetailedExpansionPanel);