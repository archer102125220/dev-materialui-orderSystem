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
    minWidth: 120,
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

  options(toTal, piece) {
    let option = []
    for (let i = 1; i <= toTal; i++) {
      option.push(<option key={i} value={i} > {i + piece}</option >);
    }
    return option;
  }



  render() {
    const { classes, tableNumber, toTal, piece, placeholder, startValue } = this.props;

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
              this.options(toTal, piece)
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
  handleChange: () => { },
}

export default withStyles(styles)(MaterialSelect);