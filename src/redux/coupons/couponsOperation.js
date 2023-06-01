import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../../services/API';

export const fetchCoupons = createAsyncThunk(
  'diskonts/fetchAllCoupons',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await API.getCoupons();
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);
