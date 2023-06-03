import userReducer from "./reducers/userReducer";

const { configureStore } = require("@reduxjs/toolkit");



export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});