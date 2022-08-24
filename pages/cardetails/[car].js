import React from 'react'
import Image from "next/image";
import axios from "axios"
import Gallery from "../../Component/Gallery"

import { useRouter } from "next/router"

export async function getServerSideProps(context) {
    const { car } = context.params;
    const response = await axios.get(`https://autodigg.com/ad-api/cars/list?vin=${car}`)
    const carDetails = response.data[0];

    return {
        props: {
            carDetails,
        }
    }
}

const Car = ({ carDetails }) => {
    const router = useRouter();
    const { car } = router.query;
    console.log(carDetails, "carerererererer");
    const carfeature = carDetails.features1.split(",")
    // console.log(carfeature);
    // {console.log(carDetails.features1.split(",")[2],",Feature Details")}
    return (
        <>
            <section className='max-w-[1440px] mx-auto '>
                <div className="details-main">
                    <div className="detail-main-one bg-white">
                        <div className="arrow-main flex justify-between h-[160px] items-center px-[60px]">
                            <div className="arrow-left flex gap-4">
                                <div className="arrow-icon">
                                    <Image src="/Images/leftarrow.png" height={60} width={60} />
                                </div>
                                <div className="arrow-icon-right flex flex-col gap-2">
                                    <div className="arrow-icon-right-top font-[700] text-[32px] leading-[44px] text-[#28293D]">{carDetails.year} {carDetails.make} {carDetails.model}</div>
                                    <div className="arrow-icon-right-bottom font-[400] text-[16px] leading-4 tracking-[0.2px] text-[#8F90A6]">
                                        <p>{carDetails.dealership}  •  {carDetails.milage}  • {carDetails.exterior_color}</p>
                                        <p>{carDetails.city} {carDetails.state}</p>
                                        {/* {car} */}
                                    </div>
                                </div>
                            </div>
                            <div className="arrow-right flex gap-6 justify-center items-center">
                                <div className="arrow-div-price flex gap-[8px] items-center">
                                    <p className='font-[600] text-[28px] leading-[38px] text-[#28293D]'>${carDetails.price.toLocaleString('en-US')}</p>
                                    <div className="price-main flex items-center gap-[8px]">
                                        <p className="font-[600] text-[28px] leading-[38px]"></p>
                                        <div className="rounded-full bg-[#8F90A6] w-4 h-4 flex items-center justify-center text-[14px]  italic text-white">
                                            i
                                        </div>
                                    </div>
                                </div>
                                <div className="arrow-div-dealer">
                                    <div className="invite w-[137px] flex items-center justify-center py-[6px] px-4 gap-[2px] rounded-[10px] shadow-[0px_8px_16px_-6px_rgba(254,110,6,0.46)] btn-shadow">
                                        <button className=" text-white text-[14px] font-[500] leading-6">
                                            Invite dealer
                                        </button>
                                        <div className="flex items-center justify-center mt-1">
                                            <Image src="/Images/arrow.png" width={18} height={18} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="special-offer h-[108px] bg-[#FFF8E6] flex flex-col justify-center px-[135px]">
                            <div className="special-offer-top flex items-center gap-1">
                                <Image src="/Images/star.png" height={15} width={15} />
                                <p className='font-[600] text-[12px] text-[#05A660] uppercase leading-5'>Special offers</p>
                            </div>
                            <div className="special-offer-bottom flex gap-4 font-[400] text-[14px leading-[24px] text-[#28293D]">
                                <p>• {carDetails.car_offers.split(",")[0].replace(/[\[\]'"]+/g, "")}</p>
                                <p>• {carDetails.car_offers.split(",")[1].replace(/[\[\]'"]+/g, "")}</p>

                            </div>
                        </div>
                    </div>
                    <div className="detail-main-two h-[650px] bg-black">
                        <Gallery photos={carDetails.photos} />
                    </div>
                    <div className="detail-main-three flex flex-col items-center justify-center">
                        <div className="car-details-main h-[388px] w-[1250px] mt-[64px] bg-white  flex flex-col gap-9 p-[36px] rounded-[10px]">
                            <div className="car-title font-[700] text-[32px] leading-[44px] text-[#28293D]">
                                Car Details
                            </div>
                            <div className='flex flex-col flex-wrap   gap-[24px] h-[300px]'>

                                <div className="car-details flex  gap-4">
                                    <div className="car-details-icon"><Image src="/Images/caricon.png" height={40} width={40} /></div>
                                    <div className="car-details-right">
                                        <div className="car-detail-top text-[#8F90A6] font-[600] uppercase text-[12px] leading-4">Car type</div>
                                        <div className="car-detail-bottom max-w-[314px] text-[14px]">{carDetails.car_type}</div>
                                    </div>
                                </div>

                                <div className="car-details flex gap-4">
                                    <div className="car-details-icon"><Image src="/Images/caricon.png" height={40} width={40} /></div>
                                    <div className="car-details-right">
                                        <div className="car-detail-top text-[#8F90A6] font-[600] uppercase text-[12px] leading-4">Mileage</div>
                                        <div className="car-detail-bottom max-w-[314px] text-[14px]">{carDetails.milage}</div>
                                    </div>
                                </div>

                                <div className="car-details flex gap-4">
                                    <div className="car-details-icon"><Image src="/Images/caricon.png" height={40} width={40} /></div>
                                    <div className="car-details-right">
                                        <div className="car-detail-top text-[#8F90A6] font-[600] uppercase text-[12px] leading-4">Trim</div>
                                        <div className="car-detail-bottom max-w-[314px] text-[14px]">{carDetails.trim}</div>
                                    </div>
                                </div>

                                <div className="car-details flex gap-4">
                                    <div className="car-details-icon"><Image src="/Images/caricon.png" height={40} width={40} /></div>
                                    <div className="car-details-right">
                                        <div className="car-detail-top text-[#8F90A6] font-[600] uppercase text-[12px] leading-4">Engine</div>
                                        <div className="car-detail-bottom max-w-[314px] text-[14px]  ">{carDetails.engine_description}</div>
                                    </div>
                                </div>

                                <div className="car-details flex gap-4">
                                    <div className="car-details-icon"><Image src="/Images/caricon.png" height={40} width={40} /></div>
                                    <div className="car-details-right">
                                        <div className="car-detail-top text-[#8F90A6] font-[600] uppercase text-[12px] leading-4">Year</div>
                                        <div className="car-detail-bottom max-w-[314px] text-[14px]">{carDetails.year}</div>
                                    </div>
                                </div>
                                <div className="car-details flex gap-4">
                                    <div className="car-details-icon"><Image src="/Images/caricon.png" height={40} width={40} /></div>
                                    <div className="car-details-right">
                                        <div className="car-detail-top text-[#8F90A6] font-[600] uppercase text-[12px] leading-4">Exterior color</div>
                                        <div className="car-detail-bottom max-w-[314px] text-[14px]">{carDetails.exterior_color}</div>
                                    </div>
                                </div>
                                <div className="car-details flex gap-4">
                                    <div className="car-details-icon"><Image src="/Images/caricon.png" height={40} width={40} /></div>
                                    <div className="car-details-right">
                                        <div className="car-detail-top text-[#8F90A6] font-[600] uppercase text-[12px] leading-4">Transmission</div>
                                        <div className="car-detail-bottom max-w-[314px] text-[14px]">{carDetails.transmission}</div>
                                    </div>
                                </div>
                                <div className="car-details flex gap-4">
                                    <div className="car-details-icon"><Image src="/Images/caricon.png" height={40} width={40} /></div>
                                    <div className="car-details-right">
                                        <div className="car-detail-top text-[#8F90A6] font-[600] uppercase text-[12px] leading-4">VIN</div>
                                        <div className="car-detail-bottom max-w-[314px] text-[14px]">{carDetails.vin}</div>
                                    </div>
                                </div>
                                <div className="car-details flex gap-4">
                                    <div className="car-details-icon"><Image src="/Images/caricon.png" height={40} width={40} /></div>
                                    <div className="car-details-right">
                                        <div className="car-detail-top text-[#8F90A6] font-[600] uppercase text-[12px] leading-4">Fuel </div>
                                        <div className="car-detail-bottom max-w-[314px] text-[14px]">{carDetails.fuel_type}</div>
                                    </div>
                                </div>
                                <div className="car-details flex gap-4">
                                    <div className="car-details-icon"><Image src="/Images/caricon.png" height={40} width={40} /></div>
                                    <div className="car-details-right">
                                        <div className="car-detail-top text-[#8F90A6] font-[600] uppercase text-[12px] leading-4">Drivetrain</div>
                                        <div className="car-detail-bottom max-w-[314px] text-[14px]">{carDetails.drivetrain}</div>
                                    </div>
                                </div>



                            </div>
                        </div>

                        {/* Other Feature */}
                        <div className="other-feature-main px-[60px]">
                            <div className="car-details-main h-auto mt-[64px] bg-white  flex flex-col gap-9 p-[36px] rounded-[10px]">
                                <div className="car-title font-[700] text-[32px] leading-[44px] text-[#28293D]">
                                    Other features
                                </div>
                                <div className=''>

                                    <div className="car-details h-auto flex gap-2 flex-wrap justify-between">
                                        {/* <p>• {carDetails.car_offers.split(",")[0].replace(/[\[\]'"]+/g,"")}</p> */}
                                        {carfeature.map((carf) => {
                                            return (
                                                <>
                                                    <p className='w-[360px]'>

                                                        {carf.replace(/[\[\]/'"]+/g, '')}
                                                    </p>
                                                </>
                                            )
                                        })}
                                        {/* {carDetails.features1.split(",")[0].replace(/[\[\]/'"]+/g, '')} */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Car