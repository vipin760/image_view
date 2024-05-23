import { imageReducer } from "./img/img.reducer";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

const rootReducer = combineReducers({ imageFiles: imageReducer });

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;





