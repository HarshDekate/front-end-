import React from "react";

import { Button, Input, Text, TextArea } from "components";

const RealEstateForm = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-8 items-center justify-center w-full">
          <div className="flex md:flex-col flex-row gap-8 items-start justify-center w-full">
            <div className="flex flex-1 md:flex-1 flex-col gap-4 items-center justify-center w-auto md:w-full">
              <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
                <Text
                  className="text-base text-black-900_04 text-center w-auto"
                  size="txtInterSemiBold16"
                >
                  {props?.name}
                </Text>
                <Input
                  name="frame241"
                  placeholder="Enter your name"
                  className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-inter p-0 text-base text-left w-full"
                  wrapClassName="border border-gray-400 border-solid w-full"
                  shape="round"
                  color="gray_50_01"
                  size="xs"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
                <Text
                  className="text-base text-black-900_04 text-center w-auto"
                  size="txtInterSemiBold16"
                >
                  {props?.phone}
                </Text>
                <Input
                  name="frame241_One"
                  placeholder="Enter your Number"
                  className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-inter p-0 text-base text-left w-full"
                  wrapClassName="border border-gray-400 border-solid w-full"
                  shape="round"
                  color="gray_50_01"
                  size="xs"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
                <Text
                  className="text-base text-black-900_04 text-center w-auto"
                  size="txtInterSemiBold16"
                >
                  {props?.email}
                </Text>
                <Input
                  name="frame241_Two"
                  placeholder="Enter your Total No of Vehicles:"
                  className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-inter p-0 text-base text-left w-full"
                  wrapClassName="border border-gray-400 border-solid w-full"
                  shape="round"
                  color="gray_50_01"
                  size="xs"
                  variant="fill"
                ></Input>
              </div>
            </div>
            <div className="flex flex-1 md:flex-1 flex-col items-center justify-center w-auto md:w-full">
              <div className="flex flex-col gap-3 h-[267px] md:h-auto items-start justify-start w-auto sm:w-full">
                <Text
                  className="text-base text-black-900_04 text-center w-auto"
                  size="txtInterSemiBold16"
                >
                  {props?.message}
                </Text>
                <TextArea
                  className="bg-gray-50_01 border border-gray-400 border-solid font-inter gap-2.5 h-[231px] px-3 py-2 rounded text-base placeholder:text-blue_gray-200 text-blue_gray-200 text-left w-full"
                  name="frame241_Three"
                  placeholder="Enter your Message."
                ></TextArea>
              </div>
            </div>
          </div>
          <Button
            className="cursor-pointer font-bold font-montserrat text-2xl md:text-[22px] text-center sm:text-xl w-[408px]"
            shape="round"
            color="light_blue_A700"
            size="sm"
            variant="fill"
          >
            {props?.getStartedFive}
          </Button>
        </div>
      </div>
    </>
  );
};

RealEstateForm.defaultProps = {
  name: "Name",
  phone: "Phone",
  email: "Email",
  message: "Message",
  getStartedFive: "Get started",
};

export default RealEstateForm;
