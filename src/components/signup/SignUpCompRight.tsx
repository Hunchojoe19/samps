import * as React from "react";
import userImage from "../../assets/images/150727131450-01-cnnphotos-nigerian-identity-tease 1.png";
import style from "./signup.module.css";
import TextRating from "../rating/rating";
import Envelope from "@/assets/icons/EnvelopeIcon";

const SignUpComponentRight = () => {
  const value = 5;
  const year = new Date().getFullYear();

  return (
    <div id="mainWrapperRight@#$" className={style.mainWrapperRight}>
      <div id="flexContainerRight#%$" className={style.flexContainerRight}>
        <div id="textContainerRight$#%^@" className={style.textContainerRight}>
          <span
            id="weHaveBeen#%@"
            className="sm:text-xl lg:text-2xl xl:text-3xl "
          >
            We’ve been using{" "}
            <span id="mecaTextBold%$" className="font-black">
              meca
            </span>{" "}
            to kick start the sales and inventory of all our products for
            sustainable agriculture.
          </span>
          <div id="userImageDiv#$%" className={style.user}>
            <img id="userImage&%#" src={userImage.src} alt="user" />
          </div>
          <div
            id="flexTextRight@#$"
            className="flex flex-col text-meca-black text-base	"
          >
            <span id="rightText*&^">Adebayo Emmanuel</span>
            <span id="rightText@#$" className="text-meca-gray-400">
              Head of Sales, Ladipo Market
            </span>
          </div>
          <TextRating id="ratingContainerRight#$" value={value} />
          {/* <div
              id="ratingContainerRight#$"
              className="rating flex justify-center"
            >
              <input
                type="radio"
                name="rating-2"
                id="ratinStar@#$"
                className="mask mask-star-2 bg-yellow-500	"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-500	"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-500	"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-500	"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-500	"
                checked
              />
            </div> */}
        </div>
      </div>
      <div
        id="©Meca2024@$%"
        className="flex justify-between text-meca-gray-600 font-normal text-sm w-10/12 m-auto"
      >
        <p id="mecaYear@$%">© Meca {year}</p>
        <p id="mecainfo@%#" className="flex items-center gap-1">
          <Envelope />
          info@meca.com.ng
        </p>
        {/* <div id="mecaYear@$%">
              <span>© Meca {year}</span>
            </div>
            <div id="mecainfo@%#">
              <span>info@meca.com.ng</span>
            </div> */}
      </div>
      {/* </div> */}
    </div>
  );
};

export default SignUpComponentRight;
