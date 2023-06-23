import { createSlice } from "@reduxjs/toolkit";
import { addToLocal, getData } from "./Storage";

const dummy = ['ashok']

const todoSlice = createSlice({
  name: 'todoSlice',
  initialState: {
    sample: getData
  },

  reducers: {
    addData: (state, action) => {
      state.sample.push(action.payload);
      addToLocal(state.sample)
    },

    removeData: (state, action) => {
      state.sample.splice(action.payload, 1);
    }
  }
});

export const { addData, removeData } = todoSlice.actions;
export default todoSlice.reducer;