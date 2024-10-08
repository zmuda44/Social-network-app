// ObjectId() method for converting studentId string into an ObjectId for querying database
const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

module.exports = {
  
// Get all users
  async getUsers(req, res) {
    console.log("get request to users")
    try {
      const users = await User.find().select('-__v')
      return res.json(users);
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
        .populate('thoughts')
        .populate('friends')

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

// Create a new user
  async createUser(req, res) {
    console.log(req.body)
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Update a user
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );
      console.log(user)
      res.send(user)
    }
    catch (err) {
      res.status(500).json(err);
    }
  },

  // Delete a user
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });

      if (!user) {
        res.status(404).json({ message: 'No user with that ID' });
      }

      // await Thought.deleteMany({ _id: { $in: user.thoughts } });
      res.json({ message: 'User deleted! Bonus: delete associated thoughts with user' });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Add a friend
  async addUserFriend (req, res) {
    console.log(req.params.friendId)
    try {
      const user = await User.findOneAndUpdate(
        {_id: req.params.userId},
        { $addToSet: { friends: {_id: req.params.friendId} } },
        { runValidators: true, new: true }
      );
      if (!user) {
        return res
          .status(404)
          .json({ message: 'No user found with that ID' })
      }
      res.json(user);
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  }, 

  // Remove a friend
  async removeUserFriend (req, res) {
    console.log(req.params.friendId)
    try {
      const user = await User.findOneAndUpdate(
        {_id: req.params.userId},
        { $pull: { friends: req.params.friendId} },
        { runValidators: true, new: true }
      );
      if (!user) {
        return res
          .status(404)
          .json({ message: 'No user found with that ID' })
      }
      res.json(user);
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  }, 
};

