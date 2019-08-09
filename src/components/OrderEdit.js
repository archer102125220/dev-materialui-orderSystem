import React from 'react';
import Detailed from './Detailed';


class OrderEdit extends React.Component {
  render() {
    const {
      open,
      StateChange,
      menuItems,
      Item,
      SetOrders,
      isMobile
    } = this.props;
    
    return (
      <span>
        <Detailed
          open={open}
          StateChange={StateChange}
          menuItems={menuItems}
          Item={Item}
          edit={true}
          SetOrders={SetOrders}
          isMobile={isMobile}
        />
      </span>
    );
  }
}

export default OrderEdit;