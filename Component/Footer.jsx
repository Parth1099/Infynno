import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <section className="mt-[30%]">
        <div className="footer-main flex flex-col">
          <div className="one h-[232px] bg-[#28293D] flex justify-between">
            <div className="left-side flex flex-col justify-center pl-[60px]  gap-[24px]">
              <div className="img-logo-left">
                <Image
                  src="/Images/autodiggwhite.png"
                  height={36}
                  width={132}
                />
              </div>
              <p className="text-[#8F90A6] w-[424px] text-[14px] leading-6">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
            <div className="right-side flex flex-col gap-[78px] justify-center pr-[66px]">
              <div className="social-media flex justify-end gap-[24px]">
                <Image src="/Images/fb.png" height={24} width={24} />
                <Image src="/Images/twitter.png" height={24} width={24} />
                <Image src="/Images/ig.png" height={24} width={24} />
              </div>
              <div className="bottom-right text-white text-[14px] font-[500] flex  gap-[32px]">
                <p>How it works</p>
                <p>Blog</p>
                <p>Frequently asked questions</p>
                <p>Are you a dealer?</p>
                <p>Contact us</p>
              </div>
            </div>
          </div>
          <div className="two h-[60px] bg-[#1C1C28] flex justify-between items-center text-[10px] px-[60px] text-white">
            <div className="bt-left text-[#8F90A6] font-[400]">
              © AutoDigg 2021. All Rights Reserved.
            </div>
            <div className="bt-right flex justify-around gap-[32px] font-[600]">
              <div>Terms of Service</div>
              <div>Privacy Policy</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
