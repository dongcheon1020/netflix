import React, { useState } from "react";
import "./Review.style.css";
import Carousel from "react-multi-carousel";
import { reviewsive } from "../../constants/reviewsive";
import { useSelector, useDispatch } from "react-redux";
import { viewReview } from "../../redux/reducer";

const Review = ({ data }) => {
  const reviewOn = useSelector((state) => state.review.reviewOn);
  const dispatch = useDispatch();

  const [selectedReview, setSelectedReview] = useState(null);

  const reviewPopOn = (item) => {
    dispatch(viewReview());
    setSelectedReview(item);
  };

  const reviews = data?.results;

  return (
    <div className="slider-container">
      {reviewOn === true ? (
        <div className="review-pop">
          {selectedReview ? (
            <div className="review-card">
              <button
                onClick={() => {
                  dispatch(viewReview());
                }}
                className="review-add-p"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path
                    fill="rgba(255, 255, 255, 0.55)"
                    d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"
                  />
                </svg>
              </button>
              <div className="author-p">{selectedReview.author}</div>
              <div className="review-p-textbox">
                <div className="review-p">{selectedReview.content}</div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}

      <h3 className="slider-title">리뷰</h3>
      <Carousel
        infinite={true}
        centerMode={true}
        itemClass="slider-item"
        containerClass="carousel-slider"
        responsive={reviewsive}
        autoPlay={true}
        autoPlaySpeed={5000}
        customTransition="all 1s ease"
      >
        {reviews?.map((item, index) => (
          <div key={index} className="review-card">
            <div className="author">{item.author}</div>
            <div className="review">{item.content}</div>
            <button
              onClick={() => {
                reviewPopOn(item);
              }}
              className="review-add"
            >
              더보기
            </button>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Review;
