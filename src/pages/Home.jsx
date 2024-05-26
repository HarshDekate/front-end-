import React from "react";

import { Button, Img, Input, List, Text, TextArea } from "components";
import RealEstateColumnOne from "components/RealEstateColumnOne";
import RealEstateFaq from "components/RealEstateFaq";
import RealEstateForm from "components/RealEstateForm";
import Footer from "components/Footer";

const Home = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start mx-auto pb-[38px] w-full">
        <div className="flex flex-col md:gap-10 gap-24 items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="md:h-[1024px] h-[1197px] md:px-5 relative w-full">
              <div className="absolute h-[1024px] inset-x-[0] mx-auto top-[0] w-full">
                <Img
                  className="absolute h-[1024px] inset-[0] justify-center m-auto object-cover w-full"
                  src="images/img_backgroundcomplete.png"
                  alt="backgroundcompl"
                />
                <Img
                  className="absolute h-[810px] object-cover right-[0] rotate-[-141deg] top-[8%] w-[49%]"
                  src="images/img_ellipse190.png"
                  alt="ellipse190"
                />
              </div>
              <div className="absolute flex flex-col gap-8 inset-x-[0] items-center justify-center max-w-[899px] mx-auto top-[24%] w-full">
                <div className="flex flex-col gap-4 items-center justify-center w-full">
                  <Text
                    className="leading-[72.00px] max-w-[899px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center"
                    size="txtMontserratRomanMedium48"
                  >
                    <span className="text-black-900 font-montserrat font-medium">
                      Elevate{" "}
                    </span>
                    <span className="text-light_blue-A700 font-montserrat font-bold">
                      Real Estate Success
                    </span>
                    <span className="text-black-900 font-montserrat font-medium">
                      <> with Osumare&#39;s Digital Expertise</>
                    </span>
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl w-full"
                    size="txtOpenSansRomanRegular24"
                  >
                    Tailored Solutions for Thriving in the Digital Real Estate
                    Landscape
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-bold text-2xl md:text-[22px] text-center sm:text-xl w-[408px]"
                  shape="round"
                  color="light_blue_A700"
                  size="sm"
                  variant="fill"
                >
                  Get started
                </Button>
              </div>
              <div
                className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col font-lato h-[538px] inset-x-[0] items-start justify-start mx-auto p-44 md:px-10 sm:px-5 w-[56%]"
                style={{ backgroundImage: "url('images/img_headerimage.svg')" }}
              >
                <div className="flex flex-col gap-2 items-center justify-start mb-[102px] md:ml-[0] ml-[21px] w-auto">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-center text-shadow-ts text-white-A700 w-full"
                    size="txtLatoBlack32"
                  >
                    We Need{" "}
                  </Text>
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-shadow-ts text-white-A700 w-auto"
                    size="txtLatoBlack32"
                  >
                    Marketing
                  </Text>
                </div>
              </div>
              <div className="absolute bg-white-A700_a3 flex flex-row font-inter inset-x-[0] items-center justify-between max-w-[1440px] mx-auto pt-2 md:px-10 px-20 sm:px-5 top-[0] w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <Img
                    className="sm:flex-1 h-[100px] md:h-auto object-cover w-[172px] sm:w-full"
                    src="images/img_osumarelogo01.png"
                    alt="osumarelogoOne"
                  />
                  <Button
                    className="cursor-pointer font-bold h-11 rounded-[22px] text-base text-center w-[216px]"
                    color="black_900"
                    size="sm"
                    variant="outline"
                  >
                    Contact us
                  </Button>
                </div>
              </div>
            </div>
            <Text
              className="mt-[226px] md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
              size="txtMontserratBold32"
            >
              Real Estate-Focused Digital Mastery
            </Text>
            <div className="flex md:flex-col flex-row gap-10 items-center justify-start max-w-7xl mt-[66px] mx-auto md:px-5 w-full">
              <Img
                className="h-[342px]"
                src="images/img_directingthearrowupcuate.svg"
                alt="directingthearr"
              />
              <div className="flex flex-1 flex-col gap-8 items-start justify-start max-w-[733px] w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="leading-[48.00px] max-w-[646px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                    size="txtMontserratRomanBold32"
                  >
                    Unlock the Potential of Digital Real Estate Excellence
                  </Text>
                  <Text
                    className="leading-[36.00px] max-w-[733px] md:max-w-full text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                    size="txtOpenSansRomanRegular24"
                  >
                    <>
                      At Osumare, we understand that the real estate landscape
                      demands a digital presence that aligns with the
                      intricacies of property marketing. Our range of
                      specialized services is meticulously designed to catapult
                      your brand&#39;s success in the ever-evolving digital
                      property market.
                    </>
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-semibold min-w-[233px] rounded-[30px] text-center text-lg"
                  shape="round"
                  color="light_blue_A700"
                  size="md"
                  variant="fill"
                >
                  Get started
                </Button>
              </div>
            </div>
            <RealEstateColumnOne className="bg-gray-50 flex flex-col gap-2.5 items-start justify-start max-w-[1440px] mt-[232px] md:px-10 sm:px-5 px-[81px] py-[91px] w-full" />
            <div className="flex flex-col gap-4 items-center justify-center max-w-[1278px] mt-[157px] mx-auto md:px-5 w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-full"
                size="txtMontserratBold32"
              >
                <>Navigating Real Estate&#39;s Digital Landscape</>
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl w-full"
                size="txtOpenSansRomanRegular24"
              >
                Insights for Real Estate Marketing Advantage
              </Text>
            </div>
            <div className="flex flex-col font-lato md:gap-10 gap-52 items-center justify-start max-w-7xl mt-16 mx-auto md:px-5 w-full">
              <div className="md:h-[733px] h-[736px] sm:h-[860px] relative w-[1280px] md:w-full">
                <List
                  className="absolute flex flex-col gap-4 inset-y-[0] items-start left-[0] my-auto w-auto"
                  orientation="vertical"
                >
                  <div className="bg-white-A700 border border-gray-200_01 border-solid flex sm:flex-col flex-row gap-4 h-[153px] md:h-auto items-center justify-center my-0 p-8 sm:px-5 rounded-[16px] shadow-bs4 w-auto sm:w-full">
                    <Button
                      className="flex h-[52px] items-center justify-center w-[52px]"
                      shape="circle"
                      color="gray_100"
                      size="sm"
                      variant="fill"
                    >
                      <Img
                        className="h-6"
                        src="images/img_bardfill.svg"
                        alt="bardfill"
                      />
                    </Button>
                    <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                        size="txtPoppinsSemiBold24"
                      >
                        Market Trends Analysis
                      </Text>
                      <Text
                        className="text-base text-blue_gray-900 tracking-[-0.32px] w-auto"
                        size="txtInterRegular16"
                      >
                        Predictive insights to guide real estate strategies.
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 border border-gray-200_01 border-solid flex sm:flex-col flex-row gap-4 h-[153px] md:h-auto items-center justify-center my-0 p-8 sm:px-5 rounded-[16px] shadow-bs4 w-auto sm:w-full">
                    <Button
                      className="flex h-[52px] items-center justify-center w-[52px]"
                      shape="circle"
                      color="gray_100"
                      size="sm"
                      variant="fill"
                    >
                      <Img
                        className="h-6"
                        src="images/img_flashlightfill.svg"
                        alt="flashlightfill"
                      />
                    </Button>
                    <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                        size="txtPoppinsSemiBold24"
                      >
                        Targeted Buyer Persona
                      </Text>
                      <Text
                        className="text-base text-blue_gray-900 tracking-[-0.32px] w-auto"
                        size="txtInterRegular16"
                      >
                        Understand and connect with your ideal property buyers.
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 border border-gray-200_01 border-solid flex sm:flex-col flex-row gap-4 h-[153px] md:h-auto items-center justify-center my-0 p-8 sm:px-5 rounded-[16px] shadow-bs4 w-auto sm:w-full">
                    <Button
                      className="flex h-[52px] items-center justify-center w-[52px]"
                      shape="circle"
                      color="gray_100"
                      size="sm"
                      variant="fill"
                    >
                      <Img
                        className="h-6"
                        src="images/img_shieldcheckfill.svg"
                        alt="shieldcheckfill"
                      />
                    </Button>
                    <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                        size="txtPoppinsSemiBold24"
                      >
                        Competitor Insights
                      </Text>
                      <Text
                        className="text-base text-blue_gray-900 tracking-[-0.32px] w-auto"
                        size="txtInterRegular16"
                      >
                        Stand out in the property market with informed
                        strategies.
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 border border-gray-200_01 border-solid flex sm:flex-col flex-row gap-4 h-[153px] md:h-auto items-center justify-center my-0 p-8 sm:px-5 rounded-[16px] shadow-bs4 w-auto sm:w-full">
                    <Button
                      className="flex h-[52px] items-center justify-center w-[52px]"
                      shape="circle"
                      color="gray_100"
                      size="sm"
                      variant="fill"
                    >
                      <Img
                        className="h-6"
                        src="images/img_phonefindfill.svg"
                        alt="phonefindfill"
                      />
                    </Button>
                    <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                        size="txtPoppinsSemiBold24"
                      >
                        Visual Content Appeal
                      </Text>
                      <Text
                        className="leading-[24.00px] max-w-[454px] md:max-w-full text-base text-blue_gray-900 tracking-[-0.32px]"
                        size="txtInterRegular16"
                      >
                        Captivate buyers with appealing visuals and immersive
                        experiences.
                      </Text>
                    </div>
                  </div>
                </List>
                <div className="absolute bg-gray-50 flex flex-col h-full inset-y-[0] items-center justify-start my-auto p-[18px] right-[0] rounded-[32px] w-[62%]">
                  <div className="h-[556px] md:h-[697px] mb-[111px] mt-[31px] relative w-[99%] md:w-full">
                    <div className="md:h-[555px] h-[556px] m-auto w-full">
                      <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                        <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                          <Img
                            className="h-[517px]"
                            src="images/img_backgroundcomplete_gray_200.svg"
                            alt="backgroundcompl_One"
                          />
                          <Img
                            className="h-[33px]"
                            src="images/img_path.svg"
                            alt="path"
                          />
                        </div>
                      </div>
                      <div className="absolute bottom-[3%] flex sm:flex-col flex-row sm:gap-10 gap-[70px] items-end justify-center right-[12%] w-[58%]">
                        <div className="md:h-[223px] h-[422px] relative w-[67%] sm:w-full">
                          <div className="absolute bottom-[0] h-[223px] inset-x-[0] mx-auto w-[222px]">
                            <Img
                              className="absolute h-[223px] inset-y-[0] my-auto right-[0]"
                              src="images/img_vector_blue_gray_900_01.svg"
                              alt="vector"
                            />
                            <Img
                              className="h-[223px] my-auto"
                              src="images/img_vector_blue_gray_900_01_223x30.svg"
                              alt="vector_One"
                            />
                            <Img
                              className="absolute h-[223px] inset-[0] justify-center m-auto w-[222px]"
                              src="images/img_group.svg"
                              alt="group"
                            />
                          </div>
                          <div className="absolute bg-white-A700_7e flex flex-col inset-x-[0] items-center justify-end mx-auto p-[7px] top-[0] w-full">
                            <div className="bg-black-900_6c md:h-[185px] h-[198px] p-[5px] relative w-full">
                              <div className="md:h-[185px] h-[186px] m-auto w-[93%]">
                                <div className="md:h-[185px] h-[186px] m-auto w-full">
                                  <div className="absolute md:h-[185px] h-[186px] inset-[0] justify-center m-auto w-full">
                                    <Img
                                      className="absolute h-[185px] inset-[0] justify-center m-auto"
                                      src="images/img_vector_white_a700_185x242.svg"
                                      alt="vector_Two"
                                    />
                                    <div
                                      className="absolute bg-cover bg-no-repeat h-[185px] md:h-[72px] inset-[0] justify-center m-auto pb-0.5 pr-0.5 w-[97%]"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group3.svg')",
                                      }}
                                    >
                                      <div className="absolute h-[182px] md:h-[72px] inset-[0] justify-center m-auto w-[98%]">
                                        <div className="absolute h-[72px] right-[1%] top-[26%] w-3/4">
                                          <div className="h-[72px] m-auto w-full">
                                            <div className="absolute h-[72px] inset-[0] justify-center m-auto w-full">
                                              <div className="absolute h-[72px] inset-[0] justify-center m-auto w-[97%]">
                                                <div className="h-[72px] m-auto w-full">
                                                  <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                                                    <div className="flex flex-row items-start justify-evenly w-full">
                                                      <div className="h-[72px] relative w-[89%]">
                                                        <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[97%]">
                                                          <div className="flex flex-row gap-[19px] items-start justify-between w-full">
                                                            <div className="flex flex-col gap-[-4px] items-center justify-start w-auto">
                                                              <Text
                                                                className="md:text-3xl sm:text-[28px] text-[32px] text-shadow-ts text-white-A700 w-auto"
                                                                size="txtLatoBlack32"
                                                              >
                                                                We Are
                                                              </Text>
                                                              <Text
                                                                className="md:text-3xl sm:text-[28px] text-[32px] text-shadow-ts text-white-A700 w-auto"
                                                                size="txtLatoBlack32"
                                                              >
                                                                Expert
                                                              </Text>
                                                            </div>
                                                            <Img
                                                              className="h-5 mt-[15px]"
                                                              src="images/img_arrowleft.svg"
                                                              alt="arrowleft"
                                                            />
                                                          </div>
                                                        </div>
                                                        <Img
                                                          className="absolute h-[11px] inset-y-[0] my-auto right-[0]"
                                                          src="images/img_arrowup.svg"
                                                          alt="arrowup"
                                                        />
                                                      </div>
                                                      <div
                                                        className="bg-cover bg-no-repeat flex flex-col h-[18px] items-center justify-start mt-[17px] w-[18px]"
                                                        style={{
                                                          backgroundImage:
                                                            "url('images/img_group6.svg')",
                                                        }}
                                                      >
                                                        <Img
                                                          className="h-0.5 mb-[3px] mt-2"
                                                          src="images/img_vector_white_a700_2x14.svg"
                                                          alt="vector_Three"
                                                        />
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <Img
                                                    className="absolute h-[11px] right-[2%] top-[17%]"
                                                    src="images/img_checkmark.svg"
                                                    alt="checkmark"
                                                  />
                                                </div>
                                                <Img
                                                  className="absolute h-3.5 right-[8%] top-[7%]"
                                                  src="images/img_close.svg"
                                                  alt="close"
                                                />
                                              </div>
                                              <Img
                                                className="absolute h-3 right-[9%] top-[8%]"
                                                src="images/img_close.svg"
                                                alt="close_One"
                                              />
                                              <Img
                                                className="absolute h-0.5 right-[2%] top-[32%]"
                                                src="images/img_vector_white_a700_2x14.svg"
                                                alt="vector_Four"
                                              />
                                              <Img
                                                className="absolute h-[50px] right-[0] top-[0]"
                                                src="images/img_sort.svg"
                                                alt="sort"
                                              />
                                            </div>
                                            <div
                                              className="absolute bg-cover bg-no-repeat flex p-0.5 right-[9%] top-[0] w-1/4"
                                              style={{
                                                backgroundImage:
                                                  "url('images/img_group5.svg')",
                                              }}
                                            >
                                              <div className="flex flex-col items-center justify-start mt-auto w-[49%]">
                                                <div className="flex flex-col items-start justify-start w-full">
                                                  <Img
                                                    className="h-0.5"
                                                    src="images/img_vector_white_a700_2x14.svg"
                                                    alt="vector_Five"
                                                  />
                                                  <Img
                                                    className="h-0.5 mt-0.5"
                                                    src="images/img_vector_white_a700_2x14.svg"
                                                    alt="vector_Six"
                                                  />
                                                  <Img
                                                    className="h-[15px] ml-2.5 md:ml-[0] mt-1"
                                                    src="images/img_close.svg"
                                                    alt="close_Two"
                                                  />
                                                </div>
                                              </div>
                                              <Img
                                                className="h-[11px] mb-1 ml-[-3.68px] mr-[11px] mt-auto z-[1]"
                                                src="images/img_close.svg"
                                                alt="close_Three"
                                              />
                                            </div>
                                          </div>
                                          <Img
                                            className="absolute bottom-[0] h-[50px] right-[23%]"
                                            src="images/img_contrast.svg"
                                            alt="contrast"
                                          />
                                        </div>
                                        <div className="absolute bottom-[0] flex flex-row inset-x-[0] items-start justify-between mx-auto w-[97%]">
                                          <Img
                                            className="h-[26px] mt-6"
                                            src="images/img_cursor.svg"
                                            alt="cursor"
                                          />
                                          <Img
                                            className="h-[26px] mt-[29px]"
                                            src="images/img_vector.svg"
                                            alt="vector_Seven"
                                          />
                                          <Img
                                            className="h-[37px] mb-[18px]"
                                            src="images/img_globe.svg"
                                            alt="globe"
                                          />
                                        </div>
                                        <div className="absolute flex flex-row items-end justify-between left-[0] top-[0] w-[92%]">
                                          <Img
                                            className="h-[41px]"
                                            src="images/img_vector_white_a700.svg"
                                            alt="vector_Eight"
                                          />
                                          <Img
                                            className="h-[31px] mt-[9px]"
                                            src="images/img_maximize.svg"
                                            alt="maximize"
                                          />
                                        </div>
                                        <Img
                                          className="absolute h-3.5 left-[4%] top-[30%]"
                                          src="images/img_close.svg"
                                          alt="close_Four"
                                        />
                                      </div>
                                      <Img
                                        className="absolute h-3 left-[3%] top-[30%]"
                                        src="images/img_close.svg"
                                        alt="close_Five"
                                      />
                                      <Img
                                        className="absolute h-0.5 left-[0] top-[42%]"
                                        src="images/img_vector_white_a700_2x14.svg"
                                        alt="vector_Nine"
                                      />
                                    </div>
                                  </div>
                                  <Img
                                    className="absolute h-[26px] left-[38%] top-[0]"
                                    src="images/img_television.svg"
                                    alt="television"
                                  />
                                  <Img
                                    className="absolute h-0.5 left-[2%] top-[40%]"
                                    src="images/img_vector_white_a700_2x14.svg"
                                    alt="vector_Ten"
                                  />
                                  <Img
                                    className="absolute h-[50px] left-[0] top-[27%]"
                                    src="images/img_sort.svg"
                                    alt="sort_One"
                                  />
                                </div>
                                <div
                                  className="absolute bg-cover bg-no-repeat md:h-[25px] h-[51px] left-[7%] p-0.5 top-[26%] w-[18%]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group4.svg')",
                                  }}
                                >
                                  <div className="absolute bottom-[4%] flex flex-col items-center justify-start right-[4%] w-[49%]">
                                    <div className="flex flex-col items-start justify-start w-full">
                                      <Img
                                        className="h-0.5"
                                        src="images/img_vector_white_a700_2x14.svg"
                                        alt="vector_Eleven"
                                      />
                                      <Img
                                        className="h-0.5 ml-1 md:ml-[0] mt-0.5"
                                        src="images/img_vector_white_a700_2x14.svg"
                                        alt="vector_Twelve"
                                      />
                                      <Img
                                        className="h-[15px] mt-1"
                                        src="images/img_close.svg"
                                        alt="close_Six"
                                      />
                                    </div>
                                  </div>
                                  <Img
                                    className="absolute bottom-[12%] h-[11px] left-[30%]"
                                    src="images/img_close.svg"
                                    alt="close_Seven"
                                  />
                                </div>
                              </div>
                              <Img
                                className="absolute bottom-[34%] h-[50px] left-[18%]"
                                src="images/img_checkmark_white_a700.svg"
                                alt="checkmark_One"
                              />
                            </div>
                          </div>
                        </div>
                        <Img
                          className="h-[103px] sm:mt-0 mt-[319px]"
                          src="images/img_plant2.svg"
                          alt="plantTwo"
                        />
                      </div>
                    </div>
                    <Img
                      className="absolute bottom-[3%] h-[392px] right-[17%]"
                      src="images/img_character.svg"
                      alt="character"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-center justify-center max-w-[1278px] w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-full"
                  size="txtMontserratBold32"
                >
                  {" "}
                  Driving Property Inquiries to Conversions
                </Text>
                <Text
                  className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl w-full"
                  size="txtOpenSansRomanRegular24"
                >
                  Streamlined Strategies for Real Estate Success
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row font-montserrat md:gap-10 gap-[98px] items-center justify-start max-w-7xl mt-16 mx-auto md:px-5 w-full">
              <Img
                className="h-[400px] w-[500px]"
                src="images/img_housesearchingbro.svg"
                alt="housesearchingb"
              />
              <div className="flex flex-1 flex-col gap-8 items-start justify-start max-w-[682px] w-full">
                <div className="flex flex-col gap-4 items-center justify-center w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-full"
                    size="txtMontserratBold32"
                  >
                    Optimized Path to Property Purchase
                  </Text>
                  <Text
                    className="leading-[36.00px] max-w-[682px] md:max-w-full text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                    size="txtOpenSansRomanRegular24"
                  >
                    In the dynamic realm of real estate, the journey from a
                    property inquiry to a successful conversion demands a
                    well-crafted approach. At Osumare, we specialize in guiding
                    potential buyers through this journey seamlessly, maximizing
                    inquiries-turned-conversions with expert strategies.
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-semibold min-w-[233px] rounded-[30px] text-center text-lg"
                  shape="round"
                  color="light_blue_A700"
                  size="md"
                  variant="fill"
                >
                  Get started
                </Button>
              </div>
            </div>
            <List
              className="flex flex-col font-montserrat gap-16 items-start max-w-7xl mt-16 mx-auto md:px-5 w-full"
              orientation="vertical"
            >
              <div className="flex md:flex-1 flex-col md:gap-10 gap-16 h-[575px] md:h-auto items-center justify-start w-auto md:w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-full"
                  size="txtMontserratBold32"
                >
                  Driving Property Inquiries to Conversions
                </Text>
                <div className="flex md:flex-col flex-row gap-[35px] items-start justify-start w-full">
                  <div className="flex md:flex-1 flex-col gap-[29px] h-[463px] md:h-auto items-center justify-center w-[621px] md:w-full">
                    <div className="bg-gray-100 flex flex-col h-[190px] items-center justify-start p-[30px] sm:px-5 rounded-[50%] w-[190px]">
                      <Img
                        className="h-32 md:h-auto object-cover w-32"
                        src="images/img_virtual10569504.png"
                        alt="virtual10569504"
                      />
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-full"
                        size="txtMontserratRomanBold24"
                      >
                        Call-to-Action Optimization
                      </Text>
                      <Text
                        className="leading-[36.00px] max-w-[621px] md:max-w-full text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl"
                        size="txtOpenSansRomanRegular24"
                      >
                        Our carefully crafted CTAs guide potential buyers
                        through the property journey, enhancing engagement and
                        conversion rates.
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[29px] h-[463px] md:h-auto items-center justify-center w-[624px] md:w-full">
                    <div className="bg-gray-100 flex flex-col h-[190px] items-center justify-start p-[31px] sm:px-5 rounded-[50%] w-[190px]">
                      <Img
                        className="h-32 md:h-auto object-cover w-32"
                        src="images/img_onlinestore3929777.png"
                        alt="onlinestore3929"
                      />
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-full"
                        size="txtMontserratRomanBold24"
                      >
                        Landing Page Efficiency
                      </Text>
                      <Text
                        className="leading-[36.00px] max-w-[624px] md:max-w-full text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl"
                        size="txtOpenSansRomanRegular24"
                      >
                        Tailored landing pages are designed for maximum property
                        lead conversion. They provide seamless user experiences
                        and clear pathways for inquiry submission.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 md:flex-col flex-row gap-[38px] items-start justify-start w-full">
                <div className="flex flex-1 flex-col gap-[29px] h-[463px] md:h-auto items-center justify-center w-full">
                  <div className="bg-gray-100 flex flex-col h-[190px] items-center justify-start p-[30px] sm:px-5 rounded-[50%] w-[190px]">
                    <Img
                      className="h-32 md:h-auto object-cover w-32"
                      src="images/img_3d93453182.png"
                      alt="3d93453182"
                    />
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-full"
                      size="txtMontserratRomanBold24"
                    >
                      Social Proof Utilization
                    </Text>
                    <Text
                      className="leading-[36.00px] max-w-[621px] md:max-w-full text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl"
                      size="txtOpenSansRomanRegular24"
                    >
                      Leverage the power of testimonials and success stories
                      from satisfied buyers to build trust and credibility,
                      encouraging hesitant prospects to take action
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[29px] items-center justify-center w-full">
                  <div className="bg-gray-100 flex flex-col h-[190px] items-center justify-start p-[30px] sm:px-5 rounded-[50%] w-[190px]">
                    <Img
                      className="h-32 md:h-auto object-cover w-32"
                      src="images/img_augmentedreality7065057.png"
                      alt="augmentedrealit"
                    />
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-full"
                      size="txtMontserratRomanBold24"
                    >
                      Mobile-Friendly Experience
                    </Text>
                    <Text
                      className="leading-[36.00px] max-w-[621px] md:max-w-full text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl"
                      size="txtOpenSansRomanRegular24"
                    >
                      With a responsive design approach, our strategies ensure a
                      seamless browsing experience across all devices. This
                      responsiveness enhances engagement and conversions by
                      accommodating the preferences of on-the-go property
                      seekers.
                    </Text>
                  </div>
                </div>
              </div>
            </List>
            <List
              className="flex flex-col font-montserrat gap-16 h-[1102px] items-start max-w-7xl mt-40 mx-auto md:px-5 w-full"
              orientation="vertical"
            >
              <div className="flex md:flex-1 flex-col md:gap-10 gap-16 items-center justify-start w-auto md:w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-auto"
                  size="txtMontserratRomanExtraBold32"
                >
                  Our Expertise in Action
                </Text>
                <div className="flex md:flex-col flex-row gap-[35px] items-start justify-start w-auto md:w-full">
                  <div className="flex flex-col gap-[29px] h-[463px] md:h-auto items-center justify-center w-[621px] md:w-full">
                    <div className="bg-gray-100 flex flex-col h-[190px] items-center justify-start p-[30px] sm:px-5 rounded-[50%] w-[190px]">
                      <Img
                        className="h-32 md:h-auto object-cover w-32"
                        src="images/img_weather5345642.png"
                        alt="weather5345642"
                      />
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-full"
                        size="txtMontserratRomanBold24"
                      >
                        Effective CTAs
                      </Text>
                      <Text
                        className="leading-[36.00px] max-w-[621px] md:max-w-full text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl"
                        size="txtOpenSansRomanRegular24"
                      >
                        {" "}
                        See how our strategic CTAs drove a significant increase
                        in property inquiries and accelerated sales for a real
                        estate agency.
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[29px] h-[463px] md:h-auto items-center justify-center w-[624px] md:w-full">
                    <div className="bg-gray-100 flex flex-col h-[190px] items-center justify-start p-[31px] sm:px-5 rounded-[50%] w-[190px]">
                      <Img
                        className="h-32 md:h-auto object-cover w-32"
                        src="images/img_mass99840402.png"
                        alt="mass99840402"
                      />
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-full"
                        size="txtMontserratRomanBold24"
                      >
                        Conversion-Optimized Landing Pages
                      </Text>
                      <Text
                        className="leading-[36.00px] max-w-[624px] md:max-w-full text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl"
                        size="txtOpenSansRomanRegular24"
                      >
                        Explore a case study where our landing page optimization
                        increased property lead conversion rates by 30%
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 md:flex-col flex-row gap-[38px] items-start justify-start w-auto md:w-full">
                <div className="flex flex-col gap-[29px] h-[463px] md:h-auto items-center justify-center w-[621px] md:w-full">
                  <div className="bg-gray-100 flex flex-col h-[190px] items-center justify-start p-[30px] sm:px-5 rounded-[50%] w-[190px]">
                    <Img
                      className="h-32 md:h-auto object-cover w-32"
                      src="images/img_3dmodel9040866.png"
                      alt="3dmodel9040866"
                    />
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-full"
                      size="txtMontserratRomanBold24"
                    >
                      Trust Building with Social Proof
                    </Text>
                    <Text
                      className="leading-[36.00px] max-w-[621px] md:max-w-full text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl"
                      size="txtOpenSansRomanRegular24"
                    >
                      Discover how leveraging client testimonials boosted buyer
                      confidence, leading to higher conversion rates for a
                      property development project
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[29px] h-[463px] md:h-auto items-center justify-center w-[621px] md:w-full">
                  <div className="bg-gray-100 flex flex-col h-[190px] items-center justify-start p-[30px] sm:px-5 rounded-[50%] w-[190px]">
                    <div className="h-32 relative w-32">
                      <Img
                        className="h-32 m-auto object-cover w-32"
                        src="images/img_medal24390781.png"
                        alt="medal24390781"
                      />
                      <Img
                        className="absolute h-32 inset-[0] justify-center m-auto object-cover w-32"
                        src="images/img_medal24390781_128x128.png"
                        alt="medal24390781_One"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-full"
                      size="txtMontserratRomanBold24"
                    >
                      Mobile-First Success:
                    </Text>
                    <Text
                      className="leading-[36.00px] max-w-[621px] md:max-w-full text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl"
                      size="txtOpenSansRomanRegular24"
                    >
                      {" "}
                      Learn how our mobile-responsive design approach resulted
                      in a 25% increase in inquiries from mobile users for a
                      real estate agency.
                    </Text>
                  </div>
                </div>
              </div>
            </List>
            <div className="flex flex-col font-montserrat mt-8 md:px-5 relative w-full">
              <div className="md:h-[810px] h-[826px] mx-auto w-full">
                <div className="absolute flex flex-col gap-8 inset-x-[0] items-center justify-end max-w-[779px] mx-auto top-[15%] w-full">
                  <div className="flex flex-col gap-4 items-center justify-center w-full">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-full"
                      size="txtMontserratBold32"
                    >
                      Your Peace of Mind
                    </Text>
                    <Text
                      className="leading-[36.00px] max-w-[779px] md:max-w-full text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl"
                      size="txtOpenSansRomanRegular24"
                    >
                      Through our conversion-focused strategies, we ensure that
                      property seekers are not just visitors, but engaged
                      prospects ready to make their next move in the real estate
                      market
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-semibold min-w-[233px] rounded-[30px] text-center text-lg"
                    shape="round"
                    color="light_blue_A700"
                    size="md"
                    variant="fill"
                  >
                    Get started
                  </Button>
                </div>
                <Img
                  className="absolute h-[679px] object-cover right-[0] rotate-[-126deg] top-[0] w-[34%]"
                  src="images/img_ellipse192.png"
                  alt="ellipse192"
                />
                <Img
                  className="absolute h-[810px] inset-y-[0] left-[0] my-auto object-cover rotate-[-141deg] w-[37%]"
                  src="images/img_ellipse193.png"
                  alt="ellipse193"
                />
              </div>
              <div className="bg-gradient  flex flex-col font-poppins items-center justify-end mt-[-268.8px] mx-auto p-[57px] md:px-10 sm:px-5 w-full z-[1]">
                <div className="flex flex-col gap-4 items-center justify-center max-w-[1040px] mt-[26px] w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-full"
                    size="txtMontserratBold32"
                  >
                    What Our Pharma Partners Say
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl w-full"
                    size="txtOpenSansRomanRegular24"
                  >
                    Driving Transformations, One Brand at a Time
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-col items-center justify-center max-w-[1117px] mt-16 md:px-10 px-11 sm:px-5 py-[50px] rounded-[16px] shadow-bs5 w-full">
                  <div className="flex md:flex-col flex-row gap-8 items-center justify-center w-full">
                    <Img
                      className="md:flex-1 h-[464px] sm:h-auto object-cover w-[600px] md:w-full"
                      src="images/img_video_464x600.png"
                      alt="video"
                    />
                    <div className="flex sm:flex-1 flex-col gap-[25px] items-start justify-start w-auto sm:w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-row gap-5 items-center justify-start w-auto">
                          <div className="h-20 relative w-20">
                            <Img
                              className="absolute h-20 inset-[0] justify-center m-auto rounded-[50%] w-20"
                              src="images/img_16851260247252.png"
                              alt="16851260247252"
                            />
                            <Img
                              className="absolute h-[79px] inset-[0] justify-center m-auto rounded-[50%] w-20"
                              src="images/img_whatsappimage20230705.png"
                              alt="whatsappimageTwenty"
                            />
                            <Img
                              className="absolute h-20 inset-[0] justify-center m-auto rounded-[50%] w-20"
                              src="images/img_tabishformalphoto.png"
                              alt="tabishformalpho"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-start w-auto">
                            <Text
                              className="text-black-900_03 text-lg w-auto"
                              size="txtPoppinsBold18"
                            >
                              Tabish khan
                            </Text>
                          </div>
                        </div>
                        <Img
                          className="h-[72px] w-[62px]"
                          src="images/img_symbol.svg"
                          alt="symbol"
                        />
                      </div>
                      <div className="flex flex-col font-opensans items-start justify-start w-auto sm:w-full">
                        <Text
                          className="leading-[36.00px] max-w-[397px] md:max-w-full text-2xl md:text-[22px] text-black-900_03 sm:text-xl"
                          size="txtOpenSansRomanRegular24Black90003"
                        >
                          <>
                            Osumare&#39;s expertise in pharma marketing is
                            unparalleled. Their strategies helped us navigate
                            complex regulations while driving remarkable growth.
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-8 items-start justify-start mt-[39px] w-auto">
                  <Button
                    className="flex h-[60px] items-center justify-center rounded-[50%] w-[60px]"
                    shape="circle"
                    color="light_blue_A700"
                    size="sm"
                    variant="outline"
                  >
                    <Img
                      className="h-[30px]"
                      src="images/img_evaarrowbackfill.svg"
                      alt="evaarrowbackfil"
                    />
                  </Button>
                  <Button
                    className="flex h-[60px] items-center justify-center rotate-[180deg] rounded-[50%] w-[60px]"
                    shape="circle"
                    color="light_blue_A700"
                    size="sm"
                    variant="outline"
                  >
                    <Img
                      className="h-[30px]"
                      src="images/img_evaarrowbackfill_light_blue_a700.svg"
                      alt="evaarrowbackfil_One"
                    />
                  </Button>
                </div>
                <div className="flex flex-col font-montserrat md:gap-10 gap-16 items-center justify-start mb-[15px] mt-40 w-auto md:w-full">
                  <div className="flex flex-col gap-4 items-center justify-center max-w-[1030px] w-full">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-full"
                      size="txtMontserratBold32"
                    >
                      Frequently Asked Questions
                    </Text>
                    <Text
                      className="leading-[36.00px] max-w-[984px] md:max-w-full text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl"
                      size="txtOpenSansRomanRegular24"
                    >
                      Pinpoint your audience with precision, ensuring your
                      marketing efforts reach those most likely to engage with
                      your brand.
                    </Text>
                  </div>
                  <RealEstateFaq className="flex flex-col h-[376px] md:h-auto items-center justify-start max-w-7xl md:px-10 sm:px-5 px-60 w-full" />
                </div>
              </div>
            </div>
            <div className="bg-white-A700_01 md:h-[1035px] sm:h-[1649px] h-[900px] mt-40 md:px-5 py-[17px] relative w-full">
              <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <Img
                    className="h-[810px] md:h-auto sm:mt-0 mt-[55px] object-cover rotate-[-141deg]"
                    src="images/img_ellipse192_810x537.png"
                    alt="ellipse192_One"
                  />
                  <Img
                    className="h-[679px] md:h-auto object-cover rotate-[-126deg]"
                    src="images/img_ellipse193_679x462.png"
                    alt="ellipse193_One"
                  />
                </div>
              </div>
              <div className="absolute flex flex-col md:gap-10 gap-[63px] h-max inset-[0] items-center justify-center m-auto w-[63%]">
                <div className="flex flex-col gap-4 items-center justify-center max-w-[752px] w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-full"
                    size="txtMontserratRomanExtraBold32"
                  >
                    Connect with Our Digital Marketing Experts
                  </Text>
                  <Text
                    className="leading-[36.00px] max-w-[752px] md:max-w-full text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl"
                    size="txtOpenSansRomanRegular24"
                  >
                    <>
                      Reach Out for Tailored Strategies and Results-Driven
                      Solutions. Let&#39;s Elevate Your Online Presence Together
                    </>
                  </Text>
                </div>
                <RealEstateForm className="bg-white-A700 flex flex-col gap-8 items-center justify-center max-w-[904px] md:px-10 px-14 sm:px-5 py-8 rounded-[16px] shadow-bs3 w-full" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 items-center justify-start max-w-7xl mx-auto md:px-5 w-full">
            <div className="bg-gradient1  flex md:flex-col flex-row font-opensans md:gap-5 items-start justify-start sm:pr-5 pr-[35px] rounded-[32px] w-full">
              <div className="h-[657px] relative w-2/5 md:w-full">
                <Img
                  className="h-[657px] m-auto object-cover rotate-[-141deg] w-full"
                  src="images/img_ellipse192_657x490.png"
                  alt="ellipse192_Two"
                />
                <div className="absolute flex flex-col gap-8 items-start justify-start left-[9%] top-[9%] w-3/4">
                  <div className="flex flex-col gap-[47px] items-start justify-start w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-auto">
                      <div className="flex flex-col items-start justify-start rounded w-[38%] md:w-full">
                        <Img
                          className="h-[72px] md:h-auto object-cover w-[91%]"
                          src="images/img_osumarelogo01_72x124.png"
                          alt="osumarelogoOne_One"
                        />
                      </div>
                      <Text
                        className="leading-[24.00px] max-w-[365px] md:max-w-full text-base text-blue_gray-900"
                        size="txtOpenSansRomanRegular16"
                      >
                        The best digital marketing agency in Pune with a proven
                        track record of consistently delivering quality service.
                      </Text>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <Text
                        className="text-black-900 text-center text-lg tracking-[0.30px] w-auto"
                        size="txtMontserratRomanBold18"
                      >
                        Address
                      </Text>
                      <Text
                        className="leading-[24.00px] max-w-[196px] md:max-w-full text-base text-blue_gray-900"
                        size="txtOpenSansRomanRegular16"
                      >
                        Survey No. 43, Pathare Thube Nagar, Nagar Road, Kharadi,
                        Pune-14, Maharastra, India.
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col font-inter gap-6 items-start justify-start w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                      size="txtInterBold24"
                    >
                      Contacts
                    </Text>
                    <div className="flex flex-col font-opensans gap-4 items-start justify-center w-auto">
                      <div className="flex flex-row gap-2 items-start justify-start w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_mailfill.svg"
                          alt="mailfill"
                        />
                        <a
                          href="mailto:%68ello@osum%61re%2Ein"
                          className="text-base text-blue_gray-900 w-auto"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Text>hello@osumare.in</Text>
                        </a>
                      </div>
                      <div className="flex flex-row gap-2 items-start justify-start w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_phonefill.svg"
                          alt="phonefill"
                        />
                        <Text
                          className="text-base text-blue_gray-900 w-auto"
                          size="txtOpenSansRomanRegular16"
                        >
                          +91 8459 8762 26
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-montserrat gap-8 items-start justify-start md:ml-[0] ml-[162px] md:mt-0 mt-14 w-auto">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-auto"
                  size="txtMontserratRomanBold24"
                >
                  Menu
                </Text>
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <Text
                    className="text-base text-blue_gray-900 text-center w-auto"
                    size="txtMontserratRomanMedium16"
                  >
                    Home
                  </Text>
                  <Text
                    className="text-base text-blue_gray-900 text-center w-auto"
                    size="txtMontserratRomanMedium16"
                  >
                    About
                  </Text>
                  <Text
                    className="text-base text-blue_gray-900 text-center w-auto"
                    size="txtMontserratRomanMedium16"
                  >
                    Services
                  </Text>
                  <Text
                    className="text-base text-blue_gray-900 text-center w-auto"
                    size="txtMontserratRomanMedium16"
                  >
                    Work
                  </Text>
                  <Text
                    className="text-base text-blue_gray-900 text-center w-auto"
                    size="txtMontserratRomanMedium16"
                  >
                    Blog
                  </Text>
                  <a
                    href="javascript:"
                    className="text-base text-blue_gray-900 text-center w-auto"
                  >
                    <Text size="txtMontserratRomanMedium16">Career</Text>
                  </a>
                </div>
              </div>
              <div className="flex flex-col font-montserrat gap-6 items-start justify-start ml-60 md:ml-[0] md:mt-0 mt-14 w-auto">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                  size="txtMontserratRomanBold24"
                >
                  Social
                </Text>
                <div className="flex flex-col items-start justify-start w-[280px]">
                  <div className="flex flex-col gap-6 items-start justify-start w-[83%]">
                    <div className="flex flex-row gap-6 items-center justify-between w-full">
                      <Button
                        className="flex h-10 items-center justify-center rounded-[50%] w-10"
                        shape="circle"
                        color="white_A700"
                        size="xs"
                        variant="fill"
                      >
                        <Img
                          className="h-6"
                          src="images/img_airplane.svg"
                          alt="airplane"
                        />
                      </Button>
                      <Button
                        className="flex h-10 items-center justify-center rounded-[50%] w-10"
                        shape="circle"
                        color="white_A700"
                        size="xs"
                        variant="fill"
                      >
                        <Img
                          src="images/img_overflowmenu.svg"
                          alt="overflowmenu"
                        />
                      </Button>
                      <Button
                        className="flex h-10 items-center justify-center rounded-[50%] w-10"
                        shape="circle"
                        color="white_A700"
                        size="xs"
                        variant="fill"
                      >
                        <Img
                          className="h-6"
                          src="images/img_pinterestfill.svg"
                          alt="pinterestfill"
                        />
                      </Button>
                      <Button
                        className="flex h-10 items-center justify-center rounded-[50%] w-10"
                        shape="circle"
                        color="white_A700"
                        size="xs"
                        variant="fill"
                      >
                        <Img
                          className="h-6"
                          src="images/img_volume.svg"
                          alt="volume"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-row gap-6 items-start justify-start w-[63%] md:w-full">
                      <Button
                        className="flex h-10 items-center justify-center mb-[100px] rounded-[50%] w-10"
                        shape="circle"
                        color="white_A700"
                        size="xs"
                        variant="fill"
                      >
                        <Img
                          className="h-6"
                          src="images/img_info.svg"
                          alt="info"
                        />
                      </Button>
                      <div className="border border-dashed border-deep_purple-A200 flex flex-col gap-5 items-center justify-start p-5 rounded-[5px] w-[56%]">
                        <Button
                          className="flex h-10 items-center justify-center rounded-[50%] w-10"
                          shape="circle"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        >
                          <Img
                            className="h-6"
                            src="images/img_facebookboxfill.svg"
                            alt="facebookboxfill"
                          />
                        </Button>
                        <Button
                          className="flex h-10 items-center justify-center rounded-[50%] w-10"
                          shape="circle"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        >
                          <Img
                            className="h-6"
                            src="images/img_facebookboxfill.svg"
                            alt="facebookboxfill_One"
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Text
              className="text-base text-black-900 tracking-[0.30px] w-auto"
              size="txtMontserratRomanMedium16Black900"
            >
              © 2023 Osumare. All rights reserved.
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
