import Image from "next/image";

export function Navbar() {
  return (
    <>
      <section className=" navbar flex justify-center items-center uppercase h-[68px] bg-[#FFFFFF] border-1 border-b border-[#E4E4EB] ]">
        <div className="main-nav flex items-center gap-[250px] ">
          {/* Left */}
          <div className="left flex gap-[36px] text-[12px] font-[600] leading-[20px] cursor-pointer">
            <div>
              <p>How it works</p>
            </div>
            <div>
              <p>why us </p>
            </div>
            <div>
              <p>contact us</p>
            </div>
          </div>
          {/* Middle */}
          <div className="middle flex items-center">
            {/* <div className="items-center flex"> */}
              <Image src="/images/autodigg.png" width={132} height={36} />
            {/* </div> */}
          </div>
          {/* Right */}
          <div className="rigth flex gap-[36px] items-center text-[12px] leading-[20px]">
            <div className="flex flex-col gap-[5px] font-[600] text-[#FF6B00]">
              <div className="flex gap-[4px] cursor-pointer">
                <Image src="/images/carfont.png" width={20} height={18} />
                <p className="text-[12px] font-[700]">used car for sale</p>
              </div>

              <div className="w-full h-[3px] bg-[#FF8800]"></div>
            </div>
            <div className="text-white cursor-pointer">
              <button className="uppercase w-[148px] h-[36px] bg-[#28293D] rounded-[13px] font-[600]">
                Sign in / register
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// export default Header;
