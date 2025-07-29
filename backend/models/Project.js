const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  technologies: [{
    type: String,
    required: true
  }],
  category: {
    type: String,
    required: true,
    enum: ['Frontend', 'Backend', 'Full Stack', 'Mobile']
  },
  github: {
    type: String,
    required: true
  },
  live: {
    type: String
  },
  featured: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    enum: ['draft', 'published'],
    default: 'published'
  },
  order: {
    type: Number,
    default: 0
  },
  views: {
    type: Number,
    default: 0
  },
  tags: [{
    type: String,
    trim: true
  }],
  startDate: {
    type: Date
  },
  endDate: {
    type: Date
  },
  teamSize: {
    type: Number,
    min: 1
  },
  role: {
    type: String,
    trim: true
  },
  highlights: [{
    type: String,
    trim: true
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt timestamp before saving
ProjectSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

// Increment views
ProjectSchema.methods.incrementViews = async function() {
  this.views += 1;
  return this.save();
};

module.exports = mongoose.model('Project', ProjectSchema, 'Projects');
