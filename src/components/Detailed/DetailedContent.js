import React from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import DetailedTable from './DetailedTable';
import DetailedExpansionPanel from './DetailedExpansionPanel';


const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
    progress: {
        margin: theme.spacing.unit * 2,
    },
    OrderCount: {
        width: "100%",
        textAlign: "right",
    }
});

class DetailedContent extends React.Component {
    render() {
        const {
            orderDetail,
            orderHeader,
            SetOrders,
            classes,
            OderEditStateChange,
            SelectItemChange,
            tableNumber,
            VATNumber,
            isMobile,
        } = this.props;

        return (
            <DialogContent >
                <List className={classes.OrderCount}>
                    桌號： {tableNumber !== "" ? tableNumber + "號桌" : ""}
                </List>
                {
                    VATNumber !== "" &&
                    <List className={classes.OrderCount}>
                        統一編號：{VATNumber}
                    </List>
                }
                {
                    isMobile ?
                        <DetailedExpansionPanel
                            orderDetail={orderDetail}
                            orderHeader={orderHeader}
                            SetOrders={SetOrders}
                            OderEditStateChange={OderEditStateChange}
                            SelectItemChange={SelectItemChange}
                        /> :
                        <DetailedTable
                            orderDetail={orderDetail}
                            orderHeader={orderHeader}
                            SetOrders={SetOrders}
                            OderEditStateChange={OderEditStateChange}
                            SelectItemChange={SelectItemChange}
                        />
                }

                <Divider />
                <List className={classes.OrderCount}>
                    總價： ${orderDetail.reduce(((Previous, NowValue) => Previous + NowValue.count * NowValue.price), 0)}
                </List>
            </DialogContent>

        );
    }
}

DetailedContent.defaultProps = {
    orderDetail: [],
    special: []
}

export default withStyles(styles)(DetailedContent);