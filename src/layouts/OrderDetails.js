import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import OrderItem from '../components/OrderItem';
import Button from '@material-ui/core/Button';
import Detailed from '../components/Detailed';
import MaterialSelect from '../components/MyMaterial/MaterialSelect';
import MaterialDrawer from '../components/MyMaterial/MaterialDrawer';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
  DetailBody: {
    width: "100%",
    height: '100%',
  },
  OredrTitle: {
    height: '3%',
    display: "-webkit-box",
  },
  OrderList: {
    height: '66%',
    width: '100%',
    overflow: 'auto',
  },
  OrderCount: {
    width: "52%",
    float: "left",
    paddingTop: "20%",
    paddingBottom: 0,
  },
  OrderTable: {
    width: "45%",
    float: "left",
    paddingBottom: 0,
  },
  OrderButton: {
    width: "95%",
    float: "left",
  },
  OrderSpan: {
    width: "100%",
    textAlign: "right",
  },
  OrderText: {
    width: "100%",
    float: "left",
    paddingTop: 0,
  },
  IconButton: {
    paddingTop: 0,
    marginLeft: 10,
    width: 12,
    height: 25,
  },
  MyDrawer: {
    width: "17.5%",
  },
  textField: {
    margin: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    float: "left",
    width: "92%",
  },
});

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
      right,
      isMobile,
      VATNumber,
      SetVATNumber,
    } = this.props;

    return (
      <MaterialDrawer
        toggleDrawer={toggleDrawer}
        open={right}
        variant={!isMobile && "persistent"}
        anchor="right"
        myClasses={{
          paper: !isMobile && classes.MyDrawer,
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
            isMobile={isMobile}
            VATNumber={VATNumber}
          />
          <Divider />
          <span className={classes.OrderSpan} >
            <List className={classes.OrderTable}>
              <MaterialSelect tableNumber={tableNumber} defValue="外帶" startValue={["外帶", "外帶"]} toTal={10} piece="號桌" placeholder="請選擇桌號..." handleChange={handleChange} />
            </List>
            <List className={classes.OrderCount}>
              總價：  ${orderDetail.reduce(((Previous, NowValue) => Previous + NowValue.count * NowValue.price), 0)}
            </List>
            <List className={classes.OrderText}>
              <TextField
                id="standard-name"
                label="請輸入統一編號..."
                className={classes.textField}
                value={VATNumber}
                onChange={event => { SetVATNumber(event.target.value) }}
                margin="normal"
              />
            </List>
            <List className={classes.OrderButton}>
              <Button variant="contained" disabled={orderDetail.length === 0} color="primary" onClick={(e) => OrderDetailsStateChange(true)} >送出訂單</Button>
            </List>
          </span>
        </div>
      </MaterialDrawer>
    );
  }
}

OrderDetails.defaultProps = {
  orderDetail: [],
}

export default withStyles(styles)(OrderDetails);
