import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Input, Text } from "components";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col h-[735px] md:h-auto items-start justify-center max-w-7xl md:px-10 px-40 sm:px-5 py-5 w-full">
          <div className="flex flex-col h-[695px] md:h-auto items-start justify-start py-5 w-[512px] sm:w-full">
            <div className="flex flex-col h-[59px] md:h-auto items-start justify-start pb-3 pt-5 px-4 w-[512px] sm:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="text-[22px] text-gray-900_01 sm:text-lg md:text-xl tracking-[-0.33px] w-auto"
                  size="txtInterBold22"
                >
                  Log in to your account
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
                      Email
                    </Text>
                  </div>
                  <div className="flex flex-col h-14 md:h-auto items-center justify-start w-[480px] sm:w-full">
                    <Input
                      name="depth8frameZero"
                      placeholder="Email"
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
                      name="depth8frameZero_One"
                      placeholder="Password"
                      className="md:h-auto p-0 placeholder:text-blue_gray-500_01 sm:h-auto text-base text-left w-full"
                      wrapClassName="border border-gray-300 border-solid w-full"
                      type="password"
                    ></Input>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col h-[37px] md:h-auto items-start justify-start pb-3 pt-1 px-4 w-[512px] sm:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <a
                  href="javascript:"
                  className="text-blue_gray-500_01 text-sm w-auto"
                >
                  <Text size="txtInterRegular14">Forgot password?</Text>
                </a>
              </div>
            </div>
            <div className="flex flex-col h-12 md:h-auto items-start justify-start px-4 w-[512px] sm:w-full">
              <div className="flex flex-row gap-3 h-12 md:h-auto items-start justify-start py-3 w-[480px] sm:w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_checkmark.svg"
                  alt="checkmark"
                />
                <div className="flex flex-col h-6 md:h-auto items-start justify-start w-[109px]">
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-base text-gray-900_01 w-auto"
                      size="txtInterRegular16Gray90001"
                    >
                      Remember me
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col h-16 md:h-auto items-start justify-end px-4 py-3 w-[512px] sm:w-full">
              <div
                className="common-pointer bg-blue-600 flex flex-col h-10 md:h-auto items-center justify-center px-4 rounded-[12px] w-[84px]"
                onClick={() => navigate("/chat")}
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
            <div className="flex flex-col h-[37px] md:h-auto items-center justify-start pb-3 pt-1 px-4 w-[512px] sm:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <a
                  href="javascript:"
                  className="text-blue_gray-500_01 text-center text-sm w-auto"
                >
                  <Text size="txtInterRegular14">
                    <>Don&#39;t have an account?</>
                  </Text>
                </a>
              </div>
            </div>
            <div
              className="common-pointer flex flex-col h-16 md:h-auto items-start justify-end px-4 py-3 w-[512px] sm:w-full"
              onClick={() => navigate("/signup")}
            >
              <div className="bg-blue_gray-50_01 flex flex-col h-10 md:h-auto items-center justify-center px-4 rounded-[12px] w-[140px]">
                <div className="bg-blue_gray-50_01 flex flex-col h-[21px] md:h-auto items-start justify-start w-[108px]">
                  <div className="flex flex-col items-start justify-start">
                    <a
                      href="javascript:"
                      className="text-gray-900_01 text-sm tracking-[0.21px] w-auto"
                    >
                      <Text size="txtInterBold14Gray90001">
                        Sign up for free
                      </Text>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
