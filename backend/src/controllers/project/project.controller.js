const Project = require("../../models/project.model");
const {
  projectSchema,
  statusSchema,
} = require("../../validator/project.validator");
const CustomErrorHandler = require("../../services/customErrorHandler");

const projectController = {
  // Create Prject
  async createProject(req, res, next) {
    try {
      const { error } = projectSchema.validate(req.body);
      if (error) {
        return next(error);
      }

      //   Add project to the database
      let project = new Project(req.body);
      await project.save();
      return res.status(201).send(project);
    } catch (err) {
      return next(err);
    }
  },

  // GET API controller with pagination
  async getProject(req, res, next) {
    const { page = 1, limit = 10 } = req.query;

    try {
      const skip = (page - 1) * limit;
      const totalDocuments = await Project.countDocuments();
      const totalPages = Math.ceil(totalDocuments / limit);

      const results = await Project.find().skip(skip).limit(Number(limit));

      return res.json({
        results,
        totalPages,
        currentPage: Number(page),
      });
    } catch (error) {
      return next(error);
    }
  },

  // Update status controller API

  async updateStatus(req, res, next) {
    const { id } = req.params;
    const { status } = req.body;
    console.log(status);

    const { error } = statusSchema.validate(status);
    if (error) {
      return next(error);
    }

    try {
      const updatedDocument = await Project.findByIdAndUpdate(
        id,
        { status },
        { new: true }
      );

      if (!updatedDocument) {
        return next(CustomErrorHandler.notFound("Document not found"));
      }

      return res.json(updatedDocument);
    } catch (error) {
      return next(error);
    }
  },

  // Api for Count document
  async countDocuments(req, res, next) {
    try {
      const totalDocuments = await Project.countDocuments();
      const runningCount = await Project.countDocuments({ status: "running" });
      const cancelledCount = await Project.countDocuments({
        status: "cancelled",
      });
      const closedCount = await Project.countDocuments({ status: "closed" });
      const closureDelayCount = await Project.countDocuments({
        status: "running",
        end_date: { $lt: new Date() },
      });

      res.json({
        Total_Project: totalDocuments,
        Closed: runningCount,
        Running: cancelledCount,
        Closure_Delay: closedCount,
        Cancelled: closureDelayCount,
      });
    } catch (error) {
      return next(error);
    }
  },

  // Department graph
  async departmentStatusData(req, res, next) {
    try {
      const result = await Project.aggregate([
        {
          $group: {
            _id: "$department",
            running: {
              $sum: {
                $cond: [{ $eq: ["$status", "running"] }, 1, 0],
              },
            },
            closed: {
              $sum: {
                $cond: [{ $eq: ["$status", "closed"] }, 1, 0],
              },
            },
          },
        },
      ]);

      return res.send(result);
    } catch (error) {
      return next(error);
    }
  },

  // Search controller
  async searchProject(req, res, next) {
    const { search } = req.query;
    const limit = 10;

    try {
      // Create a case-insensitive regular expression for the filter text
      const regexSearch = new RegExp(search, "i");

      // Construct the search query to match any column where the filter text matches partially or completely
      const searchQuery = {
        $or: [
          { theme: { $regex: regexSearch } },
          { reason: { $regex: regexSearch } },
          { type: { $regex: regexSearch } },
          { division: { $regex: regexSearch } },
          { category: { $regex: regexSearch } },
          { priority: { $regex: regexSearch } },
          { department: { $regex: regexSearch } },
          { location: { $regex: regexSearch } },
          { status: { $regex: regexSearch } },
        ],
      };

      const results = await Project.find(searchQuery);
      const totalDocuments = await Project.countDocuments(searchQuery);
      const totalPages = Math.ceil(totalDocuments / limit);

      return res.json({
        results,
        totalPages,
        currentPage: 1,
      });
    } catch (error) {
      return next(error);
    }
  },

  // Sort Project
  async sortProject(req,res,next){
    let { sortBy } = req.query;
    const limit = 10

    if(!sortBy || sortBy==""){
      sortBy="theme"
    }
    // console.log(sortBy)
  try {
    const projects = await Project.find().sort({ [sortBy]: 1 });

    const totalDocuments = await Project.countDocuments(sortBy);
    const totalPages = Math.ceil(totalDocuments / limit);

    return res.json({
      results:projects,
      totalPages,
      currentPage: 1,
    });

    return res.json(projects);
  } catch (error) {
    next(error)
  }
  }
};

module.exports = projectController;
