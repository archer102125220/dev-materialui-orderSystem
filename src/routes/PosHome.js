import React from 'react';
import { connect } from 'dva';
import _ from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import Header from '../layouts/Header';
import OrderDetails from '../layouts/OrderDetails';
import OrderEdit from '../layouts/OrderEdit';
import MenuList from '../layouts/MenuList';
import MenuDetail from '../layouts/MenuDetail';

const styles = {
  PosHome: {
    width: "100%",
    height: "100%",
    display: "flex",
    margin: 0
  },
};

class PosHome extends React.Component {
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
      SetOrders
    } = this.props;
    // console.log(this.props, "PosHome");
    return (
      <div className={classes.PosHome}>
        {
          // <Header />
        }
        <MenuList
          menuItems={MenuItems}
          tageid={Tageid}
          TageIdChange={TageIdChange}
          open={MenuDetailOpen}
          StateChange={MenuDetailStateChange}
          MenuSelectItemChange={MenuSelectItemChange}
        />
        <OrderDetails
          open={OrderDetailsOpen}
          menuItems={MenuItems}
          orderDetail={OrderDetail}
          OrderDetailsStateChange={OrderDetailsStateChange}
          OderEditStateChange={OderEditStateChange}
          OrderSelectItemChange={OrderSelectItemChange}
          SetOrders={SetOrders}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PosHome));