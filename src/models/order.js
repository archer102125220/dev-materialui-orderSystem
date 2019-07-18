
import key from 'keymaster';

export default {

  namespace: 'order',

  state: {
    detailsOpen: false,
    order: [
      {
        name: "歐姆蛋",
        class: "品項A吐司",
        count: 3,
        price: 50,
        type: "品項A",
        description: "歐姆蛋產品描述",
        special: [
          "品項A特需1",
          "品項A特需2",
          "品項A特需6",
          "品項A特需7",
        ]
      },
      {
        name: "培根蛋",
        class: "品項E漢堡",
        count: 4,
        price: 45,
        type: "品項E",
        description: "培根蛋產品描述",
        special: [
          "品項E特需1",
          "品項E特需2",
          "品項E特需5",
          "品項E特需7",
        ]
      }
    ],
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
              val.special === payload.special) {
            ctrl = true;
            payload.count = (payload.action === "add") ? payload.count + val.count : payload.count
            payload.action = "";
            return payload;
          } else {
            return val;
          }
        });
        if (ctrl === false) order.push(payload);
      } else {
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
