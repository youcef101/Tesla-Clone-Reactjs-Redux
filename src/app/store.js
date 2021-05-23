import { configureStore } from '@reduxjs/toolkit';
import carReducer from "../features/Cars/carsSlice"

export const store = configureStore({
  reducer: {
    car: carReducer
  },
});
