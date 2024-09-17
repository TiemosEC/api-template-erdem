const express = require("express");
const router = express.Router();

router.use(express.json());

router.post("/api", (req, res, next) => {
  const { anyInputOne, anyInputTwo } = req.body;
  const data = {
    inputOne: anyInputOne,
    inputTwo: anyInputTwo,
  };

  res.json(data);
});

module.exports = router;
