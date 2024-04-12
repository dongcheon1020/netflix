import React from "react";
import "./Review.style.css";
import Carousel from "react-multi-carousel";
import { reviewsive } from "../../constants/reviewsive";
import { useSelector, useDispatch } from "react-redux";
import { viewReview } from "../../redux/reducer";

const Review = ({ data }) => {
  const reviewOn = useSelector((state) => state.review.reviewOn);
  const dispatch = useDispatch();

  const reviews = data?.results;
  console.log(reviews);

  return (
    <div className="slider-container">
      {reviewOn === true ? <div>asfssfdfads</div> : ""}
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
              onClick={() => dispatch(viewReview())}
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
