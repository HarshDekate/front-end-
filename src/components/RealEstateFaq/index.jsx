import React from "react";

import { Img, Text } from "components";

const RealEstateFaq = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 flex flex-col items-start justify-start md:px-10 sm:px-5 px-[45px] py-5 shadow-bs1 w-full">
          <div className="flex sm:flex-col flex-row sm:gap-10 gap-[219px] items-center justify-between w-auto md:w-full">
            <Text
              className="text-black-900_03 text-lg w-auto"
              size="txtMontserratRomanSemiBold18"
            >
              {props?.questiontext}
            </Text>
            <Img
              className="h-5 w-[13px]"
              src="images/img_checkmark_black_900_03.svg"
              alt="checkmark_Two"
            />
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col items-start justify-start max-w-[800px] shadow-bs2 w-full">
          <div className="bg-white-A700 flex flex-col items-start justify-start md:px-10 sm:px-5 px-[45px] py-5 shadow-bs1 w-full">
            <div className="flex sm:flex-col flex-row sm:gap-10 gap-[219px] items-center justify-between w-auto md:w-full">
              <Text
                className="text-black-900_03 text-lg w-auto"
                size="txtMontserratRomanSemiBold18"
              >
                {props?.p3howdoesosumarethree}
              </Text>
              <Img
                className="h-5 w-[13px]"
                src="images/img_checkmark_black_900_03.svg"
                alt="checkmark_Three"
              />
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col items-start justify-start max-w-[800px] rounded-bl-lg rounded-br-lg shadow-bs2 w-full">
          <div className="bg-light_blue-A700 flex flex-col items-start justify-start md:px-10 sm:px-5 px-[45px] py-5 shadow-bs1 w-full">
            <div className="flex sm:flex-col flex-row sm:gap-10 gap-[219px] items-center justify-between w-auto md:w-full">
              <Text
                className="flex-1 text-lg text-white-A700 w-auto"
                size="txtMontserratRomanSemiBold18WhiteA700"
              >
                {props?.p3howdoesosumarefive}
              </Text>
              <Img
                className="h-5 w-[13px]"
                src="images/img_arrowdown.svg"
                alt="arrowdown"
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pb-[27.75px] pl-[45px] pr-[51px] pt-7 md:px-10 sm:px-5 w-full">
            <Text
              className="leading-[24.00px] max-w-[704px] md:max-w-full text-base text-gray-600"
              size="txtOpenSansRomanRegular16Gray600"
            >
              {props?.descriptiontext}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

RealEstateFaq.defaultProps = {
  questiontext: "3. How does Osumare measure campaign success?",
  p3howdoesosumarethree: "3. How does Osumare measure campaign success?",
  p3howdoesosumarefive: "3. How does Osumare measure campaign success?",
  descriptiontext: (
    <>
      We believe in measurable results. Our data-driven approach means that
      every campaign&#39;s performance is tracked, analyzed, and refined for
      optimal outcomes. We provide regular reports that detail key metrics,
      giving you clear insights into how our strategies are driving growth for
      your brand.
    </>
  ),
};

export default RealEstateFaq;
