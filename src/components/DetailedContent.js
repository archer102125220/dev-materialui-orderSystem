import React from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

const CustomTableCell = withStyles(theme => ({ //複寫material樣式
    head: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        fontSize: "17px"
    },
}))(TableCell);

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
    render() { //統編、桌號
        const {
            orderDetail,
            orderHeader,
            classes
        } = this.props;
        
        return (
            <DialogContent >
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                {
                                    orderHeader.map((val, index) => <CustomTableCell key={index} align="right">{val}</CustomTableCell>)
                                }
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {
                                // ["餐點名稱", "特別需求", "數量", "總價", "操作"]
                                orderDetail.length !== 0 ? orderDetail.map((val, index) =>
                                    <TableRow key={index} className={classes.row} >
                                        <CustomTableCell align="right">{val.name + val.class}</CustomTableCell>
                                        <CustomTableCell align="right">
                                            {
                                                val.special.length === 0 ?
                                                    val.special.map((val, key, arr) => val + ((arr[key + 1] !== undefined) ? "，" : "")) :
                                                    "無"
                                            }
                                        </CustomTableCell>
                                        <CustomTableCell align="right">{val.count}</CustomTableCell>
                                        <CustomTableCell>${val.count * val.price}</CustomTableCell>
                                        <CustomTableCell align="right">
                                            <Button className={classes.action}>
                                                <EditIcon />
                                            </Button>
                                            <Button className={classes.action}>
                                                <DeleteIcon />
                                            </Button>
                                        </CustomTableCell>
                                    </TableRow>
                                ) : <TableRow className={classes.row} >
                                        <CustomTableCell align="right">請選擇餐點...</CustomTableCell>
                                    </TableRow>
                            }
                        </TableBody>
                    </Table>
                </Paper>
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