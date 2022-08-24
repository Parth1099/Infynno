import React, { useEffect, useState } from "react";
import Card from "./Cards";
import axios from "axios";
import Sidebar from "./Sidebar";
import ReactPaginate from 'react-paginate';


const Main = ({ count,  make, model, bodystyle, exteriorcolor, interiorcolor, trasmission, drive, fuel }) => {

  const [cars, setCars] = useState([]);

  async function fetchcars(current_page) {
    const main = await axios.get(`https://autodigg.com/ad-api/cars/list?usedCar=false&car_type=Used+car,New+car,Certified+pre-owned&page=${current_page}&radius=100&newCar=false`);
    const maindata = main.data;
    setCars(maindata);

  }
  useEffect(() => {
    async function getAllCars() {
      const main = await axios.get(`https://autodigg.com/ad-api/cars/list?usedCar=false&car_type=Used+car,New+car,Certified+pre-owned&page=1&radius=100&newCar=false`);
      const maindata = main.data;
      setCars(maindata);
    }
    getAllCars();
  }, [])

  async function handlePageClick(data) {
    console.log(data.selected, "Pagination Page")

    const current_page = data.selected + 1;
    fetchcars(current_page);
  }


  return (
    <>
      <section>
        <div className="homepage-main ">
          <div className="top flex flex-col pl-[60px] py-[36px] gap-[8px]">
            <div
              className="top-title-one text-[12px] font-[600] text-[#8F90A6] uppercase
            "
            >
              Used cars for sale
            </div>
            <div className="top-title-two text-[32px] font-[700] leading-[44px]">
              Showing {count.count} cars
            </div>
          </div>
          <div className="bottom flex gap-6">
            <div>
              <Sidebar make={make} model={model} bodystyle={bodystyle} exteriorcolor={exteriorcolor} interiorcolor={interiorcolor} trasmission={trasmission} drive={drive} fuel={fuel} />
            </div>
            <div className="card-right-main">
              <div className="flex  flex-col gap-8">
                {cars?.map((data) => {
                  return (
                    <>
                      <Card data={data} />
                    </>
                  );
                })}
              </div>

              <div className="card-below-main flex flex-col justify-center items-center">

                <div className="pagination-main py-[64px]">
                  <ReactPaginate
                    previousLabel={" <"}
                    nextLabel={" >"}
                    breakLabel={"..."}
                    pageCount={count.count / 20}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={"flex gap-[8px] justify-center	 items-center"}
                    pageClassName={"w-[36px] flex items-center justify-center h-[36px] text-[#555770] font-[500] text-[14px] bg-white border-[1px] border-solid border-[#E4E4EB] rounded-[6px]"}
                    pageLinkClassName={""}
                    previousClassName={"w-[36px] font-[700] h-[36px] flex items-center rounded-[6px] justify-center bg-white"}
                    previousLinkClassName={""}
                    nextClassName={"w-[36px] h-[36px] font-[700] flex items-center justify-center rounded-[6px] bg-white"}
                    nextLinkClassName={""}
                    breakClassName={""}
                    breakLinkClassName={""}
                    activeClassName={"border-[2px] border-solid border-[#FF8800] text-[#FF8800] "}
                  />
                </div>
                <div className="pagination-line w-[910px] bg-[#E4E4EB] h-[1px] mb-[36px]"></div>
                <div className="pagination-third text-center w-[760px] flex flex-col items-center">
                  <div className="pagination-third-title text-[#28293D] font-[700] text-[28px] leading-[38px]">Why Autodigg?</div>
                  <div className="pagination-third-content text-[#8F90A6] font-[600] text-[14px] leading-[20px ">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
