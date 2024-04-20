"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const BRANDS = [
  {
    name: "apple",
    image: "/apple.svg",
    series: [
      {
        name: "SE Series",
        models: [
          {
            name: "SE 2020",
            variants: ["128 GB", "256 GB", "512 GB"],
          },
          {
            name: "SE 2021",
            variants: ["128 GB", "256 GB", "512 GB"],
          },
        ],
      },
      {
        name: "6 Series",
        models: [
          {
            name: "6",
            variants: ["128 GB", "256 GB", "512 GB"],
          },
          {
            name: "6 Plus",
            variants: ["128 GB", "256 GB", "512 GB"],
          },
        ],
      },
      {
        name: "7 Series",
        models: [
          {
            name: "7",
            variants: ["128 GB", "256 GB", "512 GB"],
          },
          {
            name: "7 Plus",
            variants: ["128 GB", "256 GB", "512 GB"],
          },
        ],
      },
      {
        name: "8 Series",
        models: [
          {
            name: "8",
            variants: ["128 GB", "256 GB", "512 GB"],
          },
          {
            name: "8 Plus",
            variants: ["128 GB", "256 GB", "512 GB"],
          },
        ],
      },
      {
        name: "X Series",
        models: [
          {
            name: "X",
            variants: ["128 GB", "256 GB", "512 GB"],
          },
          {
            name: "X Plus",
            variants: ["128 GB", "256 GB", "512 GB"],
          },
        ],
      },
      {
        name: "11 Series",
        models: [
          {
            name: "11",
            variants: ["128 GB", "256 GB", "512 GB"],
          },
          {
            name: "11 Pro",
            variants: ["128 GB", "256 GB", "512 GB"],
          },
          {
            name: "11 Pro Max",
            variants: ["128 GB", "256 GB", "512 GB"],
          },
        ],
      },
      {
        name: "12 Series",
        models: [
          {
            name: "12",
            variants: ["128 GB", "256 GB", "512 GB"],
          },
          {
            name: "12 Pro",
            variants: ["128 GB", "256 GB", "512 GB"],
          },
          {
            name: "12 Pro Max",
            variants: ["128 GB", "256 GB", "512 GB"],
          },
        ],
      },
      {
        name: "13 Series",
        models: [
          {
            name: "13",
            variants: ["128 GB", "256 GB", "512 GB"],
          },
          {
            name: "13 Pro",
            variants: ["128 GB", "256 GB", "512 GB"],
          },
          {
            name: "13 Pro Max",
            variants: ["128 GB", "256 GB", "512 GB"],
          },
        ],
      },
      {
        name: "14 Series",
        models: [
          {
            name: "14",
            variants: ["128 GB", "256 GB", "512 GB"],
          },
          {
            name: "14 Pro",
            variants: ["128 GB", "256 GB", "512 GB"],
          },
          {
            name: "14 Pro Max",
            variants: ["128 GB", "256 GB", "512 GB"],
          },
        ],
      },
      {
        name: "15 Series",
        models: [
          {
            name: "15",
            variants: ["128 GB", "256 GB", "512 GB"],
          },
          {
            name: "15 Pro",
            variants: ["128 GB", "256 GB", "512 GB"],
          },
          {
            name: "15 Pro Max",
            variants: ["128 GB", "256 GB", "512 GB"],
          },
        ],
      },
    ],
  },
  {
    name: "samsung",
    image: "/samsung2.svg",
    series: null,
  },
  {
    name: "mi",
    image: "/mi2.svg",
    series: null,
  },
  {
    name: "oneplus",
    image: "/oneplus2.svg",
    series: null,
  },
  {
    name: "vivo",
    image: "/vivo2.svg",
    series: null,
  },
  {
    name: "oppo",
    image: "/oppo2.svg",
    series: null,
  },
  {
    name: "realme",
    image: "/realme2.svg",
    series: null,
  },
  {
    name: "motorola",
    image: "/motorola2.svg",
    series: null,
  },
  {
    name: "lenovo",
    image: "/lenovo2.svg",
    series: null,
  },
  {
    name: "nokia",
    image: "/nokia2.svg",
    series: null,
  },
  {
    name: "nothing",
    image: "/nothing2.svg",
    series: null,
  },
  {
    name: "poco",
    image: "/poco2.svg",
    series: null,
  },
  {
    name: "google",
    image: "/google2.svg",
    series: null,
  },
  {
    name: "infinix",
    image: "/infinix2.svg",
    series: null,
  },
  {
    name: "techno",
    image: "/techno2.svg",
    series: null,
  },
  {
    name: "iqoo",
    image: "/iqoo2.svg",
    series: null,
  },
  {
    name: "honor",
    image: "/honor2.svg",
    series: null,
  },
] as const;

const DEVICE_INFO = {
  normalCondition: [
    "Are You Able To Make Calls ?",
    "Is Your Device's Touch Screen Working Properly ?",
    "Is Your Phone's Screen Original ?",
  ],
  physicalCondition: [
    "Broken/Scratch On The Device Screen",
    "Scratch/Dent On Device Body",
    "Dead Spot/Visible Line On Screen",
    "Device Panel Missing/Broken",
  ],
  functionalCondition: [
    "Front Camera Not Working",
    "Volume Button Not Working",
    "Finger Touch Not Working",
    "Speaker Faulty",
    "Power Button Not Working",
    "Silent Button Not Working",
    "Camera Glass Broken",
    "Vibrator Is Not Working",
    "Proximity Sensor Not Working",
    "Back Camera Not Working",
    "Wifi Not Working",
    "Batter In Service (less than 80%)",
    "Charging Port Not Working",
    "Face Sensor Not Working",
    "Audio Receiver Not Working",
    "Bluetooth Not Working",
    "Microphone Not Working",
  ],
  accessories: ["Original Charger Of Device", "Box With Same IMEI"],
} as const;

const SellPhone: React.FC = () => {
  const [moreBrands, setMoreBrands] = useState(false);
  const [selectBrand, setSelectBrand] = useState("");
  const [selectSeries, setSelectSeries] = useState("");
  const [selectVariant, setSelectVariant] = useState("");
  const [exactValueButtonClicked, setExactValueButtonClicked] = useState(false);
  const [normalConditionAnswers, setNormalConditionAnswers] = useState(
    [] as boolean[]
  );
  const [normalConditionButtonClicked, setNormalConditionButtonClicked] =
    useState(false);
  const [physicalConditionAnswers, setPhysicalConditionAnswers] = useState(
    [] as string[]
  );
  const [physicalConditionButtonClicked, setPhysicalConditionButtonClicked] =
    useState(false);
  const [functionalConditionAnswers, setFunctionalConditionAnswers] = useState(
    [] as string[]
  );
  const [
    functionalConditionButtonClicked,
    setFunctionalConditionButtonClicked,
  ] = useState(false);
  const [accessoriesAnswers, setAccessoriesAnswers] = useState([] as string[]);
  const [accessoriesButtonClicked, setAccessoriesButtonClicked] =
    useState(false);

  return (
    <div className="py-8 border-y border-t-black w-full">
      {!moreBrands && !selectBrand ? (
        <div className="w-full mx-auto max-w-6xl border-2 rounded-lg px-6 pt-12 pb-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center gap-[2rem] w-full sm:w-[50%]">
              <h3 className="text-4xl font-semibold">
                Sell Your Moble Phone For Instant Cash
              </h3>

              <Input
                className="shadow-md h-[3rem] px-4"
                placeholder="Search Your Mobile To Sell"
              />

              <div className="flex items-center justify-center w-full">
                <div className="mx-auto w-full bg-black border-[0.8px] border-black rounded-full" />
                <p className="w-[26rem] text-center text-sm">
                  Or Choose A Brand
                </p>
                <div className="mx-auto w-full bg-black border-[0.8px] border-black rounded-full" />
              </div>

              <div className="flex flex-wrap sm:flex-nowrap items-center justify-start gap-3 w-full">
                <Image src="/apple.svg" alt="apple" width={100} height={100} />
                <Image
                  src="/samsung2.svg"
                  alt="samsung2"
                  width={100}
                  height={100}
                />
                <Image
                  src="/oneplus2.svg"
                  alt="oneplus2"
                  width={100}
                  height={100}
                />
                <Image src="/vivo2.svg" alt="vivo2" width={100} height={100} />

                <button
                  className="underline cursor-pointer"
                  onClick={() => {
                    setMoreBrands(true);
                  }}
                >
                  More Brand
                </button>
              </div>
            </div>

            <div className="relative h-[198px] w-full sm:w-[50%] mb-auto">
              <Image
                className="object-cover"
                src="/sell_mobile_phone.svg"
                alt="sell mobile phone"
                fill
              />
            </div>
          </div>

          <div className="flex justify-center items-center gap-5 sm:gap-12 mt-8 sm:mt-12">
            <p>Maximum Value</p>
            <p>Self & Hassle-Free</p>
            <p>Free Doorstep Pickup</p>
          </div>
        </div>
      ) : (
        moreBrands &&
        !selectBrand && (
          <div className="w-full mx-auto max-w-6xl">
            <h3 className="text-2xl font-semibold">Select Brand</h3>

            <div className="mt-5 flex flex-wrap items-center justify-start gap-y-8 gap-x-12 w-full">
              {BRANDS.map((brand) => (
                <Image
                  key={brand.name}
                  className="cursor-pointer"
                  onClick={() => {
                    brand.series && setSelectBrand(brand.name);
                  }}
                  src={brand.image}
                  alt={brand.name}
                  width={100}
                  height={100}
                />
              ))}
              <button className="underline cursor-pointer">
                Or Search By Model
              </button>
            </div>
          </div>
        )
      )}

      {selectBrand && !selectSeries && (
        <div className="w-full mx-auto max-w-6xl">
          <h3 className="text-2xl font-semibold">Select Series</h3>

          <div className="mt-5 flex flex-wrap items-center justify-start gap-y-6 gap-x-12 w-full">
            {BRANDS.find((brand) => brand.name === selectBrand)?.series?.map(
              (series, i) => (
                <Button
                  key={i}
                  className="border-2 bg-transparent hover:bg-gray-200 hover:shadow-none text-gray-800 rounded-lg px-5 py-3 w-[12rem] transition-all shadow-md"
                  onClick={() => {
                    setSelectSeries(series.name);
                  }}
                >
                  {series.name}
                </Button>
              )
            )}
          </div>
        </div>
      )}

      {selectSeries && !exactValueButtonClicked && (
        <div className="mx-auto max-w-6xl w-full">
          <h3 className="text-2xl font-semibold my-4">Sell Your iPhone 13</h3>
          <div className="w-full mx-auto max-w-6xl border-2 shadow-md rounded-lg py-3">
            <div className="flex flex-col items-center justify-center">
              <h4 className="text-lg font-semibold">Apple iPhone 13</h4>
              <Image
                src={"/iphone13.svg"}
                alt="iphone 13"
                width={250}
                height={250}
              />
              <p>Choose a Variant</p>

              <div className="mx-auto bg-black border-[0.8px] border-black rounded-full w-[40%] my-2" />

              <div className="w-[40%] flex items-center gap-2">
                <Button
                  className={cn(
                    "border-2 bg-transparent hover:bg-gray-200 hover:shadow-none text-gray-800 rounded-lg px-5 py-3 w-full transition-all shadow-md",
                    {
                      "bg-gray-200": selectVariant === "128 GB",
                    }
                  )}
                  onClick={() => {
                    setSelectVariant("128 GB");
                  }}
                >
                  128 GB
                </Button>

                <Button
                  className={cn(
                    "border-2 bg-transparent hover:bg-gray-200 hover:shadow-none text-gray-800 rounded-lg px-5 py-3 w-full transition-all shadow-md",
                    {
                      "bg-gray-200": selectVariant === "256 GB",
                    }
                  )}
                  onClick={() => {
                    setSelectVariant("256 GB");
                  }}
                >
                  256 GB
                </Button>

                <Button
                  className={cn(
                    "border-2 bg-transparent hover:bg-gray-200 hover:shadow-none text-gray-800 rounded-lg px-5 py-3 w-full transition-all shadow-md",
                    {
                      "bg-gray-200": selectVariant === "512 GB",
                    }
                  )}
                  onClick={() => {
                    setSelectVariant("512 GB");
                  }}
                >
                  512 GB
                </Button>
              </div>

              <Button
                className="w-[25%] bg-green-500 text-white hover:bg-green-400 mt-4 font-semibold text-lg disabled:bg-gray-400"
                disabled={!selectVariant}
                onClick={() => {
                  setExactValueButtonClicked(true);
                }}
              >
                Get Exact Value
              </Button>

              <div className="mt-3 rounded-lg bg-amber-100 text-black/70 flex flex-col items-center gap-0.5 text-sm p-2">
                Note:-
                <p>
                  The price stated above depends on the condition of the product
                  and is not final. The final price offer will be quoted at the
                  end of the diagnosis.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {exactValueButtonClicked && !accessoriesButtonClicked && (
        <div
          className={cn(
            "mx-auto max-w-6xl w-full h-[27rem] flex items-center gap-4",
            {
              "h-[42rem]": physicalConditionButtonClicked,
              "h-[23rem]": functionalConditionButtonClicked,
            }
          )}
        >
          <div className="h-full flex flex-col items-center justify-center w-[35%] border-2 rounded-lg">
            <Image
              src="/iphone13.svg"
              alt="iphone 13"
              width={250}
              height={250}
            />
            <p className="text-xl font-semibold">Apple iPhone 13</p>
            <p className="text-sm">( 4 GB/{selectVariant})</p>
            <div className="my-2 mx-auto bg-black border-[0.8px] border-black rounded-full w-[80%]" />
            <p className="text-sm">Device Evaluation</p>
          </div>

          {!normalConditionButtonClicked && (
            <div className="w-[65%] h-full border-2 rounded-lg p-4">
              <h4 className="text-base text-center">
                Tell use More About Your Device
              </h4>
              <p className="text-center text-sm text-gray-500 mt-4">
                Please Answer A Few Questions About Your Devices
              </p>

              <div className="flex flex-col items-start gap-4 mt-4">
                {DEVICE_INFO.normalCondition.map((info, i) => (
                  <div key={i} className="flex flex-col items-start gap-2">
                    {i + 1}. {info}
                    <div className="flex items-center gap-2">
                      <Button
                        className={cn(
                          "border-2 bg-transparent hover:bg-gray-200 hover:shadow-none text-gray-800 rounded-lg px-5 py-3 w-[12rem] transition-all shadow-md",
                          {
                            "bg-gray-200": normalConditionAnswers[i],
                          }
                        )}
                        onClick={() => {
                          setNormalConditionAnswers((prev) => {
                            const newAnswers = [...prev];
                            newAnswers[i] = true;
                            return newAnswers;
                          });
                        }}
                      >
                        Yes
                      </Button>

                      <Button
                        className={cn(
                          "border-2 bg-transparent hover:bg-gray-200 hover:shadow-none text-gray-800 rounded-lg px-5 py-3 w-[12rem] transition-all shadow-md",
                          {
                            "bg-gray-200": !normalConditionAnswers[i],
                          }
                        )}
                        onClick={() => {
                          setNormalConditionAnswers((prev) => {
                            const newAnswers = [...prev];
                            newAnswers[i] = false;
                            return newAnswers;
                          });
                        }}
                      >
                        No
                      </Button>
                    </div>
                  </div>
                ))}

                <Button
                  className="mt-4 w-[25%] bg-green-500 text-white hover:bg-green-400 font-semibold text-lg disabled:bg-gray-400 mx-auto"
                  disabled={normalConditionAnswers.includes(undefined as never)}
                  onClick={() => {
                    setNormalConditionButtonClicked(true);
                  }}
                >
                  Continue
                </Button>
              </div>
            </div>
          )}

          {normalConditionButtonClicked && !physicalConditionButtonClicked && (
            <div className="w-[65%] h-full border-2 rounded-lg p-4">
              <h4 className="text-base text-center">
                Select Screen / Body That Are Applicable{" "}
              </h4>
              <p className="text-center text-sm text-gray-500 mt-4">
                Please Prove Correct Details
              </p>

              <div className="flex flex-col items-start gap-4 mt-8">
                {DEVICE_INFO.physicalCondition.map((info, i) => (
                  <div key={i} className="flex flex-col items-start gap-2">
                    <Button
                      className={cn(
                        "border-2 bg-transparent hover:bg-gray-200 hover:shadow-none text-gray-800 rounded-lg px-5 py-3 w-[20rem] transition-all shadow-md",
                        {
                          "bg-gray-200": physicalConditionAnswers[i],
                        }
                      )}
                      onClick={() => {
                        setPhysicalConditionAnswers((prev) => {
                          const newAnswers = [...prev];
                          if (newAnswers[i]) {
                            newAnswers[i] = "";
                          } else {
                            newAnswers[i] = info;
                          }
                          return newAnswers;
                        });
                      }}
                    >
                      {info}
                    </Button>
                  </div>
                ))}
                <Button
                  className="mt-[2rem] w-[25%] bg-green-500 text-white hover:bg-green-400 font-semibold text-lg disabled:bg-gray-400 mx-auto"
                  onClick={() => {
                    setPhysicalConditionButtonClicked(true);
                  }}
                >
                  Continue
                </Button>
              </div>
            </div>
          )}

          {physicalConditionButtonClicked &&
            !functionalConditionButtonClicked && (
              <div className="w-[65%] h-full border-2 rounded-lg p-4">
                <h4 className="text-base text-center">
                  Functional Or Physical Problems
                </h4>
                <p className="text-center text-sm text-gray-500 mt-4">
                  Please choose appropriate condition to get accurate quote
                </p>

                <div className="flex items-start justify-between">
                  <div className="flex flex-col items-start gap-4 mt-8">
                    {DEVICE_INFO.functionalCondition
                      .slice(0, 9)
                      .map((info, i) => (
                        <div
                          key={i}
                          className="flex flex-col items-start gap-2"
                        >
                          <Button
                            className={cn(
                              "border-2 bg-transparent hover:bg-gray-200 hover:shadow-none text-gray-800 rounded-lg px-5 py-3 w-[20rem] transition-all shadow-md",
                              {
                                "bg-gray-200": functionalConditionAnswers[i],
                              }
                            )}
                            onClick={() => {
                              setFunctionalConditionAnswers((prev) => {
                                const newAnswers = [...prev];
                                if (newAnswers[i]) {
                                  newAnswers[i] = "";
                                } else {
                                  newAnswers[i] = info;
                                }
                                return newAnswers;
                              });
                            }}
                          >
                            {info}
                          </Button>
                        </div>
                      ))}
                  </div>

                  <div className="flex flex-col items-start gap-4 mt-8">
                    {DEVICE_INFO.functionalCondition
                      .slice(9, DEVICE_INFO.functionalCondition.length)
                      .map((info, i) => (
                        <div
                          key={i}
                          className="flex flex-col items-start gap-2"
                        >
                          <Button
                            className={cn(
                              "border-2 bg-transparent hover:bg-gray-200 hover:shadow-none text-gray-800 rounded-lg px-5 py-3 w-[20rem] transition-all shadow-md",
                              {
                                "bg-gray-200":
                                  functionalConditionAnswers[i + 9],
                              }
                            )}
                            onClick={() => {
                              setFunctionalConditionAnswers((prev) => {
                                const newAnswers = [...prev];
                                if (newAnswers[i + 9]) {
                                  newAnswers[i + 9] = "";
                                } else {
                                  newAnswers[i + 9] = info;
                                }
                                return newAnswers;
                              });
                            }}
                          >
                            {info}
                          </Button>
                        </div>
                      ))}
                  </div>
                </div>

                <div className="w-full flex items-center justify-center">
                  <Button
                    className="mt-4 w-[25%] bg-green-500 text-white hover:bg-green-400 font-semibold text-lg disabled:bg-gray-400 mx-auto"
                    onClick={() => {
                      setFunctionalConditionButtonClicked(true);
                    }}
                  >
                    Continue
                  </Button>
                </div>
              </div>
            )}

          {functionalConditionButtonClicked && !accessoriesButtonClicked && (
            <div className="w-[65%] h-full border-2 rounded-lg p-4">
              <h4 className="text-base text-center">
                Do you have the following?
              </h4>
              <p className="text-center text-sm text-gray-500 mt-4">
                Please select accessories which are available
              </p>

              <div className="flex flex-col items-start gap-4 mt-8">
                {DEVICE_INFO.accessories.map((info, i) => (
                  <div key={i} className="flex flex-col items-start gap-2">
                    <Button
                      className={cn(
                        "border-2 bg-transparent hover:bg-gray-200 hover:shadow-none text-gray-800 rounded-lg px-5 py-3 w-[20rem] transition-all shadow-md",
                        {
                          "bg-gray-200": accessoriesAnswers[i],
                        }
                      )}
                      onClick={() => {
                        setAccessoriesAnswers((prev) => {
                          const newAnswers = [...prev];
                          if (newAnswers[i]) {
                            newAnswers[i] = "";
                          } else {
                            newAnswers[i] = info;
                          }
                          return newAnswers;
                        });
                      }}
                    >
                      {info}
                    </Button>
                  </div>
                ))}

                <Button
                  className="mt-[5.5rem] w-[25%] bg-green-500 text-white hover:bg-green-400 font-semibold text-lg disabled:bg-gray-400 mx-auto"
                  onClick={() => {
                    setAccessoriesButtonClicked(true);
                  }}
                >
                  Continue
                </Button>
              </div>
            </div>
          )}
        </div>
      )}

      {accessoriesButtonClicked && (
        <div className="mx-auto max-w-6xl w-full">
          <div className="w-full mx-auto max-w-6xl border-2 shadow-md rounded-lg py-3">
            <div className="flex flex-col items-center justify-center">
              <h4 className="text-lg font-semibold">Apple iPhone 13</h4>
              <Image
                src={"/iphone13.svg"}
                alt="iphone 13"
                width={250}
                height={250}
              />
              <p>You can sell your iPhone 13 at a best price rate of</p>

              <div className="mx-auto bg-black border-[0.8px] border-black rounded-full w-[40%] my-2" />

              <h5 className="text-2xl text-red-500 font-semibold">₹ 40,220</h5>

              <Button className="mt-4 mb-2 w-[25%] bg-green-500 text-white hover:bg-green-400 font-semibold text-lg disabled:bg-gray-400 mx-auto">
                Sell
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SellPhone;
