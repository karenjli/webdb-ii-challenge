const express = require("express");
const knex = require("knex");

const knexConfig = require("../knexfile");
const db = knex(knexConfig.development);

const router = express.Router();

router.get("/", (req, res) => {
  db.select("*")
    .from("cars")
    .then(car => {
      res.status(200).json(car);
    })
    .catch(error => {
      res
        .status(500)
        .json({ errorMessage: "There is an error retreiving all cars" });
    });
});

router.post("/", (req, res) => {
  const body = req.body;
  if (!body.VIN || !body.make || !body.model || !body.mileage) {
    res.status(404).json({ message: "VIN, Make, Model and Mileage Required" });
  } else {
    db("cars")
      .insert(body)
      .then(car => {
        res.status(200).json(car);
      })
      .catch(error => {
        res
          .status(500)
          .json({ errorMessage: "There is an error posting data" });
      });
  }
});

module.exports = router;
