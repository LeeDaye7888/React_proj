import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";

function Category(props) {
  let [category, setCategory] = useState([
    {
      id: 0,
      name: "TOP",
      img: "https://static.zara.net/photos///2022/I/0/1/p/0264/895/712/2/w/850/0264895712_2_1_1.jpg?ts=1667983834599",
    },
    {
      id: 1,
      name: "BOTTOM",
      img: "https://static.zara.net/photos///2022/I/0/1/p/2927/118/500/17/w/850/2927118500_2_3_1.jpg?ts=1662459085898",
    },
    {
      id: 2,
      name: "OUTER",
      img: "https://static.zara.net/photos///2022/I/0/1/p/8825/289/704/2/w/850/8825289704_2_4_1.jpg?ts=1669222668986",
    },

    {
      id: 3,
      name: "DRESS",
      img: "https://static.zara.net/photos///2022/I/0/1/p/9479/251/330/2/w/614/9479251330_2_3_1.jpg?ts=1668702880434",
    },
  ]);
  const navigate = useNavigate();
  return (
    <>
      <div className="categoryName">Category</div>
      <div>
        <Container className="categoryWrap">
          <Row >
            {category.map(function (a, i) {
              return (
                <Col key={category[i].id}>
                  <img
                    src={category[i].img}
                    width="300px"
                    height="400px"
                    onClick={() => {
                      navigate(category[i].name);
                    }}
                  ></img>
                  <div>{category[i].name}</div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Category;
