import React from "react";
import { Card, Col, Row } from "antd";

function Cards(props) {
  return (
    <div style={{ background: "#ECECEC", padding: "20px" }}>
      <Row gutter={16}>
        <Col xs={12} md={6} lg={6}>
          <Card title="두정동" bordered={false} style={{ textAlign: "center" }}>
            <div>
              확진자 :&nbsp;
              <span style={{ fontWeight: "bold" }}>{props.dujeong_p}</span>
              &nbsp;명
            </div>
            <div>
              사망자 :&nbsp;
              <span style={{ fontWeight: "bold" }}>{props.dujeong_d}</span>
              &nbsp;명
            </div>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <Card title="불당동" bordered={false} style={{ textAlign: "center" }}>
            <div>
              확진자 :&nbsp;
              <span style={{ fontWeight: "bold" }}>{props.buldang_p}</span>
              &nbsp;명
            </div>
            <div>
              사망자 :&nbsp;
              <span style={{ fontWeight: "bold" }}>{props.buldang_d}</span>
              &nbsp;명
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Cards;
