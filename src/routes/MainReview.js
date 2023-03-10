import { React, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ReactReduxContext } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MdOutlineThumbUpAlt } from "react-icons/md";

function MainReview() {
  const reviewList = useSelector((state) => state.reviewList);
  const navigate = useNavigate();
  return (
    <div>
      <div className="reviewName">Review</div>
      <Container className="reviewWrap">
        <Row>
          {reviewList.map((a, i) => {
            return (
              <Col key={reviewList[i].id}>
                <div>{reviewList[i]}</div>
              </Col>
            );
          })}
         
        </Row>
        <button className="reviewWrite"
            onClick={() => {
              navigate("/reviewpage");
            }}
          >
              WRITE</button>
      </Container>
    </div>
  );
}

export default MainReview;
