import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const styles = theme => ({
  chip: {
    margin: theme.spacing.unit,
    width: "80%",
    borderRradius: 5
  },
});

class OrderItem extends React.Component {
  render() {
    const { classes, StateChange, orderDetail, SelectItemChange, SetOrders } = this.props;
    // console.log(this.props ,"OrderItem");
    return (
      <div>
        {
          orderDetail.map((val, key) => <Chip
            key={key}
            label={`${val.name + val.class} * ${val.count}`}
            onClick={() => {
              SelectItemChange(val);
              StateChange(true);
            }}
            onDelete={() => {
              window.confirm("確定要移除嗎?") === true && SetOrders(orderDetail.RemoveBykey(key));
            }}
            className={classes.chip}
          />
          )
        }
      </div>
    );
  }
};

export default withStyles(styles)(OrderItem);
