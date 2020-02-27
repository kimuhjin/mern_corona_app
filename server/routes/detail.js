const express = require("express");
const router = express.Router();

const { Detail } = require("../models/Detail");

//==============================//
//             인적사항          //
//=============================//

router.post("/savedetail", (req, res) => {
  const detail = new Detail(req.body);
  detail.save((err, details) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({
      success: true
    });
  });
});

router.get("/getdetail", (req, res) => {
  Detail.find()
    .populate("writer")
    .exec((err, details) => {
      if (err) return res.status(400).end(err);
      res.status(200).json({ success: true, details });
    });
});

module.exports = router;
