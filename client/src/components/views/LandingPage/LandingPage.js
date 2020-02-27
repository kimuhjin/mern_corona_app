import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Icon, BackTop, Button } from "antd";
import moment from "moment";
import Charts from "../Charts/Charts";
import Cards from "../Cards/Cards";
import Detail from "../Detail/Detail";

function LandingPage() {
  const [Data, setData] = useState([]);
  const [chart, setChart] = useState(false);
  const [more, setMore] = useState(false);
  const onclick = () => {
    setChart(!chart);
  };
  const showMore = () => {
    setMore(!more);
  };
  useEffect(() => {
    Axios.get("/api/data/getdata").then(response => {
      if (response.data.success) {
        setData(response.data.num[0]);
      } else {
        alert("Failed to get Videos");
      }
    });
  }, []);
  if (Data) {
    return (
      <>
        <div
          style={{
            textAlign: "center",
            marginTop: "30px"
          }}
        >
          <span style={{ fontSize: "30px" }}>천안 실시간 상황판</span>

          <div
            style={{
              textAlign: "center",
              marginTop: "10px",
              marginBottom: "10px"
            }}
          >
            <span>
              최종 업데이트 : &nbsp;
              {moment(Data.createdAt).format("MM-DD HH:mm")}
              &nbsp;&nbsp;&nbsp;
              <a href="/">
                <Icon type="reload" />
              </a>
            </span>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#ECECEC",
            textAlign: "center"
          }}
        >
          &nbsp;
        </div>
        <div
          style={{
            backgroundColor: "#ECECEC",
            textAlign: "center"
          }}
        >
          <span style={{ fontSize: "21px" }}>
            총 확진자{" "}
            <span style={{ color: "red", fontWeight: "bold" }}>{Data.sum}</span>
            &nbsp;명
          </span>
          <div>
            <span style={{ fontSize: "21px" }}>
              금일 확진자{" "}
              <span style={{ color: "#3e91f7", fontWeight: "bold" }}>
                {Data.today}
              </span>
              &nbsp;명
            </span>
          </div>
          <div>
            <span style={{ fontSize: "21px" }}>
              의심환자 <span style={{ fontWeight: "bold" }}>{Data.may}</span>
              &nbsp;명
            </span>
          </div>
          <br />
          <div style={{ textAlign: "center" }}>
            <Button onClick={showMore}>자세히 보기</Button>
          </div>
          <div
            style={{
              backgroundColor: "#ECECEC",
              textAlign: "center"
            }}
          >
            &nbsp;
          </div>
        </div>
        {more && (
          <Cards
            dujeong_p={Data.dujeong_p}
            dujeong_d={Data.dujeong_d}
            buldang_p={Data.buldang_p}
            buldang_d={Data.buldang_d}
          />
        )}
        <br />
        <div style={{ textAlign: "center" }}>확진자 그래프</div>
        <div style={{ marginRight: "60px" }}>
          <Charts
            year={parseInt(moment(Data.createdAt).format("DD"))}
            month={parseInt(moment(Data.createdAt).format("M"))}
            value={Data.sum}
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <Button onClick={onclick}>확진자 인적사항 보기</Button>
        </div>
        {chart && (
          <React.Fragment>
            <div style={{ textAlign: "center" }}>
              <Detail />
            </div>
          </React.Fragment>
        )}
        <div>
          <BackTop />
          <strong style={{ color: "rgba(64, 64, 64, 0.6)" }}> </strong>
        </div>
      </>
    );
  } else {
    return (
      <div>
        <Icon
          type="loading"
          style={{
            fontSize: 24
          }}
          spin
        />
      </div>
    );
  }
}

export default LandingPage;
