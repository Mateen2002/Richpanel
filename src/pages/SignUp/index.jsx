import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Input, Text } from "components";

const SignUpPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex md:flex-col flex-row md:gap-5 h-[735px] md:h-auto items-start justify-center max-w-7xl md:px-10 px-40 sm:px-5 py-5 w-full">
          <div className="flex sm:flex-1 flex-col h-[695px] md:h-auto items-start justify-start py-5 w-[512px] sm:w-full">
            <div className="flex flex-col h-[67px] md:h-auto items-center justify-start pb-3 pt-5 px-4 w-[512px] sm:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-900_01 tracking-[-0.70px] w-auto"
                  size="txtInterBold28"
                >
                  Create an account
                </Text>
              </div>
            </div>
            <div className="flex flex-col h-28 md:h-auto items-center justify-start px-4 py-3 w-[512px] sm:w-full">
              <div className="flex flex-col h-[88px] md:h-auto items-end justify-start w-[480px] sm:w-full">
                <div className="flex flex-col h-[88px] md:h-auto items-start justify-start w-[480px] sm:w-full">
                  <div className="flex flex-col h-8 md:h-auto items-start justify-start pb-2 w-[480px] sm:w-full">
                    <Text
                      className="text-base text-gray-900_01 w-full"
                      size="txtInterMedium16"
                    >
                      Full name
                    </Text>
                  </div>
                  <div className="flex flex-col h-14 md:h-auto items-center justify-start w-[480px] sm:w-full">
                    <Input
                      name="depth8frameZero"
                      placeholder="Your full name"
                      className="md:h-auto p-0 placeholder:text-blue_gray-500_01 sm:h-auto text-base text-left w-full"
                      wrapClassName="border border-gray-300 border-solid w-full"
                      type="text"
                    ></Input>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col h-28 md:h-auto items-center justify-start px-4 py-3 w-[512px] sm:w-full">
              <div className="flex flex-col h-[88px] md:h-auto items-end justify-start w-[480px] sm:w-full">
                <div className="flex flex-col h-[88px] md:h-auto items-start justify-start w-[480px] sm:w-full">
                  <div className="flex flex-col h-8 md:h-auto items-start justify-start pb-2 w-[480px] sm:w-full">
                    <Text
                      className="text-base text-gray-900_01 w-full"
                      size="txtInterMedium16"
                    >
                      Email
                    </Text>
                  </div>
                  <div className="flex flex-col h-14 md:h-auto items-center justify-start w-[480px] sm:w-full">
                    <Input
                      name="depth8frameZero_One"
                      placeholder="Your email address"
                      className="md:h-auto p-0 placeholder:text-blue_gray-500_01 sm:h-auto text-base text-left w-full"
                      wrapClassName="border border-gray-300 border-solid w-full"
                      type="email"
                    ></Input>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col h-28 md:h-auto items-center justify-start px-4 py-3 w-[512px] sm:w-full">
              <div className="flex flex-col h-[88px] md:h-auto items-end justify-start w-[480px] sm:w-full">
                <div className="flex flex-col h-[88px] md:h-auto items-start justify-start w-[480px] sm:w-full">
                  <div className="flex flex-col h-8 md:h-auto items-start justify-start pb-2 w-[480px] sm:w-full">
                    <Text
                      className="text-base text-gray-900_01 w-full"
                      size="txtInterMedium16"
                    >
                      Password
                    </Text>
                  </div>
                  <div className="flex flex-col h-14 md:h-auto items-center justify-start w-[480px] sm:w-full">
                    <Input
                      name="depth8frameZero_Two"
                      placeholder="Create a password"
                      className="md:h-auto p-0 placeholder:text-blue_gray-500_01 sm:h-auto text-base text-left w-full"
                      wrapClassName="border border-gray-300 border-solid w-full"
                      type="password"
                    ></Input>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col h-28 md:h-auto items-center justify-start px-4 py-3 w-[512px] sm:w-full">
              <div className="flex flex-col h-[88px] md:h-auto items-end justify-start w-[480px] sm:w-full">
                <div className="flex flex-col h-[88px] md:h-auto items-start justify-start w-[480px] sm:w-full">
                  <div className="flex flex-col h-8 md:h-auto items-start justify-start pb-2 w-[480px] sm:w-full">
                    <Text
                      className="text-base text-gray-900_01 w-full"
                      size="txtInterMedium16"
                    >
                      Confirm password
                    </Text>
                  </div>
                  <div className="flex flex-col h-14 md:h-auto items-center justify-start w-[480px] sm:w-full">
                    <Input
                      name="depth8frameZero_Three"
                      placeholder="Confirm your password"
                      className="md:h-auto p-0 placeholder:text-blue_gray-500_01 sm:h-auto text-base text-left w-full"
                      wrapClassName="border border-gray-300 border-solid w-full"
                      type="password"
                    ></Input>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col h-12 md:h-auto items-start justify-start px-4 w-[512px] sm:w-full">
              <div className="flex sm:flex-col flex-row gap-3 h-12 md:h-auto items-start justify-start py-3 w-[480px] sm:w-full">
                <div className="bg-blue_gray-200 h-6 w-6"></div>
                <div className="flex flex-col h-6 md:h-auto items-start justify-start w-[369px]">
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-base text-gray-900_01 w-auto"
                      size="txtInterRegular16Gray90001"
                    >
                      I agree to the terms of service and privacy policy
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="common-pointer bg-blue-600 flex flex-col h-[58px] md:h-auto items-center justify-center px-4 rounded-[12px] w-[504px] sm:w-full"
              onClick={() => navigate("/connectfb")}
            >
              <div className="bg-blue-600 flex flex-col h-[21px] md:h-auto items-start justify-start w-[47px]">
                <div className="flex flex-col items-start justify-start">
                  <a
                    href="javascript:"
                    className="text-sm text-white-A700 tracking-[0.21px] w-auto"
                  >
                    <Text size="txtInterBold14WhiteA700">Sign in</Text>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Img
            className="h-16 w-[512px]"
            src="images/img_depth4frame8.svg"
            alt="depth4frameEight"
          />
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
