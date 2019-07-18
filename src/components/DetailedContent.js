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

const CustomTableCell = withStyles(theme => ({ //複寫material樣式
    head: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
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
});

class DetailedContent extends React.Component {
    render() { //統編、桌號
        const {

            classes
        } = this.props;
        return (
            <DialogContent >
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <CustomTableCell>Dessert (100g serving)</CustomTableCell>
                                <CustomTableCell align="right">Calories</CustomTableCell>
                                <CustomTableCell align="right">Fat (g)</CustomTableCell>
                                <CustomTableCell align="right">Carbs (g)</CustomTableCell>
                                <CustomTableCell align="right">Protein (g)</CustomTableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            <TableRow className={classes.row} >
                                <CustomTableCell component="th" scope="row">
                                    測試
                                </CustomTableCell>
                                <CustomTableCell align="right">測試</CustomTableCell>
                                <CustomTableCell align="right">測試</CustomTableCell>
                                <CustomTableCell align="right">測試</CustomTableCell>
                                <CustomTableCell align="right">
                                    <Button className={classes.action}>
                                        <EditIcon />
                                    </Button>
                                    <Button className={classes.action}>
                                        <DeleteIcon />
                                    </Button>
                                </CustomTableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>
            </DialogContent>

        );
    }
}

DetailedContent.defaultProps = {
    name: "Loading...",
    description: "Loading...",
    types: {},
    special: []
}

export default withStyles(styles)(DetailedContent);