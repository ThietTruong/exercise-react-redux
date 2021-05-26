import { createSlice } from "@reduxjs/toolkit";
export const gifSlice = createSlice({
  name: "gif",
  initialState: {
    gif: [1, 2, 3],
  },
  reducers: {
    setData: (state, action) => {
      state.gif = action.payload;
    },
  }
})
export const { setData } = gifSlice.actions;
export default gifSlice.reducer;