import React from 'react';
import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 100,
  },
});

class MaterialSelect extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps !== this.props) {
      const { defValue, tableNumber } = nextProps;
      if (defValue && (tableNumber === "" || tableNumber === 0)) this.props.handleChange(defValue);
    }

    return nextProps !== this.props;
  }

  handleChange = event => {
    this.props.handleChange(event.target.value);
  };

  options(toTal, affix) {
    let option = [];
    if (typeof (toTal) === "object" && !Array.isArray(toTal)) {
      for (var key in toTal) option.push(<option key={key} value={toTal[key]} > {key + affix}</option>);
    } else if (Array.isArray(toTal)) {
      for (let i = 0; i < toTal.length; i++) option.push(<option key={i} value={i} > {toTal[i] + affix}</option>);
    } else if (!isNaN(Number(toTal)) && isFinite(toTal)) {
      toTal = Number(toTal);
      for (let i = 1; i <= toTal; i++) option.push(<option key={i} value={i} > {i + affix}</option>);
    } else if (isNaN(toTal) &&
      (
        (toTal.charCodeAt() >= 65 && toTal.charCodeAt() <= 90) ||
        (toTal.charCodeAt() >= 97 && toTal.charCodeAt() <= 122)
      )
    ) {
      toTal = toTal.charCodeAt();
      let stat = (toTal <= 90) ? 65 : 97;
      for (let i = stat; i <= toTal; i++) option.push(<option key={i} value={i} > {String.fromCharCode(i) + affix}</option>);
    }

    return option;
  }



  render() {
    const { classes,
      tableNumber,
      toTal,
      affix,
      placeholder,
      startValue } = this.props;

    return (
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="tableNumber-native-helper">{(placeholder) ? placeholder : "請選擇..."}</InputLabel>
          <NativeSelect
            value={tableNumber}
            onChange={this.handleChange}
            input={<Input name="tableNumber" id="tableNumber-native-helper" />}
          >

            {
              startValue ?
                <option value={startValue[0]}>{startValue[1]}</option> :
                <option value="" />
            }
            {
              this.options(toTal, affix)
            }
          </NativeSelect>
        </FormControl>
      </div>
    );
  }
}

MaterialSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

MaterialSelect.defaultProps = {
  defValue: "",
  toTal: 0,
  affix: "",
  handleChange: () => { },
}

export default withStyles(styles)(MaterialSelect);