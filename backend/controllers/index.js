const Project = require("../models/projects");
const OpenAI = require("openai");
const openai = new OpenAI();

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

async function getSearchedProjectsByQueries(req, res) {
  try {
    const naturalQuery = req.body.query;
    const type = req.body.type;
    let query = {};
    if (type == "Internal") {
      const parsedData = {};

      const fieldMappings = {
        frontend: "Frontend",
        backend: "Backend",
        title: "Title",
        technology: "Technologies",
        technologies: "Technologies",
        infrastructure: "Infrastructure",
        availability: "Availability",
        database: "Databases",
      };

      const keywords = naturalQuery.split(" ");

      for (let i = 0; i < keywords.length; i += 1) {
        const field = fieldMappings[keywords[i]];
        const operator = keywords[i + 1];
        const value = keywords[i + 2];

        if (field && operator && value) {
          query[field] = { $regex: new RegExp(value, "i") };
          parsedData[field.charAt(0).toUpperCase() + field.slice(1)] = value;
        }
      }
    
    } else {
      const chatCompletion = await openai.chat.completions.create({
        messages: [
          {
            role: "user",
            content: ` { "Title" : "",
        "Technologies" : "",
        "Frontend" : "",
        "Backend" : "",
        "Databases" : "",
        "Infrastructure" : "" }
        
        Create a object as shared above for the project search api which filter the list of the projects in the  mongo db  
        only include those keys in the object which are mentioned in the statement given below 
        and if you are not able to find any related key as of the model share above return empty object {}

        Statement:${naturalQuery}
        `,
          },
        ],
        model: "gpt-3.5-turbo",
      });

      const originalObject = JSON.parse(
        chatCompletion.choices[0].message.content
      );

      for (const key in originalObject) {
        if (originalObject.hasOwnProperty(key)) {
          const value = originalObject[key].toLowerCase();
          query[key] = { $regex: new RegExp(value, "i") };
        }
      }
    }
    const results = await Project.find(query);

    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}
module.exports = {
  getSearchedProjects,
  getSearchedProjectsByQueries,
};
