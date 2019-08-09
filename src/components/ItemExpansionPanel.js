import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import { enquireScreen } from 'enquire-js';
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
        marginRight: 10,
    },
    action: {
        marginLeft: 10,
    },
    expansionPanelRoot: {
        paddingRight: 0,
        paddingLeft: 12,
    },
});

class ItemExpansionPanel extends React.Component {

    constructor() {
        super();
        this.state = {
            expanded: null,
            isPhone: false,
        }
    }

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    componentDidMount = () => {
        //enquire-js參考文件  https://github.com/alibaba/ice/wiki/%E5%93%8D%E5%BA%94%E5%BC%8F%E6%96%B9%E6%A1%88
        this.enquireHandler = enquireScreen(mobile => {
            this.setState({
                isPhone: mobile ? true : false,
            });
        }, "(max-width: 375px)");
    }

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
                    <ExpansionPanel key={inde} expanded={expanded === inde} onChange={this.handleChange(inde)}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <span className={classes.heading}>{val.name + val.class}</span>
                            {val.count && <span className={classes.secondaryHeading}>共 {val.count} 份</span>}
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className={classes.expansionPanelRoot}>
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

ItemExpansionPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItemExpansionPanel);