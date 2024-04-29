"use client";
import Link from "next/link";
import { useState } from "react";

const CalledPagesPageOnePages = () => {
  const [value, setValue] = useState({
    fullname: "",
    message: "",
    website: "",
    date: "",
    image: "",
  });
  const handleOnclick = (e: any) => {
    e.preventDefault();
  };

  console.log(value);

  const handleOnchange = (e: any) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-[100%] p-4">
      <div className="pageWrapper">
        <div className="hidden md:flex flex-col mt-8">
          <div className="mb-16 pageHeader w-94">
            <header className="font-bold text-base">Company details</header>
            <div className="flex subheaders" id="subheader1">
              <sub className="text-xs font-normal">Provide details</sub>

              <form method="dialog">
                <button className="text-sm font-semibold skip " id="skip1">
                  Skip
                </button>
              </form>
            </div>
          </div>
          <div className="form-display flex flex-col flex-col-reverse lg:flex-row lg:items-start gap-x-8 xl:gap-x-4 ">
            <form
              onSubmit={handleOnclick}
              id="firstFormWrapper"
              className="companyInputWrap flex flex-col"
            >
              <input
                required={true}
                onChange={handleOnchange}
                value={value.fullname}
                type="text"
                name="fullname"
                id="fullnameid"
                className="companyInput"
                placeholder="Name Enter name"
              />

              <br></br>

              <textarea
                required={true}
                onChange={handleOnchange}
                value={value.message}
                name="message"
                id="messageid"
                placeholder="Description Say something about your company"
                className=" companyInput inputText w-full lg:w-[364px]"
              ></textarea>

              <br></br>

              <input
                required={true}
                onChange={handleOnchange}
                value={value.website}
                type="url"
                name="website"
                id="websiteid"
                placeholder="Website www.123.com"
                className="companyInput w-full lg:w-[364px]"
              />

              <br></br>
              <input
                required={true}
                onChange={handleOnchange}
                value={value.date}
                type="date"
                name="date"
                id="dateid"
                placeholder="date funded 12/12/21"
                className=" companyInput"
              />
            </form>

            <div
              onSubmit={handleOnclick}
              className="inputImage imagetext h-[283px] w-[316px]"
            >
              <input
                required={true}
                type="image"
                onChange={handleOnchange}
                value={value.image}
                name="image"
                // className="inputImage imagetext"
                className=""
                id="firstImageId"
                // placeholder="Add logo by clicking or drag and drop"
              />
            </div>
          </div>

          <div className="">
            <div className="nextbtn-wrapper">
              {/* <Link href=""> */}
              <button
                onClick={() => handleOnclick}
                id="firstFormSubit"
                className="nextbtn w-96 h-12 mt-40 "
              >
                Next
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>

        <div className="absolute  w-11/12">
          <div className="md:hidden m-auto">
            <div className="mb-16 pageHeader">
              <header className="font-bold text-base">Company details</header>
              <div className="flex subheaders" id="subheader1">
                <sub className="text-xs font-normal">
                  Double-check all the information you provided
                </sub>
                <form method="dialog">
                  <button className="text-sm font-semibold skip " id="skip1">
                    Skip
                  </button>
                </form>
              </div>
              <div className="form-display flex flex-col flex-col-reverse mt-8">
                <form
                  id="firstFormWrapper"
                  onSubmit={handleOnclick}
                  className="companyInputWrap"
                >
                  <input
                    required={true}
                    onChange={handleOnchange}
                    value={value.fullname}
                    type="text"
                    name="fullname"
                    id="fullnameid"
                    className="companyInput w-full mb-4"
                    // className="w-[394px] h-[50px]"
                    placeholder="Name Enter name"
                  />
                  <span>{}</span>

                  <br></br>

                  <textarea
                    required={true}
                    onChange={handleOnchange}
                    value={value.message}
                    name="message"
                    id="messageid"
                    placeholder="Description Say something about your company"
                    className=" companyInput inputText w-full mb-8 lg:w-[364px]"
                  ></textarea>

                  <br></br>

                  <input
                    required={true}
                    onChange={handleOnchange}
                    value={value.website}
                    type="url"
                    name="website"
                    id="websiteid"
                    placeholder="Website www.123.com"
                    className="companyInput mb-4 w-full lg:w-[364px]"
                  />

                  <br></br>
                  <input
                    required={true}
                    onChange={handleOnchange}
                    value={value.date}
                    type="date"
                    name="date"
                    id="dateid"
                    placeholder="date funded 12/12/21"
                    className=" companyInput mb-4"
                  />
                </form>

                <div
                  onSubmit={handleOnclick}
                  className="inputImage imagetext h-[283px] w-[316px]"
                >
                  <input
                    required={true}
                    type="image"
                    onChange={handleOnchange}
                    value={value.image}
                    name="image"
                    // className="inputImage imagetext"
                    className="mb-4"
                    id="firstImageId"
                    // placeholder="Add logo by clicking or drag and drop"
                  />
                </div>
              </div>
              <div className="nextbtn nextmobile ">
                <button id="firstFormSubit">Next</button>
              </div>
              <div className="mt-8 flex items-center justify-evenly gap-4 h-[8px] w-full">
                <div
                  className="h-full w-1/3 bg-blue-800 rounded-lg"
                  id="switchedButton"
                ></div>
                <div
                  className="h-full w-1/3 bg-blue-800 rounded-lg"
                  id="switchedButton"
                ></div>
                <div
                  className="h-full w-1/3 bg-blue-800 rounded-lg"
                  id="switchedButton"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalledPagesPageOnePages;
