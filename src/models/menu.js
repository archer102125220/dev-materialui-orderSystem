
import * as menuDetail from '../services/menuDetail';
import key from 'keymaster';

export default {

  namespace: 'menu',

  state: {
    open: false,
    items: [],
    selectItem: {},
    tageId: 0,
  },

  subscriptions: {
    keyboardEventer({ dispatch, history }) {
      key('esc', () => {
        dispatch({ type: 'StateChange', payload: false });
      });
    },
  },

  effects: {
    *StateChange({ payload }, { call, put }) {
      yield put({ type: 'state_save', payload });
    },
    *SetItems({ payload }, { call, put, select }) {  //select可用來選擇當前的state
      //方法一： const open = yield select(state => state.open)    //这里就获取到了当前state中的数据num
      //方式二： const open = yield select(({open}) =>open)
      //方式三： const open = yield select(_ =>_.open)
      // console.log(open);
      try {
        const items = yield call(menuDetail.Get_menuLists);
        yield put({ type: 'items_save', payload: items });
      } catch (e) {
        console.log(e);
      }
    },
    *TageIdChange({ payload }, { call, put }) {
      yield put({ type: 'tage_id_save', payload });
    },
    *SelectItemChange({ payload }, { call, put }) {
      yield put({ type: 'select_Item_save', payload });
    },
  },

  reducers: {
    state_save(state, { payload }) {
      return {
        ...state,
        open: payload
      };
    },
    items_save(state, { payload }) {
      return {
        ...state,
        items: payload
      };
    },
    tage_id_save(state, { payload }) {
      return {
        ...state,
        tageId: payload
      };
    },
    select_Item_save(state, { payload }) {
      return {
        ...state,
        selectItem: payload
      };
    },
  },

};
