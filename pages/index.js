
import { useSelector } from "react-redux"
import axios from "axios";
// import Main from "../Component/Main";
import dynamic from "next/dynamic";

import { wrapper } from "../store/store";
import { getBodystyle, getCars, getCount, getDrive, getExteriorcolor, getFuel, getInteriorcolor, getMake, getModel, getTrasmission } from "../store/homePageslice";

const Main = dynamic(() => import("../Component/Main"),{
  loading :() => <p>Loading..</p>,
  ssr:false,
}
 )

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) => async () => {

//     const res = await axios.get("https://autodigg.com/ad-api/cars/list?car_type=Used+car,New+car,Certified+pre-owned&page=1&radius=100&year=2011,2021&return=count");
//     const data = res.data;

//     const main = await axios.get("https://autodigg.com/ad-api/cars/list?usedCar=false&car_type=Used+car,New+car,Certified+pre-owned&page=1&radius=100&newCar=false");
//     const maindata = main.data;

//     const make = await axios.get("https://autodigg.com/ad-api/cars/list?return=make");
//     const mainmake = make.data;

//     const model = await axios.get("https://autodigg.com/ad-api/cars/list?return=model");
//     const modelres = model.data;

//     const bodystyleRes = await axios.get("https://autodigg.com/ad-api/cars/list?make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011,2021&zip=&return=body_type");
//     const bodystyle = bodystyleRes.data;

//     const exteriorcolorRes = await axios.get("https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011,2021&zip=&return=exterior_color");
//     const exteriorcolor = exteriorcolorRes.data;

//     const interiorcolorRes = await axios.get("https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011,2021&zip=&return=interior_color");
//     const interiorcolor = interiorcolorRes.data;

//     const trasmissionRes = await axios.get("https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011,2021&zip=&return=transmission");
//     const trasmission = trasmissionRes.data;

//     const driveRes = await axios.get("https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011,2021&zip=&return=drivetrain");
//     const drive = driveRes.data;

//     const fueltypeRes = await axios.get("https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011,2021&zip=&return=fuel_type");
//     const fuel = fueltypeRes.data;


    
//     store.dispatch(getCars(maindata))
//     store.dispatch(getCount(data))
//     store.dispatch(getMake(mainmake))
//     store.dispatch(getModel(modelres))
//     store.dispatch(getBodystyle(bodystyle))
//     store.dispatch(getExteriorcolor(exteriorcolor))
//     store.dispatch(getInteriorcolor(interiorcolor))
//     store.dispatch(getTrasmission(trasmission))
//     store.dispatch(getDrive(drive))
//     store.dispatch(getFuel(fuel))

//   }
// )

export default function Home() {
  const daat = useSelector((state) => state.homeSlice)


  return (

    <>
      {/* <div className="flex justify-center items-center"> */}
      <div className="w-[1349px] mx-auto ">
        {/* <Main  /> */}
        {/* <Footer /> */}
      </div>
      {/* </div> */}
    </>
  );
}
