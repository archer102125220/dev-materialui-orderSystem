import React from 'react';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';


class DetailedButton extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    //react 生命週期 https://medium.com/@shihKai/react-js-%E5%85%83%E4%BB%B6%E7%94%9F%E5%91%BD%E9%80%B1%E6%9C%9F%E5%AD%B8%E7%BF%92-ff1a2fabb030
    // console.log(this.props, 'shouldComponentUpdate_this.props');
    // console.log(nextProps, 'shouldComponentUpdate_nextProps');
    // console.log(this.state, 'shouldComponentUpdate_this.state');
    // console.log(nextState, 'shouldComponentUpdate_nextState');
    // console.log(nextProps !== this.props, 'nextProps !== this.props');

    return nextProps !== this.props;//若新的props跟舊的props同才做渲染更新，以防無限渲染
  }

  render() {
    // console.log(this.props, 'render');
    // console.log(this.props, 'Detailed');
    const {
      cancel,
      complete,
      CancelActions,
      CompleteActions
    } = this.props;
    // console.log(this.props,"MunItem");
    return (
      <div>
        <DialogActions>
          <Button onClick={() => { CancelActions() }} color="primary">
            {cancel}
          </Button>
          <Button variant="contained" color="primary" onClick={() => { CompleteActions() }} >
            {complete}
          </Button>
        </DialogActions>
      </div>
    );
  }
}

DetailedButton.defaultProps = {
  cancel: "取消訂單",
  complete: "加入訂單",
  CancelActions: () => { },
  CompleteActions: () => { },
}

export default DetailedButton;