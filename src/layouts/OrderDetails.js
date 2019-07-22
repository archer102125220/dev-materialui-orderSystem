import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import OrderItem from '../components/OrderItem';
import Button from '@material-ui/core/Button';
import Detailed from '../components/Detailed';
import MaterialSelect from '../components/MaterialSelect';

const styles = {
  DetailBody: {
    width: "15%",
    height: '100%',
  },
  OredrTitle: {
    height: '3%',
  },
  OrderList: {
    height: '75%',
  },
  OrderCount: {
    width: "52%",
    float: "left",
    paddingTop: "20%",
  },
  OrderTable: {
    width: "45%",
    float: "left",
  },
  OrderButton: {
    width: "95%",
    float: "left",
  },
  OrderSpan: {
    width: "100%",
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
      PATCH_Orders,
      SetState,
      handleChange,
      tableNumber,
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
          orders={orderDetail}
          StateChange={OrderDetailsStateChange}
          OderEditStateChange={OderEditStateChange}
          SelectItemChange={OrderSelectItemChange}
          clear={true}
          SetOrders={SetOrders}
          PATCH_Orders={PATCH_Orders}
          SetState={SetState}
          tableNumber={tableNumber}
        />
        <Divider />
        <span className={classes.OrderSpan} >
          <List className={classes.OrderTable}>
            <MaterialSelect tableNumber={tableNumber} toTal={10} piece="號桌" placeholder="請選擇桌號..." handleChange={handleChange} />
          </List>
          <List className={classes.OrderCount}>
            總價：  ${orderDetail.reduce(((Previous, NowValue) => Previous + NowValue.count * NowValue.price), 0)}
          </List>
          <List className={classes.OrderButton}>
            <Button variant="contained" disabled={orderDetail.length === 0 || tableNumber===""} color="primary" onClick={(e) => OrderDetailsStateChange(true)} >送出訂單</Button>
          </List>
        </span>
      </div>
    );
  }
}

OrderDetails.defaultProps = {
  orderDetail: [],
}

export default withStyles(styles)(OrderDetails);
