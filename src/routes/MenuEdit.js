import React from 'react';
import classNames from 'classNames';
import { enquireScreen } from 'enquire-js';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import { connect } from 'dva';
import _ from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import Header from '../components/Header';
import MenuBar from '../components/MenuBar';
import MySnackbarContent from '../components/MyMaterial/MaterialSnackbarContent'; //material-ui官網上提供的封包好的訊息顯示組件，已修改成可自由傳入參數
import PageChage from '../components/PageChage';
import OrderDetails from '../components/OrderDetails';
import OrderEdit from '../components/OrderEdit';
import MenuList from '../components/MenuList';
import MenuDetail from '../components/MenuDetail';

const styles = theme => {
  return ({
    PosHome: {
      width: "100%",
      height: "100%",
      float: "left",
      margin: 0,
      backgroundColor: grey[200] //"#f7f7f7",
    },
    menuBar: {
      width: "100%",
      backgroundColor: green[600],
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
      width: "calc(100% - 260px)",
    },
    header: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      justifyContent: 'flex-end',
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
      MenuItems,
      Tageid,
      TageIdChange,
    } = this.props;

    return (
      <div className={classes.PosHome}>
        MenuEdit
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
