const { User } = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

class Controller {
  static getAll(req, res) {
    User.findAll()
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => res.status(500).json(err))
  }
  static getOne(req, res) {
    User.findOne({ where: { id: Number(req.params.id) } })
      .then(user => {
        res.status(200).json(user)
      })
      .catch(err => res.status(500).json(err))
  }
  static create(req, res) {
    // console.log(req.body)
    User.create({
      username: req.body.username,
      password: bcrypt.hashSync(req.body.password, 10),
      role: req.body.role
    })
      .then(user => {
        res.status(201).json(user)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
  static delete(req, res) {
    User.destroy({
      where: {
        id: Number(req.params.id)
      }
    })
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => { res.status(500).json(err) })
  }
  static updatePut(req, res) {
    User.update({
      username: req.body.username,
      password: bcrypt.hashSync(req.body.password, 10)
    }, {
        where: {
          id: Number(req.params.id)
        }
      })
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => { res.status(500).json(err) })
  }
  static login(req, res) {
    User.findOne({
      where: {
        username: req.body.username
      }
    })
      .then(user => {
        if (!user) {
          res.status(401).json({ message: 'Username tidak ada.' })
        } else {
          if (!bcrypt.compareSync(req.body.password, user.password)) {
            res.status(401).json({ message: 'Password salah.' })
          } else {
            let token = jwt.sign({
              id: user.id,
              username: user.username,
              role: user.role
            }, process.env.SECRET)
            req.headers.token = token
            console.log(req.headers)
            res.status(200).json({ user })
          }
        }
      })
      .catch(err => res.status(500).json(err))
  }
}

module.exports = Controller