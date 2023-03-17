import React, { useEffect, useState } from "react";

const CommonHeader = () => {
  const REST_API_KEY = "0871b8de404d373dcd5244fcb8873bd5";
  const REDIRECT_URI = "http://localhost:3000/oauth/loginok";
  const LOGOUT_REDIRECT_URI = "http://localhost:3000/oauth/logout";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const KAKAO_LOGOUT_URL = `https://kauth.kakao.com/oauth/logout?client_id=${REST_API_KEY}&logout_redirect_uri=${LOGOUT_REDIRECT_URI}`;

  const [user_id, setUserId] = useState(null);

  //   console.log(Kakao.Auth.getAccessToken());

  const getProfile = async () => {
    // try {
    //   // Kakao SDK API를 이용해 사용자 정보 획득
    //   let data = await window.Kakao.API.request({
    //     url: "/v2/user/me",
    //   });
    //   // 사용자 정보 변수에 저장
    //   console.log(data);
    //   setUserId(data.id);
    // } catch (err) {
    //   console.log(err, "lklklkl");
    // }
  };
  //   console.log(Kakao.Auth.getAccessToken());

  useEffect(() => {
    console.log(localStorage.aaa);
    setTimeout(() => {
      setUserId(localStorage.aaa);
      // console.log("sdfsdfs");
    }, 500);
    // getProfile();
  }, []);

  // console.log(user_id);
  // if (!user_id) return <>loading...</>;
  return (
    <div>
      <header className={"headerstyle"}>
        <div>
          <a href="/">
            <h1>
              쇼<span>링크</span>
            </h1>
          </a>
          <ul>
            {!user_id ? (
              <li>
                <a href={KAKAO_AUTH_URL}>로그인</a>
              </li>
            ) : (
              <li>
                <a href="/src/mypage">마이페이지</a>
                <a href={KAKAO_LOGOUT_URL}>로그아웃</a>
              </li>
              // <li>
              //   <a>회원가입</a>
              // </li>
            )}
          </ul>
        </div>
      </header>
    </div>
  );
};

export default CommonHeader;
