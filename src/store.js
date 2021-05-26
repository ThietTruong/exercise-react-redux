import { configureStore } from "@reduxjs/toolkit";
import gifSlice from "./feature/gif/gifSlice";
export default configureStore({
  reducer: {
    gif: gifSlice
  }
})