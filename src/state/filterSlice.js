/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
import { createSlice } from '@reduxjs/toolkit';

const firstState = {
  filtersList: [
    { active: false, value: 'all', text: 'Все', id: 1 },
    {
      active: false,
      value: 'crypto',
      text: 'Криптовалюты',
      id: 2,
      values: ['BTC', 'ETH', 'USDTTRC']
    },
    {
      active: false,
      value: 'cash',
      text: 'Наличные',
      id: 3,
      values: ['CASHUSD', 'CASHRUB']
    },
    {
      active: false,
      value: 'rub',
      text: 'Банки RUB',
      id: 4,
      values: ['ACRUB', 'SBERRUB', 'TCSBRUB']
    },
    {
      active: false,
      value: 'uah',
      text: 'Банки UAH',
      id: 5,
      values: ['ACRUB', 'SBERRUB', 'TCSBRUB']
    }
  ],
  selectedCategory: [],
  directions: [
    {
      'code': 'BTC',
      'name': 'Bitcoin BTC '
    },
    {
      'code': 'ETH',
      'name': 'Ethereum ETH '
    },
    {
      'code': 'CASHUSD',
      'name': 'Наличные USD '
    },
    {
      'code': 'CASHRUB',
      'name': 'Наличные RUB '
    },
    {
      'code': 'ACRUB',
      'name': 'Альфа-банк RUB '
    },
    {
      'code': 'SBERRUB',
      'name': 'Сбербанк RUB '
    },
    {
      'code': 'TCSBRUB',
      'name': 'Тинькофф RUB '
    },
    {
      'code': 'USDTTRC',
      'name': 'Tether TRC20 USDT '
    }
  ]
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: firstState,
  reducers: {
    filterChageReducer: (state, action) => {
      state.filtersList = state.filtersList.map((el) => {
        if (el.value === action.payload.value) {
          return { ...el, active: true };
        } else return { ...el, active: false };
      });
    },
    filterAll: (state, action) => {
      state.filtersList = state.filtersList.map((el) => {
        if (action.payload.active) {
          return { ...el, active: true };
        } else return { ...el, active: false };
      });
    }
  }
});

export const { filterChageReducer, filterAll } = filterSlice.actions;
export default filterSlice.reducer;
