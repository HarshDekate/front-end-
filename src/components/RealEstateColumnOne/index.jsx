import React from "react";

import { Button, Img, Text } from "components";

const RealEstateColumnOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col md:gap-10 gap-[68px] items-center justify-center w-full">
          <div className="flex flex-col gap-4 items-center justify-center w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-full"
              size="txtMontserratBold32"
            >
              {props?.ourserviceofferOne}
            </Text>
            <Text
              className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl w-full"
              size="txtOpenSansRomanRegular24"
            >
              {props?.languageOne}
            </Text>
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="md:gap-5 gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                <div className="bg-white-A700 flex flex-1 flex-col gap-4 items-center justify-start px-4 py-8 rounded-lg shadow-bs w-full">
                  <div className="flex flex-col gap-2 items-center justify-start w-full">
                    <Button
                      className="flex h-[52px] items-center justify-center w-[52px]"
                      shape="circle"
                      color="gray_100"
                      size="sm"
                      variant="fill"
                    >
                      <Img className="h-6" src="images/img_seo.svg" alt="seo" />
                    </Button>
                    <Text
                      className="text-black-900 text-center text-lg w-full"
                      size="txtMontserratRomanBold18"
                    >
                      {props?.automotiveseo}
                    </Text>
                  </div>
                  <Text
                    className="max-w-[265px] md:max-w-full text-blue_gray-900 text-center text-sm"
                    size="txtOpenSansRomanRegular14"
                  >
                    {props?.description}
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col gap-4 h-[239px] md:h-auto items-center justify-start px-4 py-8 rounded-lg shadow-bs w-full">
                  <div className="flex flex-col gap-2 items-center justify-start w-full">
                    <Button
                      className="flex h-[52px] items-center justify-center w-[52px]"
                      shape="circle"
                      color="gray_100"
                      size="sm"
                      variant="fill"
                    >
                      <Img className="h-6" src="images/img_ppc.svg" alt="ppc" />
                    </Button>
                    <Text
                      className="text-black-900 text-center text-lg w-full"
                      size="txtMontserratRomanBold18"
                    >
                      {props?.automotiveseo1}
                    </Text>
                  </div>
                  <Text
                    className="max-w-[265px] md:max-w-full text-blue_gray-900 text-center text-sm"
                    size="txtOpenSansRomanRegular14"
                  >
                    {props?.driveyoursucces}
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col gap-4 h-[239px] md:h-auto items-center justify-start px-4 py-8 rounded-lg shadow-bs w-full">
                  <div className="flex flex-col gap-2 items-center justify-start w-full">
                    <Button
                      className="flex h-[52px] items-center justify-center w-[52px]"
                      shape="circle"
                      color="gray_100"
                      size="sm"
                      variant="fill"
                    >
                      <Img
                        className="h-6"
                        src="images/img_social.svg"
                        alt="social"
                      />
                    </Button>
                    <Text
                      className="text-black-900 text-center text-lg w-full"
                      size="txtMontserratRomanBold18"
                    >
                      {props?.automotiveseo2}
                    </Text>
                  </div>
                  <Text
                    className="max-w-[265px] md:max-w-full text-blue_gray-900 text-center text-sm"
                    size="txtOpenSansRomanRegular14"
                  >
                    {props?.language}
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col gap-4 h-[239px] md:h-auto items-center justify-start px-4 py-8 rounded-lg shadow-bs w-full">
                  <div className="flex flex-col gap-2 items-center justify-start w-full">
                    <Button
                      className="flex h-[52px] items-center justify-center w-[52px]"
                      shape="circle"
                      color="gray_100"
                      size="sm"
                      variant="fill"
                    >
                      <Img
                        className="h-6"
                        src="images/img_content.svg"
                        alt="content"
                      />
                    </Button>
                    <Text
                      className="text-black-900 text-center text-lg w-full"
                      size="txtMontserratRomanBold18"
                    >
                      {props?.automotiveseo3}
                    </Text>
                  </div>
                  <Text
                    className="max-w-[265px] md:max-w-full text-blue_gray-900 text-center text-sm"
                    size="txtOpenSansRomanRegular14"
                  >
                    {props?.driveyoursucces1}
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col gap-4 h-[239px] md:h-auto items-center justify-start px-4 py-8 rounded-lg shadow-bs w-full">
                  <div className="flex flex-col gap-2 items-center justify-start w-full">
                    <Button
                      className="flex h-[52px] items-center justify-center w-[52px]"
                      shape="circle"
                      color="gray_100"
                      size="sm"
                      variant="fill"
                    >
                      <Img
                        className="h-6"
                        src="images/img_webdesign.svg"
                        alt="webdesign"
                      />
                    </Button>
                    <Text
                      className="text-black-900 text-center text-lg w-full"
                      size="txtMontserratRomanBold18"
                    >
                      {props?.automotiveseo4}
                    </Text>
                  </div>
                  <Text
                    className="max-w-[265px] md:max-w-full text-blue_gray-900 text-center text-sm"
                    size="txtOpenSansRomanRegular14"
                  >
                    {props?.description1}
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col gap-4 h-[239px] md:h-auto items-center justify-start px-4 py-8 rounded-lg shadow-bs w-full">
                  <div className="flex flex-col gap-2 items-center justify-start w-full">
                    <Button
                      className="flex h-[52px] items-center justify-center w-[52px]"
                      shape="circle"
                      color="gray_100"
                      size="sm"
                      variant="fill"
                    >
                      <Img
                        className="h-6"
                        src="images/img_datadriven.svg"
                        alt="datadriven"
                      />
                    </Button>
                    <Text
                      className="text-black-900 text-center text-lg w-full"
                      size="txtMontserratRomanBold18"
                    >
                      {props?.automotiveseo5}
                    </Text>
                  </div>
                  <Text
                    className="max-w-[265px] md:max-w-full text-blue_gray-900 text-center text-sm"
                    size="txtOpenSansRomanRegular14"
                  >
                    {props?.driveyoursucces2}
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col gap-4 h-[239px] md:h-auto items-center justify-start px-4 py-8 rounded-lg shadow-bs w-full">
                  <div className="flex flex-col gap-2 items-center justify-start w-full">
                    <Button
                      className="flex h-[52px] items-center justify-center w-[52px]"
                      shape="circle"
                      color="gray_100"
                      size="sm"
                      variant="fill"
                    >
                      <Img
                        className="h-6"
                        src="images/img_solutions.svg"
                        alt="solutions"
                      />
                    </Button>
                    <Text
                      className="text-black-900 text-center text-lg w-full"
                      size="txtMontserratRomanBold18"
                    >
                      {props?.automotiveseo6}
                    </Text>
                  </div>
                  <Text
                    className="max-w-[265px] md:max-w-full text-blue_gray-900 text-center text-sm"
                    size="txtOpenSansRomanRegular14"
                  >
                    {props?.description2}
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col gap-4 h-[239px] md:h-auto items-center justify-start px-4 py-8 rounded-lg shadow-bs w-full">
                  <div className="flex flex-col gap-2 items-center justify-start w-full">
                    <Button
                      className="flex h-[52px] items-center justify-center w-[52px]"
                      shape="circle"
                      color="gray_100"
                      size="sm"
                      variant="fill"
                    >
                      <Img
                        className="h-6"
                        src="images/img_video.svg"
                        alt="video"
                      />
                    </Button>
                    <Text
                      className="text-black-900 text-center text-lg w-full"
                      size="txtMontserratRomanBold18"
                    >
                      {props?.automotiveseo7}
                    </Text>
                  </div>
                  <Text
                    className="max-w-[265px] md:max-w-full text-blue_gray-900 text-center text-sm"
                    size="txtOpenSansRomanRegular14"
                  >
                    {props?.driveyoursucces3}
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Button
            className="cursor-pointer font-montserrat font-semibold min-w-[233px] rounded-[30px] text-center text-lg"
            shape="round"
            color="light_blue_A700"
            size="md"
            variant="fill"
          >
            {props?.getStartedTwo}
          </Button>
        </div>
      </div>
    </>
  );
};

