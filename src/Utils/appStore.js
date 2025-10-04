import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./userSlice";
import feedReducer from "./feedSlice";
import connectionReducer from "./connectionsSlice";
import requestReducer from "./requestSLice";

const appStore = configureStore({
  reducer: {
    user: UserReducer,
    feed: feedReducer,
    connections: connectionReducer,
    requests: requestReducer,
  },
});
export default appStore;
