import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cars: [
        { id: 1, title: "Model S" },
        { id: 1, title: "Model 3" },
        { id: 1, title: "Model X" },
        { id: 1, title: "Model Y" },
        { id: 1, title: "SOLAR ROOF" },
        { id: 1, title: "SOLAR PANELS" }
    ]
}
const carsSlice = createSlice({
    name: "car",
    initialState,
    reducers: {}
})
export const selectCars = (state) => state.car.cars
export default carsSlice.reducer