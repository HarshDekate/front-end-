import React from 'react'
import { Text } from './Text'
import { Img } from './Img'
import { Button } from './Button'

function Footer() {
    return (
        <div className="flex flex-col gap-8 items-center justify-start max-w-7xl mx-auto md:px-5 w-full">
            <div className="bg-gradient1  flex md:flex-col flex-row font-opensans md:gap-5 items-start justify-start sm:pr-5 pr-[35px] rounded-[32px] w-full">
                <div className="h-[657px] relative w-full md:w-2/5">
                    <Img
                        className="h-[657px] m-auto object-cover rotate-[-141deg] w-full"
                        src="images/img_ellipse192_657x490.png"
                        alt="ellipse192_Two"
                    />
                    <div className="absolute flex flex-col gap-8 items-start justify-start md:left-[9%] md:top-[9%] left-[5%] top-[5%] w-full md:w-3/4">
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
                                    className="leading-[24.00px] max-w-[360px] md:max-w-full text-base text-blue_gray-900"
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
                        <div className="flex flex-col font-inter gap-6 items-start justify-start w-full">
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
                <div className="flex flex-col font-montserrat gap-8 items-start justify-start md:ml-[0] ml-0 md:mt-0 mt-14 w-full md:w-auto">

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
                <div className="flex flex-col font-montserrat gap-6 items-start justify-start ml-0 md:ml-[0] md:mt-0 mt-14 w-full md:w-auto">
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
                    </div>
                    <div className="flex flex-row gap-6 items-center justify-start w-[45%] md:w-full">
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
                      <Button
                        className="flex h-10 items-center justify-center rounded-[50%] w-10"
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
                    </div>
                  </div>
                </div>
                </div>
            </div>
            <Text
                className="text-base text-black-900 tracking-[0.30px] w-full text-center md:text-left"
                size="txtMontserratRomanMedium16Black900"
            >
                © 2023 Osumare. All rights reserved.
            </Text>
        </div>

    )
}

export default Footer