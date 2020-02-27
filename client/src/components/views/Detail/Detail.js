import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Descriptions } from "antd";
function Detail() {
  const [Detail, setDetail] = useState([]);
  useEffect(() => {
    Axios.get("/api/detail/getdetail").then(response => {
      if (response.data.success) {
        setDetail(response.data.details);
        console.log(Detail);
      } else {
        alert("인적사항을 받아오는데 실해함");
      }
    });
  }, []);
  const DetailItem = Detail.map((detail, index) => {
    return (
      <>
        <Descriptions
          title
          bordered
          column={{ xxl: 4, xl: 4, lg: 4, md: 4, sm: 2, xs: 2 }}
        >
          <Descriptions.Item label="번호">{detail.num}</Descriptions.Item>
          <Descriptions.Item label="성별">{detail.sex}</Descriptions.Item>
          <Descriptions.Item label="나이">{detail.age}</Descriptions.Item>
          <Descriptions.Item label="거주지">{detail.place}</Descriptions.Item>
          <Descriptions.Item label="이동경로" span={4}>
            {detail.root}
          </Descriptions.Item>
        </Descriptions>
      </>
    );
  });
  return <React.Fragment>{DetailItem}</React.Fragment>;
}

export default Detail;
