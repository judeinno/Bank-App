const express = require('express')
const router = express.Router()

require('./routes/transactions')(router)
require('./routes/user')(router)

module.exports = router
