
import * as order from '../services/order';
import key from 'keymaster';

export default {

  namespace: 'header',

  state: {
    detailsOpen: false,
    order: [],
    tableNumber: "",
    selectItem: {},
    editOpen: false,
    VATNumber: "",
    right: false,
  },


  subscriptions: {
    keyboardEventer({ dispatch, history }) {
      key('esc', () => {
        dispatch({ type: 'DetailsStateChange', payload: false });
        dispatch({ type: 'EditStateChange', payload: false });
      });
    },
  },
  //PATCH_orderList
  effects: {
    *DetailsStateChange({ payload }, { call, put }) {
      yield put({ type: 'details_state_save', payload });
    },
    *SetOrders({ payload }, { call, put }) {
      yield put({ type: 'order_save', payload });
    },
    *EditStateChange({ payload }, { call, put }) {
      yield put({ type: 'edit_state_save', payload });
    },
    *SelectItemChange({ payload }, { call, put }) {
      yield put({ type: 'select_id_save', payload });
    },
    *SelectTableNumber({ payload }, { call, put }) {
      yield put({ type: 'select_table_number_save', payload });
    },
    *SetVATNumber({ payload }, { call, put }) {
      yield put({ type: 'VAT_number_save', payload });
    },
    *PATCH_Orders({ payload }, { call, put }) {
      try {
        yield call(order.PATCH_orderList, 1, payload);
        yield put({ type: 'PATCH_save', payload: [] });
        yield put({ type: 'select_table_number_save', payload: "" });
        yield put({ type: 'VAT_number_save', payload: "" });
      } catch (e) {
        console.log(e);
      }
    },
  },

  reducers: {
    details_state_save(state, { payload }) {
      return {
        ...state,
        detailsOpen: payload
      };
    },
    order_save(state, { payload }) {
      let order = state.order;
      if (payload.length === undefined) {
        let upData = false,
          coverKey = -1;
        order = order.map((val, key, arr) => {
          if (payload.key === key) {
            upData = true;
            return payload;
          } else {
            return val;
          }
        }).map((value, key, arr) => {
          let val_key = -1;
          let ctrl = arr.some((val, index) => {
            const retbol = (val.type === value.type &&
              val.name === value.name &&
              val.class === value.class &&
              val.special.ArrayComparison(value.special) &&
              key !== index);
            val_key = retbol && index;
            return retbol;
          });
          if (ctrl) {
            coverKey = key;
            value.count = value.count + arr[val_key].count;
          }
          return value;
        });
        upData = order.some(val => (val.type === payload.type &&
          val.name === payload.name &&
          val.class === payload.class &&
          val.special.ArrayComparison(payload.special)));
        if (coverKey !== -1) order = order.RemoveBykey(coverKey);
        payload.action = "";
        if (upData === false) order.push(payload);
      } else {
        payload.action = "";
        order = payload;
      }
      return {
        ...state,
        order
      };
    },
    edit_state_save(state, { payload }) {
      return {
        ...state,
        editOpen: payload
      };
    },
    select_id_save(state, { payload }) {
      return {
        ...state,
        selectItem: payload
      };
    },
    PATCH_save(state, { payload }) {
      return {
        ...state,
        order: payload
      };
    },
    select_table_number_save(state, { payload }) {
      return {
        ...state,
        tableNumber: payload
      };
    },
    VAT_number_save(state, { payload }) {
      return {
        ...state,
        VATNumber: payload
      };
    },
  },
};
