import React from 'react';
import Detailed from '../components/Detailed';


class MenuDetail extends React.Component {

  componentDidMount() {
    this.props.SetItems();
  }

  render() {
    const { open, StateChange, menuItems,Item,SetOrders } = this.props;
    return (
      <span>
        <Detailed open={open} StateChange={StateChange} menuItems={menuItems} Item={Item} SetOrders={SetOrders} />
      </span>
    );
  }
}
export default (MenuDetail);