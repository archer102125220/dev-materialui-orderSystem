
import key from 'keymaster';

export default {

  namespace: 'order',

  state: {
    detailsOpen: false,
    order: [],
    selectItem: {},
    editOpen: false,
  },


  subscriptions: {
    keyboardEventer({ dispatch, history }) {
      key('esc', () => {
        dispatch({ type: 'DetailsStateChange', payload: false });
        dispatch({ type: 'EditStateChange', payload: false });
      });
    },
  },

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
        let ctrl = false;
        order = order.map(val => {
          if (val.type === payload.type &&
            val.name === payload.name &&
            val.class === payload.class &&
            val.special.ArrayComparison(payload.special)) { //ArrayComparison 自己定義的方法
            ctrl = true;
            payload.count = (payload.action === "add") ? payload.count + val.count : payload.count
            return payload;
          } else {
            return val;
          }
        });
        payload.action = "";
        if (ctrl === false) order.push(payload);
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
  },
};