import React from 'react';
import Detailed from './Detailed';


class MenuDetail extends React.Component {

  componentDidMount() {
    this.props.SetItems();
  }

  render() {
    const { open, StateChange, menuItems, Item, SetOrders, isMobile } = this.props;
    return (
      <span>
        <Detailed
          open={open}
          StateChange={StateChange}
          menuItems={menuItems}
          Item={Item}
          SetOrders={SetOrders}
          isMobile={isMobile} />
      </span>
    );
  }
}
export default (MenuDetail);