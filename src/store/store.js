import { configureStore} from "@reduxjs/toolkit";
import homeSlice from "../Slice/homeSlice";
import ScoreCardSlice from "../Slice/ScoreCardSlice";

export const store = configureStore({
  reducer: {
    homeSlice : homeSlice,
    ScoreCardSlice : ScoreCardSlice,

  },
  middleware : (getDefaultMiddleware)=>
    getDefaultMiddleware ({
      serializableCheck : false,
    })
  
});
