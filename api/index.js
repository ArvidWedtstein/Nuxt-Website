const express = require('express')

// Create express instance
const app = express()

// Require API routes
const carousel = require('./routes/carousel')
app.use(carousel)
// Import API Routes

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}