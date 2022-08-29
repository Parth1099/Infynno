import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import axios from "axios";

const initialState = {
    car: [],
    count: 0,
    make: null,
    model: null,
    bodystyle: null,
    exteriorcolor: null,
    interiorcolor: null,
    transmission: null,
    drive: null,
    fuel: null,
    page: "1",
    isLoading: false,
    carType: ["New Car", "Used Car"],
    range: 100,
    makeCar: [],
    modelCar: [],
    bodyStyleCar: [],
    price: [0, 100000],
    year: [1990, 2021]


};
export const fetchCars = createAsyncThunk(
    "homePage/fetch", async (page, { getState }) => {
        const state = getState().homeSlice;
        console.log(state);
        try {
            const url = `https://autodigg.com/ad-api/cars/list?body_type=${state.bodyStyleCar}&model=${state.modelCar}&usedCar=false&car_type=${state.carType},Certified+pre-owned&make=${state.makeCar}&page=${state.page}&radius=${state.range}&price_from=${state.price[0]}&price_to=${state.price[1]}&year_from=${state.year[0]}&year_to=${state.year[1]}&newCar=false`;
            const counturl = `https://autodigg.com/ad-api/cars/list?body_type=${state.bodyStyleCar}&model=${state.modelCar}&usedCar=false&car_type=${state.carType},Certified+pre-owned&make=${state.makeCar}&page=${state.page}&radius=${state.range}&price_from=${state.price[0]}&price_to=${state.price[1]}&year_from=${state.year[0]}&year_to=${state.year[1]}&newCar=false&return=count`;
            const modelUrl = `https://autodigg.com/ad-api/cars/list?make=${state.makeCar}&return=model`;
            const data = await axios.all([
                axios.get(url),
                axios.get(counturl),
                axios.get(modelUrl)
            ])
            console.log(data, "thungggggdatatatata")
            return data

        } catch (error) {
            console.log(error)
        }
    }
)
const homeSlice = createSlice({
    name: "homePage",
    initialState,
    reducers: {
        getCars: (state, action) => {
            state.car = action.payload;
        },
        getCount: (state, action) => {
            state.count = action.payload;
        },
        getMake: (state, action) => {
            state.make = action.payload;
        },
        getModel: (state, action) => {
            state.model = action.payload;
        },
        getBodystyle: (state, action) => {
            state.bodystyle = action.payload;
        },
        getExteriorcolor: (state, action) => {
            state.exteriorcolor = action.payload;
        },
        getInteriorcolor: (state, action) => {
            state.interiorcolor = action.payload;
        },
        getTrasmission: (state, action) => {
            state.transmission = action.payload;
        },
        getDrive: (state, action) => {
            state.drive = action.payload;
        },
        getFuel: (state, action) => {
            state.fuel = action.payload;
        },
        getPagination: (state, action) => {
            state.page = action.payload;
        },
        getCarType: (state, action) => {
            state.carType = action.payload;
        },
        getRange: (state, action) => {
            state.range = action.payload;
        },
        getMakedata: (state, action) => {
            state.makeCar = action.payload
        },
        getmodelCar: (state, action) => {
            state.modelCar = action.payload
        },
        getBodystyleCar: (state, action) => {
            state.bodyStyleCar = action.payload
        },
        getPriceCar: (state, action) => {
            state.price = action.payload
        },
        getYearCar: (state, action) => {
            state.year = action.payload
        },

    },

    extraReducers: {
        [HYDRATE]: (state, action) => {
            state.car = action.payload.homeSlice.car;
            state.count = action.payload.homeSlice.count;
            state.make = action.payload.homeSlice.make;
            state.model = action.payload.homeSlice.model;
            state.bodystyle = action.payload.homeSlice.bodystyle;
            state.exteriorcolor = action.payload.homeSlice.exteriorcolor;
            state.interiorcolor = action.payload.homeSlice.interiorcolor;
            state.transmission = action.payload.homeSlice.transmission;
            state.drive = action.payload.homeSlice.drive;
            state.fuel = action.payload.homeSlice.fuel;
        },
        [fetchCars.pending]: (state, action) => {
            state.isLoading = true
        },
        [fetchCars.fulfilled]: (state, action) => {
            // console.log(action, 'sksksdi')
            state.car = action.payload[0].data
            state.count = action.payload[1].data
            state.model = action.payload[2].data
            state.isLoading = false
        },
        [fetchCars.rejected]: (state, action) => {
            state.isLoading = false
        },
    },
});

export const { getCars, getPagination, getYearCar, getRange, getPriceCar, getBodystyleCar, getmodelCar, getMakedata, getCarType, getCount, getMake, getModel, getBodystyle, getInteriorcolor, getExteriorcolor, getTrasmission, getDrive, getFuel } = homeSlice.actions;

export default homeSlice.reducer;
