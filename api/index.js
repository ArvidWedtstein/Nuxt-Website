const express = require('express')

// Create express instance
const app = express()

// Require API routes
const carousel = require('./routes/carousel')

// Import API Routes
app.use(carousel)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}