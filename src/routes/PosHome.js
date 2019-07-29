import React from 'react';
import classNames from 'classNames';
import { enquireScreen } from 'enquire-js';
import { connect } from 'dva';
import _ from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import Heade from '../layouts/Heade';
import MySnackbarContent from '../components/MyMaterial/MaterialSnackbarContent'; //material-ui官網上提供的封包好的訊息顯示組件，已修改成可自由傳入參數
import PageChage from '../layouts/PageChage';
import OrderDetails from '../layouts/OrderDetails';
import OrderEdit from '../layouts/OrderEdit';
import MenuList from '../layouts/MenuList';
import MenuDetail from '../layouts/MenuDetail';

const styles = theme => {
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
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    main: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: "100%",
    },
    contentShift: {
      transition: theme.transitions.create('width', {
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
      isMobile: false,
    }
  }

  componentDidMount = () => {
    //enquire-js參考文件  https://github.com/alibaba/ice/wiki/%E5%93%8D%E5%BA%94%E5%BC%8F%E6%96%B9%E6%A1%88
    this.enquireHandler = enquireScreen(mobile => {
      this.setState({
        isMobile: mobile ? true : false,
      });
    }, "(max-width: 1024px)");
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
      SelectTableNumber,
      VATNumber,
      SetVATNumber,
      right,
      isMobile,
      left,
    } = this.props;
    
    return (
      <div className={classes.PosHome}>
        <Heade
          tageid={Tageid}
          TageIdChange={TageIdChange}
          menuItems={MenuItems}
          toggleDrawer={this.toggleDrawer}
          className={classNames(classes.head, {
            [classes.contentShift]: (this.state.right && !this.state.isMobile) ? true : false,
          })}
          right={this.state.right}
          isMobile={this.state.isMobile}
        />
        <div className={classNames(classes.main, {
          [classes.contentShift]: (this.state.right && !this.state.isMobile) ? true : false,
        })}>
          <MenuList
            menuItems={MenuItems}
            tageid={Tageid}
            TageIdChange={TageIdChange}
            open={MenuDetailOpen}
            StateChange={MenuDetailStateChange}
            MenuSelectItemChange={MenuSelectItemChange}
            isMobile={this.state.isMobile}
          />
          
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
          isMobile={this.state.isMobile}
          VATNumber={VATNumber}
          SetVATNumber={SetVATNumber}
        />
        
        <MenuDetail
          SetItems={SetItems}
          open={MenuDetailOpen}
          StateChange={MenuDetailStateChange}
          menuItems={MenuItems}
          Item={MenuSelectItem}
          SetOrders={SetOrders}
          isMobile={this.state.isMobile}
        />

        <OrderEdit
          open={OderEditOpen}
          menuItems={MenuItems}
          orderDetail={OrderDetail}
          StateChange={OderEditStateChange}
          Item={OrderSelectItem}
          SetOrders={SetOrders}
          isMobile={this.state.isMobile}
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
  VATNumber: _.get(state, "order.VATNumber"),
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
  SetVATNumber: (payload) => dispatch({ type: 'order/SetVATNumber', payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PosHome));
