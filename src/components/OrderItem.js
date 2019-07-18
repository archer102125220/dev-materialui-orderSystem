import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  chip: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    width: "100%",
    fontSize: "14px",
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.2), 0px 2px 1px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)",
  },
});

class OrderItem extends React.Component {
  render() {
    const { classes, StateChange, orderDetail, SelectItemChange, SetOrders } = this.props;

    return (
      <div>
        {
          orderDetail.length !== 0 ?
            orderDetail.map((val, key) => <Chip
              className={classes.chip}
              key={key}
              label={`${val.name + val.class} * ${val.count}`}
              onClick={() => {
                val.key = key;
                SelectItemChange(val);
                StateChange(true);
              }}
              onDelete={() => {
                window.confirm("確定要移除嗎?") === true && SetOrders(orderDetail.RemoveBykey(key));//自定義RemoveBykey方法
              }}
            />
            )
            :
            <Paper className={classes.root} >
              <Typography variant="h6" component="h5">
                請選擇餐點...
              </Typography>
            </Paper>
        }
      </div>
    );
  }
};

export default withStyles(styles)(OrderItem);
