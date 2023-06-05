const faker = require("faker");
const Project = require("../models/project.model");

function generateFakeData(numberOfProjects = 10) {
  // Generate a random number of projects

  for (let i = 0; i < numberOfProjects; i++) {
    // Create a new project object
    const project = new Project({
      theme: faker.lorem.word(),
      reason: faker.random.arrayElement(["Business","Dealership","Transport","Travell"]),
      type: faker.random.arrayElement(["Internal","External","Vendor"]),
      division: faker.random.arrayElement(["Filters","Compressor","Pumps","Water Heater","Glass"]),
      category: faker.random.arrayElement(["Quality A","Quality B","Quality C","Quality D"]),
      priority: faker.random.arrayElement(["High","Low","Medium"]),
      department: faker.random.arrayElement(["Startegy","Finance","Quality","Maintenance","Stores","HR"]),
      start_date: faker.date.future(),
      end_date: faker.date.future(),
      location: faker.address.city(),
      status: faker.random.arrayElement(['registered', 'closed', 'running', 'cancelled'])
    });

    // Save the project to the database
    project
      .save()
      .then(() => {
        console.log("Project saved successfully");
      })
      .catch((error) => {
        console.error("Error saving project:", error);
      });
  }
}

module.exports = generateFakeData;
