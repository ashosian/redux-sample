import { configureStore } from "@reduxjs/toolkit";

import user from "../features/TodoSlice"


export const store = configureStore({
  reducer: {
    todos: user
  }
});