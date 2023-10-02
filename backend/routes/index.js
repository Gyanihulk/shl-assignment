const { getSearchedProjects, getSearchedProjectsByQueries } = require("../controllers");

const router = require("express").Router();

router.post("/", getSearchedProjects);
router.post("/naturalquery", getSearchedProjectsByQueries);

module.exports = router;
