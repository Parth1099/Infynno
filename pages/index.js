import { useSelector } from "react-redux";
import axios from "axios";
import Main from "../Component/Main";
import { wrapper } from "../store/store";
import {
  getBodystyle,
  getCars,
  getCount,
  getDrive,
  getExteriorcolor,
  getFuel,
  getInteriorcolor,
  getMake,
  getModel,
  getTrasmission,
  getFeature,
} from "../store/homePageslice";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const res =
      "https://autodigg.com/ad-api/cars/list?car_type=Used+car,New+car,Certified+pre-owned&page=1&radius=100&year=2011,2021&return=count";

    const main =
      "https://autodigg.com/ad-api/cars/list?usedCar=false&car_type=Used+car,New+car,Certified+pre-owned&page=1&radius=100&newCar=false";

    const make = "https://autodigg.com/ad-api/cars/list?return=make";

    const model = "https://autodigg.com/ad-api/cars/list?return=model";

    const bodystyleRes =
      "https://autodigg.com/ad-api/cars/list?make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=1990,2021&zip=&price_from=0&price_to=100000&return=body_type";

    const exteriorcolorRes =
      "https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=1990,2021&zip=&price_from=0&price_to=100000&return=exterior_color";

    const interiorcolorRes =
      "https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=1990,2021&zip=&price_from=0&price_to=100000&return=interior_color";

    const trasmissionRes =
      "https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=1990,2021&zip=&price_from=0&price_to=100000&return=transmission";

    const driveRes =
      "https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=1990,2021&zip=&price_from=0&price_to=100000&return=drivetrain";

    const fueltypeRes =
      "https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=1990,2021&zip=&price_from=0&price_to=100000&return=fuel_type";

    const featureRes =
      "https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=1990,2021&zip=&price_from=0&price_to=100000&return=features";
    const data = await axios.all([
      axios.get(res),
      axios.get(main),
      axios.get(make),
      axios.get(model),
      axios.get(bodystyleRes),
      axios.get(exteriorcolorRes),
      axios.get(interiorcolorRes),
      axios.get(trasmissionRes),
      axios.get(driveRes),
      axios.get(fueltypeRes),
      axios.get(featureRes),
    ]);

    store.dispatch(getCount(data[0].data));
    store.dispatch(getCars(data[1].data));
    store.dispatch(getMake(data[2].data));
    store.dispatch(getModel(data[3].data));
    store.dispatch(getBodystyle(data[4].data));
    store.dispatch(getExteriorcolor(data[5].data));
    store.dispatch(getInteriorcolor(data[6].data));
    store.dispatch(getTrasmission(data[7].data));
    store.dispatch(getDrive(data[8].data));
    store.dispatch(getFuel(data[9].data));
    store.dispatch(getFeature(data[10].data));
  }
);

export default function Home() {
  const daat = useSelector((state) => state.homeSlice);

  return (
    <>
      {/* <div className="flex justify-center items-center"> */}
      <div className="w-[1349px] mx-auto ">
        <Main />
        {/* <Footer /> */}
      </div>
      {/* </div> */}
    </>
  );
}
