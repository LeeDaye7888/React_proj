import { Button } from 'react-bootstrap'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
   const userId = "hansung";
   const userPw = "1234";
   const [inputId, setInputId] = useState('');
   const [inputPw, setInputPw] = useState('');
   const navigate = useNavigate();

   const handleInputId = (e) => {
      setInputId(e.target.value)
   }

   const handleInputPw = (e) => {
      setInputPw(e.target.value)
   }

 // login 버튼 클릭 이벤트
  const onClickLogin = () => {
      if (userId == inputId && userPw == inputPw) {
         navigate('/mypage');
      } 
      else if (inputId == "" && inputPw == "") {
         alert("아이디와 비밀번호를 입력하세요.");
      } else {
         alert("아이디와 비밀번호를 확인하세요.");
      }
  }
   return (
      <div>
      <div className='login'>
         <h1 style={{marginBottom : "40px", fontSize : "50px"}}>Crème</h1>
            <input style={{textAlign : "left", height : "37px"}}
               id="outlined-username-input"
               label="Username"
               type="username"
               name="input_id"
               value={inputId}
               onChange={handleInputId}
            />
            <input style={{marginTop : "5px", textAlign : "left", height : "37px"}}
               id="outlined-password-input"
               label="Password"
               type="password"
               name='input_pw'
               value={inputPw}
               onChange={handleInputPw}
            />
            <Button variant="dark"
            size="large" style={{backgroundColor : "black", marginTop : "20px"}}
            onClick={onClickLogin}>LOGIN</Button>
            <hr></hr>
            <span style={{fontSize : "13px"}}>아이디 찾기 | 비밀번호 찾기</span>
      </div>
      </div>
   )
 }
 
 export default Login;