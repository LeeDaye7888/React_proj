import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addReview, removeReview } from "./../store.js";
import { FaRegWindowClose, FaPlus } from "react-icons/fa";
import { MdOutlineThumbUpAlt } from "react-icons/md";
import { GoThumbsup } from "react-icons/go"; // white
import { HiThumbUp } from "react-icons/hi"; // black

function ReviewPage() {
  let [value, setValue] = useState("");
  const dispatch = useDispatch();
  const reviewList = useSelector((state) => state.reviewList);
  let [thumb, setThumb] = useState(0);

  return (
    <>
    <div className ='reviewTextBox'>
        <h4>Review</h4>
    </div>

    <div className="reviewWrap">
      {/* <div className="nav">
        <h4>Review</h4>
      </div> */}
      <div>
        <div className="reviewsWrap">
          {reviewList.map(function (a, i) {
            return (
              <div className="list" key={i}>
                {/* <div className="handBtn">
                  <button
                    onClick={() => {
                      thumb == 0 ? setThumb(1) : setThumb(0);
                    }}
                  > 좋아요
                    {thumb == 0 ? (
                      <GoThumbsup></GoThumbsup>
                    ) : (
                      <HiThumbUp></HiThumbUp>
                    )}
                  </button>
                </div> */}
                {reviewList[i]}
                <button
                  className="removeButton"
                  onClick={() => {
                    dispatch(removeReview(i));
                  }}
                >
                  <FaRegWindowClose />
                </button>
                
              </div>
            );
          })}
        </div>
        <div className="ReviewPageBottom">
          <textarea
            className="textArea"
            placeholder=""
            onChange={(e) => {
              setValue(e.target.value);
            }}
            value={value}
          ></textarea>
          <button
            className="writeButton"
            onClick={() => {
              dispatch(addReview(value));
              setValue("");
            }}
          >
            {/* <FaPlus /> */}
            write
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default ReviewPage;
