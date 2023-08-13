const express = require("express");
const router = express.Router();
const controller = require("../Controllers/controller");
router.get("/api/projectdetail", controller.projectget);
router.post("/api/data", controller.sendData);

module.exports = router;
