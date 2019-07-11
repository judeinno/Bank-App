const User = require('../../models/users')

module.exports = router => {
  // @route   Get api/users/:ID
  // @desc    Return User by ID
  // @access  Public
  router.get('/user/:id', (req, res) => {
    User.findById(req.params.id).exec()
      .then(user => res.status(200).json(user))
      .catch(err => res.status(500).json({
        message: 'Error finding user',
        error: err
      }))
  })

  // @route   Get api/users/email/:email
  // @desc    Return User by email
  // @access  Public
  router.get('/user/email/:email', (req, res) => {
    User.find({ 'email': req.params.email }).exec()
      .then(user => res.status(200).json(user))
      .catch(err => res.status(500).json({
        message: 'Error finding user',
        error: err
      }))
  })

  // @route   Post api/users
  // @desc    Register User
  // @access  Public
  router.post('/user', (req, res) => {
    let doc = {
      first: req.body.firstName,
      last: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      isActice: req.body.isActice
    }
    let user = new User(doc)
    user.save((err, user) => {
      if (err) {
        return console.log(err)
      }
      res.status(200).json(user)
    })
  })

  // @route   Put api/users/:id
  // @desc    Update User data
  // @access  Public
  router.put('/user/:id', (req, res) => {
    let qry = { _id: req.params.id }
    let doc = {
      first: req.body.firstName,
      last: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      isActice: req.body.isActice
    }
    User.update(qry, doc, (err, respRaw) => {
      if (err) {
        return console.log(err)
      }
      res.status(200).json(respRaw)
    })
  })
}
