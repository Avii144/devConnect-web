import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./userSlice";
import feedReducer from "./feedSlice";
import connectionReducer from "./connectionsSlice";
const appStore = configureStore({
  reducer: {
    user: UserReducer,
    feed: feedReducer,
    connections: connectionReducer,
  },
});
export default appStore;
