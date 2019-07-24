import React from 'react';
import classNames from 'classNames';
import { connect } from 'dva';
import _ from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import Heade from '../layouts/Heade';
import MySnackbarContent from '../components/MySnackbarContent'; //material-ui官網上提供的封包好的訊息顯示組件，已修改成可自由傳入參數
import PageChage from '../layouts/PageChage';
import OrderDetails from '../layouts/OrderDetails';
import OrderEdit from '../layouts/OrderEdit';
import MenuList from '../layouts/MenuList';
import MenuDetail from '../layouts/MenuDetail';

const styles = theme => {
  console.log(theme.transitions);
  return ({
    PosHome: {
      width: "100%",
      height: "100%",
      float: "left",
      margin: 0,
    },
    head: {
      width: "100%",
      right: "unset",
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    main: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: "100%",
    },
    contentShift: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      width: "82.5%",
    },
  })
};

class PosHome extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      variant: "success",
      message: "送單成功！",
      left: false,
      right: false,
    }
  }
  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };

  SetState = (state) => {
    this.setState(state);
  }

  toggleDrawer = (anchor, open) => () => {
    this.setState({
      [anchor]: open,
    });
  };

  render() {
    const {
      classes,
      SetItems,
      MenuDetailOpen,
      MenuDetailStateChange,
      MenuSelectItemChange,
      MenuSelectItem,
      MenuItems,
      Tageid,
      TageIdChange,
      OrderDetailsOpen,
      OrderDetailsStateChange,
      OrderSelectItemChange,
      OrderSelectItem,
      OrderDetail,
      OderEditOpen,
      OderEditStateChange,
      SetOrders,
      PATCH_Orders,
      tableNumber,
      SelectTableNumber
    } = this.props;
    /*
    classNames(classes.PosHome, {
            [classes.contentShift]: this.state.right,
          })
    */
    return (
      <div className={classes.PosHome}>
        <Heade
          tageid={Tageid}
          TageIdChange={TageIdChange}
          menuItems={MenuItems}
          toggleDrawer={this.toggleDrawer}
          className={classNames(classes.head, {
            [classes.contentShift]: this.state.right,
          })}
          right={this.state.right}
        />
        <div className={classNames(classes.main, {
          [classes.contentShift]: this.state.right,
        })}>
          <MenuList
            menuItems={MenuItems}
            tageid={Tageid}
            TageIdChange={TageIdChange}
            open={MenuDetailOpen}
            StateChange={MenuDetailStateChange}
            MenuSelectItemChange={MenuSelectItemChange}
          />
        </div>
        <OrderDetails
          open={OrderDetailsOpen}
          menuItems={MenuItems}
          orderDetail={OrderDetail}
          OrderDetailsStateChange={OrderDetailsStateChange}
          OderEditStateChange={OderEditStateChange}
          OrderSelectItemChange={OrderSelectItemChange}
          SetOrders={SetOrders}
          PATCH_Orders={PATCH_Orders}
          SetState={this.SetState}
          handleChange={SelectTableNumber}
          tableNumber={tableNumber}
          toggleDrawer={this.toggleDrawer}
          right={this.state.right}
        />
        <MenuDetail
          SetItems={SetItems}
          open={MenuDetailOpen}
          StateChange={MenuDetailStateChange}
          menuItems={MenuItems}
          Item={MenuSelectItem}
          SetOrders={SetOrders}
        />
        <OrderEdit
          open={OderEditOpen}
          menuItems={MenuItems}
          orderDetail={OrderDetail}
          StateChange={OderEditStateChange}
          Item={OrderSelectItem}
          SetOrders={SetOrders}
        />
        <MySnackbarContent
          open={this.state.open}
          variant={this.state.variant}
          message={this.state.message}
          handleClose={this.handleClose}
        />
        <PageChage
          open={this.state.left}
          toggleDrawer={this.toggleDrawer} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  MenuDetailOpen: _.get(state, "menu.open"),
  MenuItems: _.get(state, "menu.items"),
  Tageid: _.get(state, "menu.tageId"),
  MenuSelectItem: _.get(state, "menu.selectItem"),
  OrderDetailsOpen: _.get(state, "order.detailsOpen"),
  OderEditOpen: _.get(state, "order.editOpen"),
  OrderDetail: _.get(state, "order.order"),
  OrderSelectItem: _.get(state, "order.selectItem"),
  tableNumber: _.get(state, "order.tableNumber"),
});

const mapDispatchToProps = (dispatch) => ({
  MenuDetailStateChange: (payload) => dispatch({ type: 'menu/StateChange', payload }),
  TageIdChange: (payload) => dispatch({ type: 'menu/TageIdChange', payload }),
  MenuSelectItemChange: (payload) => dispatch({ type: 'menu/SelectItemChange', payload }),
  SetItems: (payload) => dispatch({ type: 'menu/SetItems', payload }),
  OrderDetailsStateChange: (payload) => dispatch({ type: 'order/DetailsStateChange', payload }),
  OderEditStateChange: (payload) => dispatch({ type: 'order/EditStateChange', payload }),
  OrderSelectItemChange: (payload) => dispatch({ type: 'order/SelectItemChange', payload }),
  SetOrders: (payload) => dispatch({ type: 'order/SetOrders', payload }),
  PATCH_Orders: (payload) => dispatch({ type: 'order/PATCH_Orders', payload }),
  SelectTableNumber: (payload) => dispatch({ type: 'order/SelectTableNumber', payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PosHome));