RealEstateColumnOne.defaultProps = {
  ourserviceofferOne: "Our Service Offerings",
  languageOne: " Strategies that Drive Property Market Excellence",
  automotiveseo: "Automotive SEO",
  description:
    "Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today",
  automotiveseo1: "PPC Precision",
  driveyoursucces:
    "Maximize visibility and drive quality traffic with meticulously targeted Pay-Per-Click campaigns.",
  automotiveseo2: "Social Acceleration",
  language: (
    <>
      {" "}
      Engage and influence your audience across social media platforms,
      amplifying your brand&#39;s presence and connection.
    </>
  ),
  automotiveseo3: "Content Excellence",
  driveyoursucces1:
    "Craft compelling, automotive-specific content that resonates with enthusiasts and drives engagement.",
  automotiveseo4: "Web Design",
  description1:
    "Transform visitors into customers with high-performance websites designed for seamless user experiences and increased conversions.",
  automotiveseo5: "Data-Driven Insights",
  driveyoursucces2:
    "Leverage data to refine your strategies, making informed decisions that drive revenue growth.",
  automotiveseo6: "End-to-End Solutions",
  description2:
    "From initial awareness to post-purchase loyalty, we offer full-funnel solutions that guide customers through every step of their journey.",
  automotiveseo7: "Video marketing",
  driveyoursucces3:
    "Unleash the Power of Video Marketing: Captivate, Engage, and Elevate Your Brand with Compelling Visual Stories.",
  getStartedTwo: "Get started",
};

export default RealEstateColumnOne;
