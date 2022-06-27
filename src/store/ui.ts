import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notification: { status: '', title: '', msg: '' },
};
const UiSlice = createSlice({
  name: 'ui',
  initialState: initialState,
  reducers: {
    setNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        msg: action.payload.msg,
      };
    },
  },
});

export const UiActions = UiSlice.actions;

export default UiSlice.reducer;
