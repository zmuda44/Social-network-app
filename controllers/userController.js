// ObjectId() method for converting studentId string into an ObjectId for querying database
const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');




module.exports = {

  // async seedUsers(req, res) {
  //   try {
  //     await User.insertMany(
  //       [
  //         { "username": "Oh the Places We Will Go!" },
  //         { "email": "Diary of Anne Frank" }
  //       ]
  //     )
  //     // .then(results => res.json(results))
  //   }
  //     catch(err) {
  //       console.log(err)
  //     };
  // };
  
//   // Get all users
  async getUsers(req, res) {
    console.log("get request to users")
    try {
      const users = await User.find();
      const userObj = {
        users,
        // headCount: await headCount(),
      };
      return res.json(userObj);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Get a single user
  async getSingleUser(req, res) {
    console.log(req.params.userId)
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select('-__v')
        .lean();

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },


//   // create a new user
  async createUser(req, res) {
    console.log(req.body)
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },




};
