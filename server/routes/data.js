const express = require("express");
const router = express.Router();

const { Data } = require("../models/Data");

// models에 있는 export한 파일들을 require한다.

//==============================//
//             인원              //
//==============================//
//요청객체 req와 응답객체 res는 express.js 라우트의 속성이다.

router.post("/savedata", (req, res) => {
  const data = new Data(req.body);
  data.save((err, data) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({
      success: true
    });
  });
});

router.post("/updatedata", (req, res) => {
  Data.findOneAndUpdate(
    { email: "ajin950714@naver.com" },
    {
      dujeong_p: req.body.dujeong_p,
      dujeong_d: req.body.dujeong_d,
      buldang_d: req.body.buldang_d,
      buldang_p: req.body.buldang_p,
      today: req.body.today,
      sum: req.body.sum,
      may: req.body.may
    },
    (err, doc) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).send({
        success: true
      });
    }
  );
});

router.get("/getdata", (req, res) => {
  Data.find()
    .populate("writer")
    .exec((err, num) => {
      if (err) return res.status(400).end(err);
      res.status(200).json({ success: true, num });
    });
});

module.exports = router;
