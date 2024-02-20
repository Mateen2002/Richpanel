import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { Img, Text } from "components";

const ChatPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-gray-50 flex flex-col h-[800px] md:h-auto items-start justify-start max-w-7xl w-full">
          <div className="flex flex-col h-[800px] md:h-auto items-start justify-start max-w-7xl w-full">
            <header className="border-b border-gray-200 border-solid flex md:flex-col md:gap-10 h-[65px] md:h-auto items-center justify-between px-10 md:px-5 py-3 w-full">
              <div className="flex flex-col h-[23px] md:h-auto items-center justify-start w-[101px]">
                <div className="flex flex-row gap-4 h-[23px] md:h-auto items-center justify-start w-[101px]">
                  <Img
                    className="h-4 w-4"
                    src="images/img_depth6frame0.svg"
                    alt="depth6frameZero"
                  />
                  <div className="flex flex-col h-[23px] md:h-auto items-start justify-start w-[69px]">
                    <div className="flex flex-col items-start justify-start">
                      <a
                        href="javascript:"
                        className="text-gray-900 text-lg tracking-[-0.27px] w-auto"
                      >
                        <Text size="txtInterBold18">Support</Text>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 md:flex-col flex-row gap-8 h-10 md:h-auto items-start justify-end max-w-[1098px] w-full">
                <div className="flex sm:flex-1 sm:flex-col flex-row gap-9 h-10 md:h-auto items-center justify-start w-[489px] sm:w-full">
                  <div className="flex flex-col h-[21px] md:h-auto items-start justify-start w-[73px]">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-gray-900 text-sm w-auto"
                        size="txtInterMedium14"
                      >
                        Dashboard
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col h-[21px] md:h-auto items-start justify-start w-24">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-gray-900 text-sm w-auto"
                        size="txtInterMedium14"
                      >
                        Conversations
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col h-[21px] md:h-auto items-start justify-start w-[73px]">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-gray-900 text-sm w-auto"
                        size="txtInterMedium14"
                      >
                        Customers
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col h-[21px] md:h-auto items-start justify-start w-[65px]">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-gray-900 text-sm w-auto"
                        size="txtInterMedium14"
                      >
                        Reporting
                      </Text>
                    </div>
                  </div>
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
                </div>
                <Img
                  className="h-10 w-[136px]"
                  src="images/img_depth4frame1_blue_gray_50.svg"
                  alt="depth4frameOne"
                />
                <Img
                  className="h-10 md:h-auto rounded-[50%] w-10"
                  src="images/img_depth4frame2_40x40.png"
                  alt="depth4frameTwo"
                />
              </div>
            </header>
            <div className="flex md:flex-col flex-row gap-1 h-[735px] md:h-auto items-start justify-center max-w-7xl sm:px-5 px-6 py-5 w-full">
              <Sidebar className="!sticky !w-[307px] bg-blue_gray-50 flex h-screen md:hidden justify-start overflow-auto md:px-5 rounded-[12px] top-[0]">
                <div className="flex flex-col h-[72px] md:h-auto items-start justify-start px-4 py-3 w-[307px]">
                  <div className="bg-blue_gray-50 flex flex-row gap-3 h-12 md:h-auto items-center justify-start px-4 py-3 rounded-[12px] w-[275px]">
                    <Img
                      className="h-6 w-6"
                      src="images/img_search.svg"
                      alt="search"
                    />
                    <div className="flex flex-col h-6 md:h-auto items-start justify-start w-[207px]">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-base text-blue_gray-500 w-auto"
                          size="txtInterRegular16"
                        >
                          Search
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  className="h-14 md:h-auto ml-4 mr-[235px] mt-[13px] rounded-[50%] w-14"
                  src="images/img_depth6frame0_56x56.png"
                  alt="depth6frameZero_One"
                />
                <Menu
                  menuItemStyles={{
                    button: {
                      padding: 0,
                      flexDirection: "column",
                      color: "#0c161c",
                      fontWeight: 500,
                      fontSize: "16px",
                      paddingLeft: "112px",
                      paddingRight: "112px",
                      [`&:hover, &.ps-active`]: {
                        color: "#4f7a93",
                        fontWeight: "400 !important",
                      },
                    },
                  }}
                  className="flex flex-col items-center justify-start pb-1 sm:pr-5 pr-6 w-full"
                >
                  <div className="flex flex-col items-center justify-start w-full">
                    <MenuItem>
                      <div className="flex items-start justify-start md:px-10 sm:px-5">
                        <Text className="w-auto">Alice</Text>
                      </div>
                    </MenuItem>
                    <MenuItem>
                      <div className="flex items-end justify-start">
                        <Text className="mr-[60px] w-auto">
                          Hi, I have a question about the product
                        </Text>
                      </div>
                    </MenuItem>
                  </div>
                  <div className="flex flex-col md:h-auto h-px items-start justify-start w-[307px]">
                    <div className="flex flex-col h-[21px] md:h-auto items-start justify-start w-[307px]">
                      <Text
                        className="text-blue_gray-500 text-sm w-full"
                        size="txtInterRegular14Bluegray500"
                      >
                        2m
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start mt-[37px] w-full">
                    <MenuItem>
                      <div className="flex items-start justify-start md:px-10 sm:px-5">
                        <Text className="w-auto">Bob</Text>
                      </div>
                    </MenuItem>
                    <MenuItem>
                      <div className="flex items-end justify-start">
                        <Text className="mr-11 text-blue_gray-500 text-sm w-auto">
                          <>I&#39;m having trouble with my order</>
                        </Text>
                      </div>
                    </MenuItem>
                  </div>
                  <div className="flex flex-col md:h-auto h-px items-start justify-start w-[307px]">
                    <div className="flex flex-col h-[21px] md:h-auto items-start justify-start w-[307px]">
                      <Text
                        className="text-blue_gray-500 text-sm w-full"
                        size="txtInterRegular14Bluegray500"
                      >
                        5m
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="md:h-auto h-px rounded-[50%] w-full"
                    src="images/img_depth6frame0_1x307.png"
                    alt="depth6frameZero_Two"
                  />
                  <div className="flex flex-col items-center justify-start mt-[37px] w-full">
                    <MenuItem>
                      <div className="flex items-start justify-start md:px-10 sm:px-5">
                        <Text className="w-auto">Charlie</Text>
                      </div>
                    </MenuItem>
                    <MenuItem>
                      <div className="flex items-end justify-start">
                        <Text className="mr-[50px] text-blue_gray-500 text-sm w-auto">
                          Can you help me with my refund?
                        </Text>
                      </div>
                    </MenuItem>
                  </div>
                  <div className="flex flex-col md:h-auto h-px items-start justify-start w-[307px]">
                    <div className="flex flex-col h-[21px] md:h-auto items-start justify-start w-[307px]">
                      <Text
                        className="text-blue_gray-500 text-sm w-full"
                        size="txtInterRegular14Bluegray500"
                      >
                        8m
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="md:h-auto h-px rounded-[50%] w-full"
                    src="images/img_depth6frame0_1.png"
                    alt="depth6frameZero_Three"
                  />
                  <div className="flex flex-col items-center justify-start mt-[37px] w-full">
                    <MenuItem>
                      <div className="flex items-start justify-start md:px-10 sm:px-5">
                        <Text className="w-auto">David</Text>
                      </div>
                    </MenuItem>
                    <MenuItem>
                      <div className="flex items-end justify-start">
                        <Text className="mr-[58px] text-blue_gray-500 text-sm w-auto">
                          I need to change my shipping address
                        </Text>
                      </div>
                    </MenuItem>
                  </div>
                  <Img
                    className="md:h-auto h-px rounded-[50%] w-full"
                    src="images/img_depth6frame0_2.png"
                    alt="depth6frameZero_Four"
                  />
                </Menu>
                <div className="flex flex-col h-[21px] md:h-auto items-start justify-start mb-[325px] ml-[264px] mr-[15px] w-[27px]">
                  <div className="flex flex-col h-[21px] md:h-auto items-start justify-start w-[27px]">
                    <Text
                      className="text-blue_gray-500 text-sm w-full"
                      size="txtInterRegular14Bluegray500"
                    >
                      10m
                    </Text>
                  </div>
                </div>
              </Sidebar>
              <div className="flex flex-1 flex-col h-[695px] md:h-auto items-start justify-start max-w-[921px] md:px-5 w-full">
                <div className="flex flex-col items-start justify-start p-4 w-full">
                  <div className="flex flex-col h-10 md:h-auto items-start justify-start w-72">
                    <div className="flex flex-col h-10 md:h-auto items-start justify-start w-72">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900 tracking-[-0.80px] w-auto"
                          size="txtInterBold32Gray900"
                        >
                          Alice
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-3 h-[81px] md:h-auto items-start justify-start max-w-[921px] p-4 w-full">
                  <Img
                    className="h-10 md:h-auto rounded-[50%] w-10"
                    src="images/img_depth5frame0.png"
                    alt="depth5frameZero"
                  />
                  <div className="flex flex-1 flex-col h-[49px] md:h-auto items-start justify-start max-w-[837px] w-full">
                    <div className="flex flex-col gap-1 h-[49px] md:h-auto items-start justify-start max-w-[837px] w-full">
                      <div className="flex flex-row gap-[13px] items-start justify-start md:pr-10 sm:pr-5 pr-[766px] w-full">
                        <div className="flex flex-col h-5 md:h-auto items-start justify-start w-[39px]">
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-base text-gray-900 w-auto"
                              size="txtInterBold16"
                            >
                              Alice
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col h-[21px] md:h-auto items-start justify-start w-[18px]">
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-blue_gray-500 text-sm w-auto"
                              size="txtInterRegular14Bluegray500"
                            >
                              1m
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col h-6 md:h-auto items-start justify-start max-w-[837px] w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="text-base text-gray-900 w-auto"
                            size="txtInterRegular16Gray900"
                          >
                            Hi, I have a question about the product
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-3 h-[72px] md:h-auto items-center justify-start max-w-[921px] px-4 py-3 w-full">
                  <Img
                    className="h-10 md:h-auto rounded-[50%] w-10"
                    src="images/img_depth5frame0_40x40.png"
                    alt="depth5frameZero_One"
                  />
                  <div className="bg-blue_gray-50 flex flex-1 md:flex-col flex-row gap-4 h-12 md:h-auto items-center justify-start max-w-[837px] pl-4 pr-2 rounded-[12px] w-full">
                    <div className="flex flex-1 flex-col h-6 md:h-auto items-start justify-start max-w-[665px] w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-base text-blue_gray-500 w-auto"
                          size="txtInterRegular16"
                        >
                          Type a message
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4 h-8 md:h-auto items-center justify-end w-[132px]">
                      <Img
                        className="h-8 w-8"
                        src="images/img_upload.svg"
                        alt="upload"
                      />
                      <div className="flex flex-col h-8 md:h-auto items-start justify-start w-[84px]">
                        <div className="bg-blue-600 flex flex-col h-8 md:h-auto items-center justify-center px-4 rounded-[12px] w-[84px]">
                          <div className="bg-blue-600 flex flex-col h-[21px] md:h-auto items-start justify-start w-[34px]">
                            <div className="flex flex-col items-start justify-start">
                              <Text
                                className="text-gray-50 text-sm w-auto"
                                size="txtInterMedium14Gray50"
                              >
                                Send
                              </Text>
                            </div>
                          </div>
                        </div>
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

export default ChatPage;
