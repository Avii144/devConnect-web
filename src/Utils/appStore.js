import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./userSlice";
import feedReducer from "./feedSlice";
const appStore = configureStore({
  reducer: {
    user: UserReducer,
    feed: feedReducer,
  },
});
export default appStore;
