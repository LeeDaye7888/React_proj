import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useState } from "react";
import data from "./data.js";
import { Button } from "react-bootstrap";
import { Routes, Route, useNavigate } from "react-router-dom";
import Detail from "./routes/Detail.js";
import Cart from "./routes/Cart.js";
import Login from "./routes/Login";
import MyPage from "./routes/MyPage.js";
import MyInfo from "./routes/MyInfo.js";
import Category from "./routes/Category";
import TopProduct from "./routes/TopProduct";
import BottomProduct from "./routes/BottomProduct";
import OuterProduct from "./routes/OuterProduct";
import DressProduct from "./routes/DressProduct";
import MainReview from "./routes/MainReview";
import ReviewPage from "./routes/ReviewPage";
import MyNav from "./MyNav";

export let Context1 = createContext(); //Context는 state 보관함

function App() {
  let [shoes, setShoes] = useState(data);
  let [press, setPress] = useState(0);
  let [stock, setStock] = useState([10, 11, 12]);
  let navigate = useNavigate();

  return (
    <div className="App">
      <MyNav />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <Category />
              <div className="greenBox">
                <div className="greenBoxText">
                  <p>
                    We recommend going to the nearest CHANEL Boutique of your
                    choice where an advisor can help introduce our after sales
                    services. Please note that merchandise that has been
                    altered, sale items, and markdown items are not returnable.
                    Refunds will be issued in the original form of payment.
                    Please note that cash, debit card, and travelers check
                    purchases will be refunded via check in the mail
                  </p>
                  <div className="greenBoxTextSmall">
                    You can contact a Customer Care Advisor either online or by
                    telephone at 1.800.550.0005, 24/7, so that we may assist
                    you.{" "}
                    <Button variant="outline-light" className="christmas">
                      Christmas Product
                    </Button>{" "}
                  </div>
                </div>
              </div>
              <div className="middleImg"></div>
              <MainReview></MainReview>
            </>
          }
        />

        <Route
          path="/detail/:id"
          element={
            <Context1.Provider value={{ stock }}>
              <Detail shoes={shoes}></Detail>
            </Context1.Provider>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/myinfo" element={<MyInfo />} />
        <Route path="/TOP" element={<TopProduct />} />
        <Route path="/BOTTOM" element={<BottomProduct />} />
        <Route path="/OUTER" element={<OuterProduct />} />
        <Route path="/DRESS" element={<DressProduct />} />
        <Route path="/review" element={<MainReview />} />
        <Route path="/reviewpage" element={<ReviewPage />} />
      </Routes>
      
      <img className="icon position"
        src="https://st4.depositphotos.com/16913844/28935/v/600/depositphotos_289352800-stock-illustration-happy-emoji-icon-flat-style.jpg"></img>
      <div class="qnaBox position">
        <img class="closeicon"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAV1BMVEX///8jHyAAAAAJAAALAAMNBAdoZmdiYGFmZGRta2sFAABpZ2hwbm8YExRbWFlhXl+dnJweGhsTDQ/T09O0s7M2MzNMSUqHhYbFxMWWlJQXEhNWVFRzcnIz5JTBAAAEQklEQVR4nO2d63aqMBCFBUVEpFatWtu+/3MeKeUUJbsEGEgya3+/XbMyzhWSDIsFIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIEeR026X59X0i6e/XLN3dThNJt+F0iZOPojjG57cJpL+d42NRfCTxxZmOr3ERVRzijbj0dXz4kV7Er+LSrXiNo19WL8LSX1YN6W5UPDUVjKJkLyp9nzxIj1046qWIplPxScGouAgKt+TJhKWKn2LCP5Nn4Q6MeGstQs6KzxYsZd+EZNuzK1qriJJURPSmrWD0sRMR3YfUoGGUSGRUgwXvgSjz5/UhM2kooeKLScGoyATW3I/r0bSQ8Y5qctE7x6vIqvvw3sqlIioCBaN4qt73D84H81pGdTcPnUyDw1ls3fa8ASOOsWIKFIziKVr7TtZoOcnQNhy5aLRai67cGnPWG27FFMqTbuvHL2lQLKIYlG7qe2Eszt8q9nfUDVTQmQVL2i1yvay+KuKolmvoB4EdtZ9rwSzq0kUrcP7rk27SJVJw/n60xR79+6vcWkYGFXQagzVYRdsqlvuZZH6Bjrq0iyGvXbQCJvqlTUbN/Vfwj2JtEYuZ7y5aAZN9Z+nHddB5mXhkPTAWcQzKv0UfCY7FvxwVlwmPYrBmSF2EMSi+SSACLhrIHpuQLFgCkwYoGrBMDHgymQmYNpamd4E7qKBnWbQJdLtVW0WsoKcuWgFTR8tR8y1S0L5hdwJM/9tHK+6QgktHL53swbHY3Fv5gr/yOAZr4KNQo/RDS/ubRZvA5f93wGBjsAbWuR9H/YIxGIQFS2DR+FYx6BisgUVjmy8ytN8RiotWwFg8ns37jqDv8RjoqGBPDrfn3gLTDVAwmCTzC+w7jQrOf9RCANiYtdkGFoM1sLC3FAzQRSssHTW0LNoEFvcHBYOMwZqs21FDtmBJp4r+Pw920eGoYbtoxRfqQ0u2ChS8OyrqRO9dalDNNgadD3NzlmsC1NtQfRyqz6Xq66FNTxN0LKrvS9U/W6h/PlT/jN/rPY1hf9F71L9rU/++dMg776Dqovp9C/V7T2vt+4fde8CwWw3DUdXv46s/iwELvZbzNLhMKDkTpf5cm10M1sBY9PdsIj5fao4tfATa04yq/oyw+nPe8MaFlrP6Q+9bYEf1LBbxRUsld2bU33tSf3dN/f3D8XdIPXdU9feAZe5ye9zd4KkK/ZaGJyo4LhqCMxWgJKczFaQsWOLlXAzZ2SYwZblzVPXzabBbyc8YctKG658TpX7Wl/55bWjm3tiI8Wfm3nrmuYnzvwrfzzz7cv6aaJp9OeH8UgezL00zaKWeAwyl38EMWv1zhPXPgm7N85Z9VH1yVCfzvPXPZH+cqy9frjyYq199G6GY+NsIhctvIyzK71tk+/WE37fI95nT71sQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQo5B8vlDCBniO5qwAAAABJRU5ErkJggg=="></img>
      </div>

      <div class="qnaBox position">
        <image
          class="closeicon"
          url="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAV1BMVEX///8jHyAAAAAJAAALAAMNBAdoZmdiYGFmZGRta2sFAABpZ2hwbm8YExRbWFlhXl+dnJweGhsTDQ/T09O0s7M2MzNMSUqHhYbFxMWWlJQXEhNWVFRzcnIz5JTBAAAEQklEQVR4nO2d63aqMBCFBUVEpFatWtu+/3MeKeUUJbsEGEgya3+/XbMyzhWSDIsFIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIEeR026X59X0i6e/XLN3dThNJt+F0iZOPojjG57cJpL+d42NRfCTxxZmOr3ERVRzijbj0dXz4kV7Er+LSrXiNo19WL8LSX1YN6W5UPDUVjKJkLyp9nzxIj1046qWIplPxScGouAgKt+TJhKWKn2LCP5Nn4Q6MeGstQs6KzxYsZd+EZNuzK1qriJJURPSmrWD0sRMR3YfUoGGUSGRUgwXvgSjz5/UhM2kooeKLScGoyATW3I/r0bSQ8Y5qctE7x6vIqvvw3sqlIioCBaN4qt73D84H81pGdTcPnUyDw1ls3fa8ASOOsWIKFIziKVr7TtZoOcnQNhy5aLRai67cGnPWG27FFMqTbuvHL2lQLKIYlG7qe2Eszt8q9nfUDVTQmQVL2i1yvay+KuKolmvoB4EdtZ9rwSzq0kUrcP7rk27SJVJw/n60xR79+6vcWkYGFXQagzVYRdsqlvuZZH6Bjrq0iyGvXbQCJvqlTUbN/Vfwj2JtEYuZ7y5aAZN9Z+nHddB5mXhkPTAWcQzKv0UfCY7FvxwVlwmPYrBmSF2EMSi+SSACLhrIHpuQLFgCkwYoGrBMDHgymQmYNpamd4E7qKBnWbQJdLtVW0WsoKcuWgFTR8tR8y1S0L5hdwJM/9tHK+6QgktHL53swbHY3Fv5gr/yOAZr4KNQo/RDS/ubRZvA5f93wGBjsAbWuR9H/YIxGIQFS2DR+FYx6BisgUVjmy8ytN8RiotWwFg8ns37jqDv8RjoqGBPDrfn3gLTDVAwmCTzC+w7jQrOf9RCANiYtdkGFoM1sLC3FAzQRSssHTW0LNoEFvcHBYOMwZqs21FDtmBJp4r+Pw920eGoYbtoxRfqQ0u2ChS8OyrqRO9dalDNNgadD3NzlmsC1NtQfRyqz6Xq66FNTxN0LKrvS9U/W6h/PlT/jN/rPY1hf9F71L9rU/++dMg776Dqovp9C/V7T2vt+4fde8CwWw3DUdXv46s/iwELvZbzNLhMKDkTpf5cm10M1sBY9PdsIj5fao4tfATa04yq/oyw+nPe8MaFlrP6Q+9bYEf1LBbxRUsld2bU33tSf3dN/f3D8XdIPXdU9feAZe5ye9zd4KkK/ZaGJyo4LhqCMxWgJKczFaQsWOLlXAzZ2SYwZblzVPXzabBbyc8YctKG658TpX7Wl/55bWjm3tiI8Wfm3nrmuYnzvwrfzzz7cv6aaJp9OeH8UgezL00zaKWeAwyl38EMWv1zhPXPgm7N85Z9VH1yVCfzvPXPZH+cqy9frjyYq199G6GY+NsIhctvIyzK71tk+/WE37fI95nT71sQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQo5B8vlDCBniO5qwAAAABJRU5ErkJggg=="
        ></image>
      </div>

      <footer>
        <div className="footerTop">
          <div className="footerContent footerContentTop">
            <div className="FooterTopWords">
              <ul>
                <li>Crème 스토리</li>
                <li>이용약관</li>
                <li>
                  <span className="bold">개인정보취급방침</span>
                </li>
                <li>자주 찾는 질문</li>
              </ul>
            </div>
            <div className="FooterTopIcons">
              <div className="facebook">
                <img src="https://www.freemoa.net/public/images/dgm/fb_icon.png"></img>
              </div>
              <div className="naver_post">
                <img src="https://www.freemoa.net/public/images/dgm/naverpost_icon.png"></img>
              </div>
              <div className="naver_post">
                <img src="https://www.freemoa.net/public/images/dgm/naverblog_icon.png"></img>
              </div>
              <div className="kakao">
                <img src="https://www.freemoa.net/public/images/dgm/kt_icon.png"></img>
              </div>
              <div className="youtube">
                <img src="https://www.freemoa.net/public/images/dgm/yt_icon.png"></img>
              </div>
            </div>
          </div>
        </div>
        <div className="footerBottom">
          <div className="footerContent">
            <div className="footerBottomWords">
              {/* <h1>고객센터 : 02-760-5800</h1> */}
              <p>평일(공휴일 휴무) 10:00 - 19:00</p>
            </div>
            <div className="footerBottomWords">
              <p className="noBorder">대표 : 박승현</p>
              <p>CFO : 종강만기다리조</p>
              <p>사업자등록번호 : 123-45-6789</p>
              <p>서울특별시 성북구 삼선교로16길 116</p>
            </div>
            <div className="footerBottomWords">
              <p className="noBorder">
                Copyright 2018 Freemoa Inc., All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
// 이미지 클릭하면 상세 페이지로 이동
// <Nav.Link href={'detail/'+props.i} style={{display:'inline-block'}}>
function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"}
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default App;
