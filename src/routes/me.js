const express = require("express");
const router = express.Router({
  caseSensitive: false,
});

const meController = require("../app/controllers/MeController");

router.get("/stored/courses", meController.storedCourses);

module.exports = router;
