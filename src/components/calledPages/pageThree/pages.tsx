"use client";

const CalledPagesPageThreePages = () => {
  return (
    <div className="w-[100%] p-4">
      <div className="pageWrapper">
        <div className="hidden md:flex flex-col mt-8">
          <div className="mb-16 pageHeader w-94">
            <header className="font-bold text-base">Preview</header>

            <div className="flex subheaders" id="subheader1">
              <sub className="text-xs font-normal">
                Double-check all the information you provided
              </sub>
            </div>
          </div>

          <div className="form-display flex flex-col flex-col-reverse lg:flex-row lg:items-start gap-x-8 xl:gap-x-4 ">
            <form
              id="thirdFormWrapper"
              className="companyInputWrap flex flex-col "
            >
              <input
                type="text"
                name="inputName"
                id="previewNameId"
                className=" companyInput "
                placeholder="Name Enter name"
              />

              <br></br>

              <input
                type="message"
                name="inputName"
                id="previewMessageId"
                placeholder="Description Say something about your company"
                className=" companyInput w-full lg:w-[364px]"
              />

              <br></br>

              <input
                type="url"
                name="inputName"
                id="previewWebsiteId"
                placeholder="Website www.123.com"
                className=" companyInput w-full lg:w-[364px]"
              />
              <br></br>
              <input
                type="date"
                name="inputName"
                id="previewDateId"
                placeholder="date funded 12/12/21"
                className=" companyInput"
              />

              <input
                type="email"
                name="inputName"
                id="previewEmailId"
                className=" companyInput h-[283px] w-[316px] mt-6"
                placeholder="Email email"
              />
              <br></br>
              <input
                type="number"
                name="inputName"
                id="previewNumberId"
                placeholder="phone number"
                className=" companyInput h-[283px] w-[316px]"
              />

              <br></br>

              <input
                type="text"
                name="inputName"
                id="previewAddress1Id"
                placeholder="Address1"
                className=" companyInput"
              />
              <br></br>

              <input
                type="text"
                name="inputName"
                id="previewAddress2Id"
                placeholder="Address2"
                className=" companyInput"
              />

              <br></br>

              <input
                type="text"
                name="inputName"
                id="previewAddress3Id"
                placeholder="Address3"
                className=" companyInput"
              />
            </form>

            <div className="flex flex-col">
              <div className="inputImage imagetext h-[283px] w-[316px]">
                <input
                  type="image"
                  className=""
                  id="previewImageId"
                  // placeholder="Add logo by clicking or drag and drop"
                />
              </div>
              <div className="" id="inputName4">
                <div className="">
                  <p>Company logo</p>
                </div>
                <div className="edit-btn-Wrapper">
                  <div className="edit-btn" id="editBtn1">
                    <button>Edit logo</button>
                  </div>
                  <div className="edit-btn" id="editBtn2">
                    <button>Change logo</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="nextbtn-wrapper">
              <button id="thirdFormSubmit" className="nextbtn w-96 h-12 mt-40 ">
                Add company
              </button>
            </div>
          </div>
        </div>

        <div className="absolute w-11/12">
          <div className="md:hidden m-auto">
            <div className="mb-16 pageHeader ">
              <header className="font-bold text-base">Preview</header>
              <div className="flex subheaders" id="subheader1">
                <sub className="text-xs font-normal">
                  Double-check all the information you provided
                </sub>
              </div>
            </div>

            <div className="form-display flex flex-col-reverse">
              <form id="thirdFormWrapper" className="companyInputWrap">
                <input
                  type="text"
                  name="inputName"
                  id="previewNameId"
                  className=" companyInput w-full mt-6"
                  placeholder="Name Enter name"
                />

                <br></br>

                <input
                  type="message"
                  name="inputName"
                  id="previewMessageId"
                  placeholder="Description Say something about your company"
                  className=" companyInput mt-6"
                />

                <br></br>

                <input
                  type="url"
                  name="inputName"
                  id="previewWebsiteId"
                  placeholder="Website www.123.com"
                  className=" companyInput mt-6"
                />
                <br></br>

                <input
                  type="date"
                  name="inputName"
                  id="previewDateId"
                  placeholder="date funded 12/12/21"
                  className=" companyInput mt-6"
                />
                <br></br>
                <input
                  type="email"
                  name="inputName"
                  id="previewEmailId"
                  className=" companyInput mt-6"
                  placeholder="Email email"
                />
                <br></br>
                <input
                  type="number"
                  name="inputName"
                  id="previewNumberId"
                  placeholder="phone number"
                  className=" companyInput mt-6"
                />

                <br></br>

                <input
                  type="text"
                  name="inputName"
                  id="previewAddress1Id"
                  placeholder="Address1"
                  className=" companyInput mt-6"
                />
                <br></br>

                <input
                  type="text"
                  name="inputName"
                  id="previewAddress2Id"
                  placeholder="Address2"
                  className=" companyInput mt-6"
                />

                <br></br>

                <input
                  type="text"
                  name="inputName"
                  id="previewAddress3Id"
                  placeholder="Address3"
                  className=" companyInput mt-6"
                />
              </form>

              <div className="" id="inputName4">
                <div className="">
                  <div className="">
                    <input
                      type="image"
                      // onChange={handleOnchange}
                      // value={value.date}
                      className=" inputImage imagetext"
                      id="previewImageId"

                      // placeholder="Add logo by clicking or drag and drop"
                    />
                  </div>
                </div>
                <div className="">
                  <p>Company logo</p>
                </div>
                <div className="edit-btn-Wrapper">
                  <div className="edit-btn" id="editBtn1">
                    <button>Edit logo</button>
                  </div>
                  <div className="edit-btn" id="editBtn2">
                    <button>Change logo</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="nextbtn-wrapper">
                <button
                  id="thirdFormSubmit"
                  className="nextbtn nextbtnMobile h-12  mt-6"
                >
                  Add company
                </button>
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

export default CalledPagesPageThreePages;
