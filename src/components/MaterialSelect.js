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
  state = {
    tableNumber: '',
    // name: 'hai',
    // labelWidth: 0,
  };

  //   componentDidMount() {
  //     this.setState({
  //       labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
  //     });
  //   }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
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
    const { classes, tableNumber, toTal, piece, placeholder } = this.props;

    return (
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="tableNumber-native-helper">{(placeholder) ? placeholder : "請選擇..."}</InputLabel>
          <NativeSelect
            value={tableNumber}
            onChange={this.handleChange('tableNumber')}
            input={<Input name="tableNumber" id="tableNumber-native-helper" />}
          >
            <option value="" />
            {
              this.options(toTal, piece)
              /*
            <option value={1}>1號桌</option>
            <option value={2}>2號桌</option>
            <option value={3}>3號桌</option>
            <option value={4}>4號桌</option>
            <option value={5}>5號桌</option>
              */
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

export default withStyles(styles)(MaterialSelect);