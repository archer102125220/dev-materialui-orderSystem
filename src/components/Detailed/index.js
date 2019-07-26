import React from 'react';
import DetailedContent from './DetailedContent';
import DetailedOption from './DetailedOption';
import MaterialCancelComplete from '../MyMaterial/MaterialCancelComplete';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';


const CustomDialog = withStyles(theme => ({ //複寫material樣式
  paper: {
    maxWidth: "1300px",
  },
}))(Dialog);

class Detailed extends React.Component {
  constructor() {
    super();
    this.state = {
      tempItem: {},
    }
  }

  tempItemUpData(ItemUpData) {
    const { tempItem } = this.state;
    const upDataName = Object.keys(ItemUpData);
    upDataName.map(val =>
      this.setState({ tempItem: { ...tempItem, [val]: ItemUpData[val] } })
    )
  }

  SetTempItem = (States = {}, Back = () => { }) => {
    this.setState(States, () => {
      Back(this.state);
    });
    this.tempItemUpData(States);
  }

  shouldComponentUpdate(nextProps, nextState) {
    //react 生命週期 https://medium.com/@shihKai/react-js-%E5%85%83%E4%BB%B6%E7%94%9F%E5%91%BD%E9%80%B1%E6%9C%9F%E5%AD%B8%E7%BF%92-ff1a2fabb030
    const { Item, menuItems } = nextProps;
    if (Item !== this.state.tempItem && nextProps !== this.props) {
      const tempItem = Item;
      const types = (typeof (Item.class) !== "undefined") ?
        menuItems.filter(val => Item.type === val.type)[0].class
        :
        [],
        count = (typeof (Item.count) !== "undefined" && typeof (Item.class) === "string") ?
          Item.count
          :
          1;
      this.setState({ tempItem: { ...tempItem, class: types[0], count } });
    }


    return nextState !== this.state || nextProps !== this.props;

  }

  componentWillMount() {
    let { ItemCount, tempItem } = this.props;
    this.setState({ count: ItemCount, tempItem });
  }

  render() {
    const {
      open,
      StateChange,
      edit,
      SetOrders,
      menuItems,
      clear,
      Item,
      orders,
      OderEditStateChange,
      SelectItemChange,
      PATCH_Orders,
      SetState,
      tableNumber,
      isMobile,
      VATNumber,
    } = this.props;

    const { tempItem } = this.state;

    const types = (typeof (Item.class) !== "undefined") ?
      menuItems.filter(val => Item.type === val.type)[0].class :
      [],
      special = (typeof (menuItems[0]) !== "undefined" && typeof (Item.type) !== "undefined") ?
        menuItems.filter(val => Item.type === val.type)[0].special :
        [],
      name = (typeof (Item.name) !== "undefined") ?
        Item.name :
        clear === true ?
          "請確認訂單明細" :
          CircularProgress,
      description = (typeof (Item.description) !== "undefined") ?
        Item.description :
        clear === true ?
          "" :
          CircularProgress,
      cancel = (edit === true) ? '取消修改' : (clear === true) ? '返回' : '取消訂單',
      complete = (edit === true) ?
        '完成修改' :
        (clear === true) ?
          '確認訂單' :
          '加入訂單',
      ItemCount = (typeof (Item.count) !== "undefined" && typeof (Item.class) === "string") ?
        Item.count :
        1,
      ItemClass = (typeof (Item.class) !== "undefined" && typeof (Item.class) === "string") ?
        Item.class :
        types[0],
      ItemSpecial = (typeof (Item.special) !== "undefined" && typeof (Item.class) === "string") ?
        Item.special :
        [],
      CancelActions = () => {
        if (clear === false)
          (window.confirm("確定要取消嗎?") === true) && StateChange(false)
        else
          StateChange(false);

      }
      ,
      CompleteActions = () => {
        StateChange(false);
        if (clear === false) {
          SetOrders(tempItem);
        } else {
          orders.tableNumber = tableNumber;
          orders.VATNumber = VATNumber;
          PATCH_Orders(orders);
          SetState({ open: true, variant: "success", message: "送單成功！" });
        }
      };
      
    return (
      <CustomDialog open={open} aria-labelledby="form-dialog-title" >
        <DialogTitle id="form-dialog-title">{name}</DialogTitle>
        {
          clear ?
            <DetailedContent
              orderDetail={orders}
              orderHeader={["餐點名稱", "特別需求", "數量", "總價", "操作"]}
              SetOrders={SetOrders}
              OderEditStateChange={OderEditStateChange}
              SelectItemChange={SelectItemChange}
              tableNumber={tableNumber}
              isMobile={isMobile}
              VATNumber={VATNumber}
            />
            :
            <DetailedOption
              description={description}
              ItemCount={ItemCount}
              ItemSpecial={ItemSpecial}
              ItemClass={ItemClass}
              types={types}
              special={special}
              tempItem={tempItem}
              tempItemUpData={this.tempItemUpData}
              SetStates={this.SetTempItem}
              isMobile={isMobile}
            />
        }

        <MaterialCancelComplete cancel={cancel} complete={complete} disabled={clear===true && orders.length === 0} CancelActions={CancelActions} CompleteActions={CompleteActions} />
      </CustomDialog>
    );
  }
}

Detailed.defaultProps = {
  open: false,
  clear: false,
  edit: false,
  StateChange: () => { },
  SetOrders: () => { },
  menuItems: [],
  orders: [],
  Item: {},
}

export default Detailed;