import React from "react";

import { Img, Text } from "components";

const ConnectFbPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col h-[800px] md:h-auto items-start justify-start max-w-7xl w-full">
          <div className="flex flex-col h-[800px] md:h-auto items-start justify-start max-w-7xl w-full">
            <header className="border-b border-gray-200 border-solid flex md:flex-col md:gap-10 h-[65px] md:h-auto items-center justify-between px-10 md:px-5 py-3 w-full">
              <div className="flex flex-col h-[23px] md:h-auto items-center justify-start w-[109px]">
                <div className="flex flex-col h-[23px] md:h-auto items-center justify-start w-[109px]">
                  <div className="flex flex-col h-[23px] md:h-auto items-start justify-start w-[77px]">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-gray-900_01 text-lg tracking-[-0.27px] w-auto"
                        size="txtInterBold18Gray90001"
                      >
                        Acme Co
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 sm:flex-col flex-row gap-8 h-10 md:h-auto items-start justify-end max-w-[1090px] w-full">
                <div className="flex flex-row gap-9 h-10 md:h-auto items-center justify-start w-[360px]">
                  <div className="flex flex-col h-[21px] md:h-auto items-start justify-start w-[73px]">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-gray-900_01 text-sm w-auto"
                        size="txtInterMedium14Gray90001"
                      >
                        Dashboard
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col h-[21px] md:h-auto items-start justify-start w-[46px]">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-gray-900_01 text-sm w-auto"
                        size="txtInterMedium14Gray90001"
                      >
                        Clients
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col h-[21px] md:h-auto items-start justify-start w-[52px]">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-gray-900_01 text-sm w-auto"
                        size="txtInterMedium14Gray90001"
                      >
                        Insights
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col h-[21px] md:h-auto items-start justify-start w-20">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-gray-900_01 text-sm w-auto"
                        size="txtInterMedium14Gray90001"
                      >
                        Integrations
                      </Text>
                    </div>
                  </div>
                </div>
                <Img
                  className="h-10 w-[184px]"
                  src="images/img_depth4frame1.svg"
                  alt="depth4frameOne"
                />
              </div>
            </header>
            <div className="flex flex-col h-[735px] md:h-auto items-start justify-center max-w-7xl md:px-10 px-40 sm:px-5 py-5 w-full">
              <div className="flex flex-col h-[695px] md:h-auto items-start justify-start max-w-[960px] mx-auto w-full">
                <div className="flex flex-col items-start justify-start p-4 w-full">
                  <div className="flex flex-col h-10 md:h-auto items-start justify-start w-[363px]">
                    <div className="flex flex-col h-10 md:h-auto items-start justify-start w-[363px]">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900_01 tracking-[-0.80px] w-auto"
                          size="txtInterBold32"
                        >
                          Connect Facebook Page
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col h-10 md:h-auto items-start justify-start max-w-[960px] pb-3 pt-1 px-4 w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-base text-gray-900_01 w-auto"
                      size="txtInterRegular16Gray90001"
                    >
                      You can connect a Facebook Page to receive all page
                      messages and comments as tickets in Acme Co.
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col h-16 md:h-auto items-start justify-start max-w-[960px] px-4 py-3 w-full">
                  <div className="bg-blue-600 flex flex-row gap-2 h-10 md:h-auto items-center justify-center px-4 rounded-[12px] w-[480px] sm:w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_plus.svg"
                      alt="plus"
                    />
                    <div className="bg-blue-600 flex flex-col h-[21px] md:h-auto items-start justify-start w-[203px]">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-sm text-white-A700 tracking-[0.21px] w-auto"
                          size="txtInterBold14WhiteA700"
                        >
                          Connect new Facebook Page
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col h-[46px] md:h-auto items-start justify-start max-w-[960px] pb-2 pt-4 px-4 w-full">
                  <div className="flex flex-col h-[23px] md:h-auto items-start justify-start w-[239px]">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-gray-900_01 text-lg tracking-[-0.27px] w-auto"
                        size="txtInterBold18Gray90001"
                      >
                        Connected Facebook Pages
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex md:flex-col flex-row md:gap-10 items-center justify-between p-2 w-full">
                  <div className="flex sm:flex-1 flex-col h-14 md:h-auto items-center justify-start ml-2 md:ml-[0] w-[528px] sm:w-full">
                    <div className="flex flex-col h-[45px] md:h-auto items-start justify-center w-[156px]">
                      <div className="flex flex-col h-6 md:h-auto items-start justify-start w-[156px]">
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="text-base text-gray-900_01 w-auto"
                            size="txtInterMedium16"
                          >
                            Acme Co
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col h-[21px] md:h-auto items-start justify-start w-[156px]">
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-blue_gray-500_01 text-sm w-auto"
                            size="txtInterRegular14"
                          >
                            Last synced 2 days ago
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col h-8 md:h-auto items-start justify-start mr-2 w-[84px]">
                    <div className="bg-blue_gray-50_01 flex flex-col h-8 md:h-auto items-center justify-center px-4 rounded-[12px] w-[84px]">
                      <div className="bg-blue_gray-50_01 flex flex-col h-[21px] md:h-auto items-start justify-start w-[43px]">
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-gray-900_01 text-sm w-auto"
                            size="txtInterMedium14Gray90001"
                          >
                            Delete
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
    </>
  );
};

export default ConnectFbPage;
