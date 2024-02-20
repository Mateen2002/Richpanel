import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";

const HomePagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-gray-50 flex flex-col h-[800px] md:h-auto items-start justify-start max-w-7xl w-full">
          <div className="flex flex-col h-[800px] md:h-auto items-start justify-start max-w-7xl w-full">
            <header className="border-b border-gray-200 border-solid flex md:flex-col md:gap-10 h-[65px] md:h-auto items-center justify-between px-10 md:px-5 py-3 w-full">
              <div className="flex flex-col h-[23px] md:h-auto items-center justify-start w-32">
                <div className="flex flex-row gap-4 h-[23px] md:h-auto items-center justify-start w-32">
                  <Img
                    className="h-4 w-4"
                    src="images/img_refresh.svg"
                    alt="refresh"
                  />
                  <div className="flex flex-col h-[23px] md:h-auto items-start justify-start w-24">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-gray-900 text-lg tracking-[-0.27px] w-auto"
                        size="txtInterBold18"
                      >
                        Messenger
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 md:flex-col flex-row gap-8 h-10 md:h-auto items-start justify-end max-w-[1071px] w-full">
                <div className="flex flex-row gap-9 h-10 md:h-auto items-center justify-start w-[341px]">
                  <div className="flex flex-col h-[21px] md:h-auto items-start justify-start w-9">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-gray-900 text-sm w-auto"
                        size="txtInterMedium14"
                      >
                        Inbox
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col h-[21px] md:h-auto items-start justify-start w-[70px]">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-gray-900 text-sm w-auto"
                        size="txtInterMedium14"
                      >
                        Audiences
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col h-[21px] md:h-auto items-start justify-start w-[52px]">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-gray-900 text-sm w-auto"
                        size="txtInterMedium14"
                      >
                        Insights
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-2 h-10 md:h-auto items-start justify-start w-[205px]">
                  <div className="bg-blue-600 flex flex-col h-10 md:h-auto items-center justify-center px-4 rounded-[12px] w-[84px]">
                    <div className="bg-blue-600 flex flex-col h-[21px] md:h-auto items-start justify-start w-[47px]">
                      <Button
                        className="common-pointer bg-transparent cursor-pointer font-bold text-center text-gray-50 text-sm tracking-[0.21px]"
                        onClick={() => navigate("")}
                      >
                        Create
                      </Button>
                    </div>
                  </div>
                  <div
                    className="common-pointer bg-blue_gray-50 flex flex-col h-10 md:h-auto items-center justify-center px-4 rounded-[12px] w-[113px]"
                    onClick={() => navigate("")}
                  >
                    <div className="bg-blue_gray-50 flex flex-col h-[21px] md:h-auto items-start justify-start w-[81px]">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-gray-900 text-sm tracking-[0.21px] w-auto"
                          size="txtInterBold14"
                        >
                          Get Started
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  className="h-10 md:h-auto rounded-[50%] w-10"
                  src="images/img_depth4frame2.png"
                  alt="depth4frameTwo"
                />
              </div>
            </header>
            <div className="flex flex-col h-[735px] md:h-auto items-start justify-center max-w-7xl md:px-10 px-40 sm:px-5 py-5 w-full">
              <div className="flex flex-col h-[695px] md:h-auto items-start justify-start max-w-[960px] mx-auto w-full">
                <div className="flex flex-col items-center justify-start p-4 w-full">
                  <div className="flex flex-col gap-3 h-[105px] md:h-auto items-start justify-start max-w-[928px] w-full">
                    <div className="flex flex-col h-[45px] md:h-auto items-start justify-start max-w-[928px] w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-1.19px] w-auto"
                          size="txtInterBlack36"
                        >
                          Welcome to Messenger
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col h-12 md:h-auto items-start justify-start max-w-[928px] w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-base text-blue_gray-500 w-auto"
                          size="txtInterRegular16"
                        >
                          <>
                            You&#39;re just a few steps away from seamlessly
                            managing your customer conversations. Easily connect
                            to your website, app, and more.
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col h-16 md:h-auto items-start justify-center max-w-[960px] px-4 py-3 w-full">
                  <div className="flex sm:flex-col flex-row gap-3 items-center justify-center w-[52%]">
                    <div className="flex flex-col h-10 md:h-auto items-start justify-center w-[205px]">
                      <div className="bg-blue-600 flex flex-col h-10 md:h-auto items-center justify-center px-4 rounded-[12px] w-[205px]">
                        <div className="bg-blue-600 flex flex-col h-[21px] md:h-auto items-start justify-start w-[125px]">
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-gray-50 text-sm tracking-[0.21px] w-auto"
                              size="txtInterBold14Gray50"
                            >
                              Connect a Source
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col h-10 md:h-auto items-start justify-center w-[262px]">
                      <div className="bg-blue_gray-50 flex flex-col h-10 md:h-auto items-center justify-center px-4 rounded-[12px] w-[262px]">
                        <div className="bg-blue_gray-50 flex flex-col h-[21px] md:h-auto items-start justify-start w-[182px]">
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-gray-900 text-sm tracking-[0.21px] w-auto"
                              size="txtInterBold14"
                            >
                              Connect a Facebook Page
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start p-4 w-full">
                  <div className="flex flex-col gap-3 items-start justify-start w-full">
                    <List
                      className="sm:flex-col flex-row gap-3 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center w-full"
                      orientation="horizontal"
                    >
                      <div className="flex flex-1 flex-col h-44 md:h-auto items-start justify-start sm:ml-[0] w-full">
                        <div className="flex flex-col h-44 md:h-auto items-start justify-start w-44">
                          <Img
                            className="h-44 md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-44"
                            src="images/img_depth7frame0.png"
                            alt="depth7frameZero"
                          />
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col h-44 md:h-auto items-start justify-start sm:ml-[0] w-full">
                        <div className="flex flex-col h-44 md:h-auto items-start justify-start w-44">
                          <Img
                            className="h-44 md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-44"
                            src="images/img_depth7frame0_176x176.png"
                            alt="depth7frameZero"
                          />
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col h-44 md:h-auto items-start justify-start sm:ml-[0] w-full">
                        <div className="flex flex-col h-44 md:h-auto items-start justify-start w-44">
                          <Img
                            className="h-44 md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-44"
                            src="images/img_depth7frame0_1.png"
                            alt="depth7frameZero"
                          />
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col h-44 md:h-auto items-start justify-start sm:ml-[0] w-full">
                        <div className="flex flex-col h-44 md:h-auto items-start justify-start w-44">
                          <Img
                            className="h-44 md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-44"
                            src="images/img_depth7frame0_2.png"
                            alt="depth7frameZero"
                          />
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col h-44 md:h-auto items-start justify-start sm:ml-[0] w-full">
                        <div className="flex flex-col h-44 md:h-auto items-start justify-start w-44">
                          <Img
                            className="h-44 md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-44"
                            src="images/img_depth7frame0_3.png"
                            alt="depth7frameZero"
                          />
                        </div>
                      </div>
                    </List>
                    <div className="flex flex-col h-44 md:h-auto items-start justify-start w-44">
                      <div className="flex flex-col h-44 md:h-auto items-start justify-start w-44">
                        <Img
                          className="h-44 md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-44"
                          src="images/img_depth7frame0_4.png"
                          alt="depth7frameZero"
                        />
                      </div>
                    </div>
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

export default HomePagePage;
