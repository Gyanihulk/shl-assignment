const { getSearchedProjects } = require("../controllers");

const router = require("express").Router();

router.post("/", getSearchedProjects);

module.exports = router;
