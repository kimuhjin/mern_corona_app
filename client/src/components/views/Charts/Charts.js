import React, { useEffect, useState } from "react";
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util
} from "bizcharts";

function Charts(props) {
  const [graph, setgraph] = useState([]);
  const data = [
    { year: "2.24", value: 0 },
    {
      year: "2.25",
      value: 3
    },
    {
      year: "2.26",
      value: 6
    }
  ];
  useEffect(() => {
    let update = {
      year: props.month + "." + props.year,
      value: props.value
    };
    const datas = data.concat(update);
    setgraph(datas);
  }, [props.year, props.value]);
  console.log(graph);
  const cols = {
    value: {
      min: 0
    },
    year: {
      range: [0, 1]
    }
  };
  return (
    <Chart height={300} data={graph} scale={cols} forceFit>
      <Axis name="일자" />
      <Axis name="확진자" />
      <Tooltip
        crosshairs={{
          type: "y"
        }}
      />
      <Geom type="line" position="year*value" size={2} />
      <Geom
        type="point"
        position="year*value"
        size={4}
        shape={"circle"}
        style={{
          stroke: "#fff",
          lineWidth: 1
        }}
      />
    </Chart>
  );
}

export default Charts;
