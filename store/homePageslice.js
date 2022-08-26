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


};
export const fetchCars = createAsyncThunk(
    "homePage/fetch", async (page) => {
        try {
            const url = `https://autodigg.com/ad-api/cars/list?usedCar=false&car_type=Used+car,New+car,Certified+pre-owned&page=${page}&radius=100&newCar=false`;
            const res = await axios.get(url);
            return res.data;
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
        }

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
            state.isLoading = false
            state.car = action.payload
        },
        [fetchCars.rejected]: (state, action) => {
            state.isLoading = false
        },
    },
});

export const { getCars, getPagination, getCount, getMake, getModel, getBodystyle, getInteriorcolor, getExteriorcolor, getTrasmission, getDrive, getFuel } = homeSlice.actions;

export default homeSlice.reducer;
