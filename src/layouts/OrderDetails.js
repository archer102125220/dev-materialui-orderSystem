import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import OrderItem from '../components/OrderItem';
import Button from '@material-ui/core/Button';
import Detailed from '../components/Detailed';
import MaterialSelect from '../components/MaterialSelect';
import MyDrawer from '../components/MyDrawer';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import IconButton from '@material-ui/core/IconButton';

const styles = {
  DetailBody: {
    width: "100%",
    height: '100%',
  },
  OredrTitle: {
    height: '3%',
    display: "-webkit-box",
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
  },
  IconButton: {
    paddingTop: 0,
    marginLeft: 10,
    width: 12,
    height: 25,
  },
  MyDrawer:{
    width:"17.5%",
  },
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
      toggleDrawer,
      right
    } = this.props;

    return (
      <MyDrawer
        toggleDrawer={toggleDrawer}
        open={right}
        variant="persistent"
        anchor="right"
        keyDownClose={true}
        myClasses={{
          paper: classes.MyDrawer,
        }}
      >
        <div
          className={classes.DetailBody}
        >
          <List className={classes.OredrTitle}>
            <IconButton className={classes.IconButton} onClick={toggleDrawer("right", false)}>
              <ChevronRightIcon />
            </IconButton>
            <ListItemText primary="訂單明細" />
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
              <Button variant="contained" disabled={orderDetail.length === 0 || tableNumber === ""} color="primary" onClick={(e) => OrderDetailsStateChange(true)} >送出訂單</Button>
            </List>
          </span>
        </div>
      </MyDrawer>
    );
  }
}

OrderDetails.defaultProps = {
  orderDetail: [],
}

export default withStyles(styles)(OrderDetails);
