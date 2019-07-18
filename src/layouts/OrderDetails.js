import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import OrderItem from '../components/OrderItem';
import Button from '@material-ui/core/Button';
import Detailed from '../components/Detailed';

const styles = {
  DetailBody: {
    width: "15%",
    height: '100%',
  },
  OredrTitle: {
    height: '3%',
  },
  OrderList: {
    height: '80%',
  },
  OrderCount: {
    width: "95%",
    textAlign: "right",
  }
};

class OrderDetails extends React.Component {

  render() {
    const {
      classes,
      open,
      menuItems,
      OrderDetailsStateChange,
      orderDetail,
      OderEditStateChange,
      OrderSelectItemChange,
      SetOrders,
    } = this.props;
    
    return (
      <div className={classes.DetailBody}>
        <List className={classes.OredrTitle}>
          訂單明細
          </List>
        <Divider />
        <List className={classes.OrderList}>
          <OrderItem
            orderDetail={orderDetail}
            StateChange={OderEditStateChange}
            SelectItemChange={OrderSelectItemChange}
            SetOrders={SetOrders}
          />
        </List>
        <Detailed
          open={open}
          menuItems={menuItems}
          orderDetail={orderDetail}
          StateChange={OrderDetailsStateChange}
          clear={true}
        />
        <span className={classes.OrderCount} >
          <List className={classes.OrderCount}>
            ${orderDetail.reduce(((Previous, NowValue) => Previous + NowValue.count * NowValue.price), 0)}
          </List>
          <List className={classes.OrderCount}>
            <Button variant="contained" color="primary" onClick={(e) => OrderDetailsStateChange(true)} >送出訂單</Button>
          </List>
        </span>
      </div>
    );
  }
}

export default withStyles(styles)(OrderDetails);
