import React, { useEffect, useState } from "react";
import { Typography, Form, Button, Input, Icon, message } from "antd";
import Axios from "axios";
import { useSelector } from "react-redux"; //리덕스 스토어의 상태에 접근하기 위한 Hook.
import { Card, Col, Row } from "antd";
const { Title } = Typography;
const { TextArea } = Input;

function UploadData(props) {
  const user = useSelector(state => state.user);
  const [dujeong_p, setdujeong_p] = useState(0);
  const [dujeong_d, setdujeong_d] = useState(0);
  const [buldang_p, setbuldang_p] = useState(0);
  const [buldang_d, setbuldang_d] = useState(0);
  const [today, setToday] = useState(0);
  const [sum, setSum] = useState(0);
  const [may, setMay] = useState(0);

  const dujeong_pchange = event => {
    setdujeong_p(event.currentTarget.value);
  };
  const dujeong_dchange = event => {
    setdujeong_d(event.currentTarget.value);
  };
  const buldang_pchange = event => {
    setbuldang_p(event.currentTarget.value);
  };
  const buldang_dchange = event => {
    setbuldang_d(event.currentTarget.value);
  };
  const today_change = event => {
    setToday(event.currentTarget.value);
  };
  const sum_change = event => {
    setSum(event.currentTarget.value);
  };
  const may_change = event => {
    setMay(event.currentTarget.value);
  };
  const onSubmit = event => {
    event.preventDefault();
    // if (user.userData && !user.userData.isAuth) {
    //   return alert("로그인 후 이용 가능합니다.");
    // }
    const variables = {
      dujeong_p: dujeong_p,
      dujeong_d: dujeong_d,
      buldang_p: buldang_p,
      buldang_d: buldang_d,
      today: today,
      sum: sum,
      may: may,
      email: user.userData.email
    };
    Axios.post("/api/data/savedata", variables).then(response => {
      if (response.data.success) {
        alert("데이터 등록 성공");
      } else {
        alert("데이터 등록 오류발생");
      }
    });
  };
  console.log(user);
  const onSubmit_delete = event => {
    event.preventDefault();
    // if (user.userData && !user.userData.isAuth) {
    //   return alert("로그인 후 이용 가능합니다.");
    // }
    const variables = {
      dujeong_p: dujeong_p,
      dujeong_d: dujeong_d,
      buldang_p: buldang_p,
      buldang_d: buldang_d,
      today: today,
      sum: sum,
      may: may,
      email: user.userData.email
    };

    Axios.post("/api/data/updatedata", variables).then(response => {
      if (response.data.success) {
        alert("데이터 수정 성공");
        props.history.push("/");
      } else {
        alert("데이터 수정 오류발생");
      }
    });
  };
  return (
    <>
      <Form onSubmit={onSubmit}>
        <div style={{ background: "#ECECEC", padding: "30px" }}>
          <Row gutter={16}>
            <Col xs={12} md={6} lg={6}>
              <Card
                title="두정동"
                bordered={false}
                style={{ textAlign: "center" }}
              >
                <div>
                  확진자 :&nbsp;
                  <Input
                    style={{ width: "50px" }}
                    onChange={dujeong_pchange}
                    value={dujeong_p}
                  />
                  &nbsp;명
                </div>
                <div>
                  사망자 :&nbsp;
                  <Input
                    style={{ width: "50px" }}
                    onChange={dujeong_dchange}
                    value={dujeong_d}
                  />
                  &nbsp;명
                </div>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <Card
                title="불당동"
                bordered={false}
                style={{ textAlign: "center" }}
              >
                <div>
                  확진자 :&nbsp;
                  <Input
                    style={{ width: "50px" }}
                    onChange={buldang_pchange}
                    value={buldang_p}
                  />
                  &nbsp;명
                </div>
                <div>
                  사망자 :&nbsp;
                  <Input
                    style={{ width: "50px" }}
                    onChange={buldang_dchange}
                    value={buldang_d}
                  />
                  &nbsp;명
                </div>
              </Card>
            </Col>
          </Row>
        </div>
        <br />
        <div>
          금일 확진자 :&nbsp;
          <Input
            style={{ width: "50px" }}
            onChange={today_change}
            value={today}
          />
          &nbsp;명
        </div>

        <br />
        <div>
          총 확진자 :&nbsp;
          <Input style={{ width: "50px" }} onChange={sum_change} value={sum} />
          &nbsp;명
        </div>
        <div>
          의심환자 :&nbsp;
          <Input style={{ width: "50px" }} onChange={may_change} value={may} />
          &nbsp;명
        </div>
        <div style={{ textAlign: "right" }}>
          {/* <Button
            type="primary"
            size="large"
            onClick={onSubmit}
            style={{
              marginTop: "10px",
              marginRight: "10px"
            }}
          >
            등록
          </Button> */}
          <Button
            type="primary"
            size="large"
            onClick={onSubmit_delete}
            style={{
              marginTop: "10px",
              marginRight: "10px"
            }}
          >
            수정
          </Button>
        </div>
      </Form>
    </>
  );
}

export default UploadData;
