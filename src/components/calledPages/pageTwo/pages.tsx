"use client";
import Link from "next/link";
import { useState } from "react";

const CalledPagesPageTwoPages = () => {
  const [value, setValue] = useState({
    email: "",
    phoneNumber: "",
    address1: "",
    address2: "",
    address3: "",
    image: "",
  });

  const handleClick = (e: any) => {
    e.preventDefault();
  };

  console.log(value);

  const handleChange = (e: any) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  return (
    <div className="w-[100%] p-4">
      <div className="pageWrapper">
        <div className="hidden md:flex flex-col mt-8">
          <div className="mb-16 pageHeader w-94">
            <header className="font-bold text-base">Location</header>
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
              onSubmit={handleClick}
              id="secondFormWrapper"
              className="companyInputWrap flex flex-col "
            >
              <input
                required={true}
                onChange={handleChange}
                value={value.email}
                type="email"
                name="email"
                id="emailid"
                className=" companyInput"
                placeholder="Email email"
              />

              <br></br>
              <input
                required={true}
                onChange={handleChange}
                value={value.phoneNumber}
                type="number"
                name="phoneNumber"
                id="numberid"
                placeholder="phone number"
                className=" companyInput w-full lg:w-[364px]"
              />

              <br></br>
              <input
                required={true}
                onChange={handleChange}
                value={value.address1}
                type="text"
                name="address1"
                id="firstAddressid"
                placeholder="Address 1"
                className=" companyInput w-full lg:w-[364px]"
              />
              <br></br>

              <input
                required={true}
                onChange={handleChange}
                value={value.address2}
                type="text"
                name="address2"
                id="secondAddressid"
                placeholder="Address 2"
                className=" companyInput"
              />

              <br></br>

              <input
                required={true}
                onChange={handleChange}
                value={value.address3}
                type="text"
                name="address3"
                id="thirdAdressid"
                placeholder="Address 3"
                className=" companyInput h-[283px] w-[316px]"
              />

              <p className="add-address" id="addAnotherid">
                Add another address
              </p>
            </form>

            <div className="inputImage imagetext h-[283px] w-[316px]">
              <input
                required={true}
                onSubmit={handleClick}
                type="image"
                name="image"
                onChange={handleChange}
                value={value.image}
                // className="inputImage imagetext"
                className=""
                id="secondImageid"
                // placeholder="Add logo by clicking or drag and drop"
              />
            </div>
          </div>
          {/* <div className="">
            <div className="">
              <Link href="" className="w-96 h-12 previousbtn">
                <button className=" ">Previous</button>
              </Link>
            </div>

            <div className="">
              <Link href="">
                <button
                  // onClick={() => handleOnclick}
                  className="  w-96 h-12"
                >
                  Next
                </button>
              </Link>
            </div>
          </div> */}
          <div className="flex gap-x-5 justify-between mt-40">
            <div className="previousbtn" id="firstPreviousbtn">
              <button>Previous</button>
            </div>
            <div onClick={() => handleClick} className="nextbtn ">
              <button id="secondFormSubmit">Next</button>
            </div>
          </div>
        </div>

        <div className="absolute  w-11/12">
          <div className="md:hidden m-auto">
            <div className="mb-16 pageHeader">
              <header className="font-bold text-base">Location</header>
              <div className="flex subheaders" id="subheader1">
                <sub className="text-xs font-normal">Provide details</sub>
                <form method="dialog">
                  <button className="text-sm font-semibold skip " id="skip1">
                    Skip
                  </button>
                </form>
              </div>
              <div className="form-display flex flex-col flex-col-reverse mt-8">
                <form onSubmit={handleClick} className="companyInputWrap">
                  <input
                    required={true}
                    onChange={handleChange}
                    value={value.email}
                    type="email"
                    name="email"
                    id="emailid"
                    className="companyInput w-full mb-4"
                    // className="w-[394px] h-[50px]"
                    placeholder="Name Enter name"
                  />
                  <span>{}</span>

                  <br></br>

                  <input
                    required={true}
                    type="number"
                    onChange={handleChange}
                    value={value.phoneNumber}
                    name="phoneNumber"
                    id="numberid"
                    placeholder="Enter your phone number"
                    className=" companyInput w-full mb-8 lg:w-[364px]"
                  />

                  <br></br>

                  <input
                    required={true}
                    onChange={handleChange}
                    value={value.address1}
                    type="text"
                    name="address1"
                    id="firstAddressid"
                    placeholder="Address 1"
                    className="companyInput mb-4 w-full lg:w-[364px]"
                  />

                  <br></br>
                  <input
                    required={true}
                    onChange={handleChange}
                    value={value.address2}
                    type="text"
                    name="address2"
                    id="secondAddressid"
                    placeholder="Address 2"
                    className=" companyInput mb-4"
                  />

                  <br></br>
                  <input
                    required={true}
                    onChange={handleChange}
                    value={value.address3}
                    type="text"
                    name="address3"
                    id="thirdAddressid"
                    placeholder="Address 3"
                    className=" companyInput mb-4"
                  />
                </form>

                <div className="inputImage imagetext h-[283px] w-[316px]">
                  <input
                    required={true}
                    type="image"
                    name="image"
                    onChange={handleChange}
                    value={value.image}
                    // className="inputImage imagetext"
                    className=""
                    id="secondImageid"
                    // placeholder="Add logo by clicking or drag and drop"
                  />
                </div>
              </div>
              {/* <div className="mt-2 flex justify-center items-center">
                <button
                  className="w-full h-[48px] rounded-lg text-lg"
                  id="companyButton"
                >
                  Next
                </button>
              </div> */}

              <div className="flex gap-x-5 justify-between mt-40">
                <div className="previousbtn" id="firstPreviousbtn">
                  <button>Previous</button>
                </div>
                <div
                  onClick={() => handleClick}
                  className="nextbtn nextmobile "
                >
                  <button id="secondFormSubmit">Next</button>
                </div>
              </div>
              <div className="mt-8 flex items-center justify-evenly gap-4 h-[8px] w-full">
                <div
                  className="h-full w-1/3 bg-blue-800 rounded-lg"
                  id="switchedButton1"
                ></div>
                <div
                  className="h-full w-1/3 bg-blue-800 rounded-lg"
                  id="switchedButton2"
                ></div>
                <div
                  className="h-full w-1/3 bg-blue-800 rounded-lg"
                  id="switchedButton3"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalledPagesPageTwoPages;
