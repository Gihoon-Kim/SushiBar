import React from "react";
import "./Home.css";
import ReviewCard from "../../components/ReviewCard";
import Carousel from "react-material-ui-carousel";
import { testCard } from "./reviewerItem";
import { Typography } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";

function Home() {
  return (
    <div className="mainContainer">
      <div className="mainTop">
        <div className="mainTitle">
          <h1> Welcome to SushiBar </h1> <br />
          <span> more fresh ingredients </span> <br />
          <span> more fresh food </span>
        </div>

        <Carousel
          className="mainImageCarousel"
          animation="fade"
          duration={3000}
          navButtonsAlwaysInvisible={true}
          indicators={false}
        >
          <img src={`${process.env.REACT_APP_PUBLIC_FOLDER}sushi.png`} alt="" />
          <img
            src={`${process.env.REACT_APP_PUBLIC_FOLDER}sushiMain.jpg`}
            alt=""
          />
        </Carousel>
      </div>

      <div className="reviews">
        <div className="instaReview">
          <Carousel
            className="instaReviewCarousel"
            animation="slide"
            duration={3000}
            navButtonsAlwaysInvisible={true}
            indicators={false}
          >
            {testCard.map((testItem) => {
              return <ReviewCard items={testItem} />;
            })}
          </Carousel>
        </div>

        <div className="reviewMsg">
          <Typography
            fontWeight={"bold"}
            style={{
              fontSize: 40,
              background:
                "-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
              webkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Reviews
          </Typography>

          <div className="font-icon-wrapper">
            <HelpIcon className="helpIcon" color="primary" fontSize="small" />
            <p className="helpText">
              we choose reviewers randomly and give 20% discount coupons for
              them.
            </p>
          </div>
        </div>
      </div>

      <div className="mainBottom">
        <div className="bottomLeft">
          <p>© SushiBar 2022.</p>
          <p>Designed by Hoony Kim.</p>
        </div>
        <div className="bottomRight">
          <p>© SushiBar 2022.</p>
          <p>Designed by Hoony Kim.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
