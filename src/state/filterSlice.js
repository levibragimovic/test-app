import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  all: true,
  crypto: true,
  cash: true,
  rub: true,
  uah: true
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    filterChageReducer: (state, action) => {
      state[action.payload.name] = !state[action.payload.name];
      if (state.crypto && state.cash && state.rub && state.uah) {
        state.all = true;
      } else {
        state.all = false;
      }
    },
    filterAll: (state) => {
      if (state.all) {
        state.all = false;
        state.crypto = false;
        state.cash = false;
        state.rub = false;
        state.uah = false;
      } else {
        state.all = true;
        state.crypto = true;
        state.cash = true;
        state.rub = true;
        state.uah = true;
      }
    }
  }
});

export const { filterChageReducer, filterAll } = filterSlice.actions;
export default filterSlice.reducer;
