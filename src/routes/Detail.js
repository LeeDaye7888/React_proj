import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Nav } from "react-bootstrap";
import { Context1 } from "./../App.js";
import { addItem } from "./../store.js";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Detail(props) {
  let { 재고 } = useContext(Context1); //보관함 해체해주는 함수
  let { id } = useParams(); //유저가 url 파라미터에 입력한 값 가져오기
  let product = props.shoes.find((x) => x.id == id);
  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);
  let [tab, tabChange] = useState(0);
  let dispatch = useDispatch();

  useEffect(() => {
    let a = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => {
      clearTimeout(a);
    };
  }, []);

  return (
    <div className="container">
      {alert == true ? (
        <div className="alert alert-warning">당일 발송</div>
      ) : null}
      <div className="row">
        <div className="col-md-6">
          {/* <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" /> */}
          {/* <img src={product.src} width="100%" /> */}
          <Slider {...settings}>
            <div>
              <img src={product.src} width="100%" />
            </div>
            <div>
              <img src={product.src2} width="100%" />
            </div>
            <div>
              <img src={product.src3} width="100%" />
            </div>
          </Slider>
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{product.title}</h4>
          <div className="product-detail">
            <p>Price: {product.price}</p>
            <p>{product.points}p</p>
            <p>{product.ship}</p>
          </div>

          <div className="product-detail2">
            <p>JOIN LIFE Care for water: 적은 양의 물을 사용하여 제조.</p>
            <p>환경에 미치는 영향을 줄일 수 있는 기법과 원자재를 이용하여</p>
            <p>제조되는 제품에 Join Life라는 이름의 태그를 부착합니다.</p>
            <br></br>
            <br></br>
            <p>
              Crème 제품의 사회, 환경, 안전 및 건강 관련 기준 준수를 보장하기
            </p>
            <p> 위해 모니터링 프로그램을 실행하고 있습니다.</p>
            <p>
              기준 준수 여부를 평가하기 위해 감사 프로그램과 지속적인 개선
              플랜을 개발하였습니다.
            </p>
            <br></br>
            <br></br>
            <p>95% 면 · 5% 엘라스탄</p>
            <p>물 온도 최고 30도 세탁기 사용 가능, 짧은 탈수 프로그램</p>
            <p>최고 110도 다림질 가능</p>
            <br></br>
            <br></br>
          </div>
          <p className="btn-select">
            <select className="select-size">
              <option value="">Size</option>
              <option value="s">S</option>
              <option value="m">M</option>
            </select>
          </p>
          <div style={{ whiteSpace: "nowrap" }}>
            <button
              className="btn-cart"
              onClick={() => {
                dispatch(
                  addItem({
                    id: product.id,
                    title: product.title,
                    count: 1,
                    price: product.price,
                    src: product.src,
                  })
                );
              }}
            >
              Cart
            </button>

            <button className="btn-buy">Buy</button>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              tabChange(0);
            }}
            eventKey="link0"
          >
            More Info
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              tabChange(1);
            }}
            eventKey="link1"
          >
            REVIEW
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              tabChange(2);
            }}
            eventKey="link2"
          >
            Q&A
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent shoes={props.shoes} tab={tab} />
    </div>
  );
}

function TabContent({ tab, shoes }) {
  let [fade, setFade] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      setFade("");
    };
  }, [tab]);

  return (
    <div className={"start " + fade}>
      {
        [
          <div>
            <br></br>
            <br></br>
            <br></br>
            <p>Crème는 공급업체, 근로자, 노조 및 다양한 국제 기구와 협력하여</p>
            <p>인권을 존중하고 고취하며 UN의 지속 가능한 개발</p>
            <p>기여할 수 있는 공급망을 개발합니다.</p>
            <br></br>
            <p>
              공급업체와의 협력을 통해 Crème 제품을 추적하기 위한 목적으로 Crème
              의류 생산에
            </p>
            <p>사용되는 시설과 공정을 파악하기 위해 노력합니다.</p>
            <br></br>
            <br></br>
            <img src="https://static.zara.net/photos///contents/cm/sustainability/extrainfo/w/750/sustainability-extrainfo-label-1001_0.jpg?ts=1626188266479"></img>
          </div>,

          <div>
            <br></br>
            <br></br>
            <br></br>리뷰를 작성해 주세요.
          </div>,
          <div></div>,
        ][tab]
      }
    </div>
  );
}
var settings = {
  dots: true, // 캐러셀의 점을 보여줄 것인지
  infinite: true, // 마지막 장 다음에 첫번째가 나오게 할 것인지
  speed: 500, // 넘어가는 속도는 몇으로 할 것인지
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default Detail;
