const express = require("express");
const router = express.Router();
const data = require("./employees.json");

router.get("/", async (req, res) => {
  let searchQ = req.query.q || "";
  const filteredEmployees = data.filter((option) => {
    return option.workTitle.toLowerCase().includes(searchQ.toLocaleLowerCase()) ||
      option.name.toLocaleLowerCase().includes(searchQ.toLocaleLowerCase())
  }
  );

  try {
    res.json(filteredEmployees);
  }
  catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
})

module.exports = router;