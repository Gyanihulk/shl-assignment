const Project = require("../models/projects");
async function getSearchedProjects(req, res) {
  try {
 
    const searchCriteria = req.body;
    // Build a query based on the search criteria
    const query = {};
    for (const key in searchCriteria) {
      if (searchCriteria[key]) {
        query[key] = { $regex: new RegExp(searchCriteria[key], "i") }; 
      }
    }

    // Execute the search query
    const results = await Project.find(query);

    // Send the results as JSON response
    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  getSearchedProjects,
};
