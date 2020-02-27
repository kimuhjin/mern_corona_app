import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Typography, Form, Button, Input, Icon, message } from "antd";

function UploadDetail() {
  const [num, setNum] = useState(0);
  const [sex, setSex] = useState("");
  const [root, setRoot] = useState("");
  const [place, setPlace] = useState("");
  const [age, setAge] = useState("");

  const num_change = event => {
    setNum(event.currentTarget.value);
  };
  const sex_change = event => {
    setSex(event.currentTarget.value);
  };
  const root_change = event => {
    setRoot(event.currentTarget.value);
  };
  const age_change = event => {
    setAge(event.currentTarget.value);
  };
  const place_change = event => {
    setPlace(event.currentTarget.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    // if (user.userData && !user.userData.isAuth) {
    //   return alert("로그인 후 이용 가능합니다.");
    // }
    const variables = {
      num: num,
      root: root,
      sex: sex,
      age: age,
      place: place
    };
    Axios.post("/api/detail/savedetail", variables).then(response => {
      if (response.data.success) {
        alert("데이터 등록 성공");
      } else {
        alert("데이터 등록 오류발생");
      }
    });
  };
  return (
    <>
      <div style={{ background: "#ECECEC", padding: "30px" }}>
        <Form onSubmit={onSubmit}>
          번호 :&nbsp;&nbsp;
          <Input style={{ width: "50px" }} onChange={num_change} value={num} />
          <br />
          <br />
          성별 :&nbsp;&nbsp;
          <Input style={{ width: "flex" }} onChange={sex_change} value={sex} />
          <br />
          <br />
          나이 :&nbsp;&nbsp;
          <Input style={{ width: "flex" }} onChange={age_change} value={age} />
          <br />
          <br />
          거주지 :&nbsp;&nbsp;
          <Input
            style={{ width: "flex" }}
            onChange={place_change}
            value={place}
          />
          <br />
          <br />
          이동경로 : &nbsp;&nbsp;
          <Input
            style={{ width: "flex" }}
            onChange={root_change}
            value={root}
          />
          <br />
          <br />
        </Form>
      </div>

      <div style={{ textAlign: "right" }}>
        <Button
          type="primary"
          size="large"
          onClick={onSubmit}
          style={{
            marginTop: "10px",
            marginRight: "10px"
          }}
        >
          등록
        </Button>
      </div>
    </>
  );
}

export default UploadDetail;
