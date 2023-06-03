const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  theme: {
    type: String,
    required: true
  },
  reason: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  division: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  priority: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  start_date: {
    type: Date,
    required: true
  },
  end_date: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  status:{
    type: String,
    enum: ['registered', 'closed', 'running', 'cancelled'],
    default: 'registered'
  }
});

module.exports = mongoose.model('Project', projectSchema,"projects");


