import React from 'react';
import Detailed from '../components/Detailed';


class OrderEdit extends React.Component {
  render() {
    const {
      open,
      StateChange,
      menuItems,
      Item,
      SetOrders,
    } = this.props;
    // console.log(this.props, "OrderEdit");
    return (
      <span>
        <Detailed
          open={open}
          StateChange={StateChange}
          menuItems={menuItems}
          Item={Item}
          edit={true}
          SetOrders={SetOrders}
        />
      </span>
    );
  }
}

export default OrderEdit;