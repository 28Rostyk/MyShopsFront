import { createSlice } from '@reduxjs/toolkit';
import { fetchCoupons } from './couponsOperation';

const CouponsSlice = createSlice({
  name: 'coupons',
  initialState: {
    items: [],
    setItem: {},
    isLoading: false,
    error: null,
  },
  reducers: {
    setCouponsSlice(store, { payload }) {
      store.setItem = payload;
    },
    deleteCouponsSlice(store) {
      store.setItem = {};
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCoupons.pending, store => {
        store.isLoading = true;
        store.error = null;
      })
      .addCase(fetchCoupons.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.items = payload;
      })
      .addCase(fetchCoupons.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      });
  },
});

export const { setCouponsSlice, deleteCouponsSlice } = CouponsSlice.actions;

export default CouponsSlice.reducer;
