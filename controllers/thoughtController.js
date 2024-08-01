const { Thought, User } = require('../models');

module.exports = {
  // Get all thoughts
  async getThoughts(req, res) {
    console.log("thought get")
    try {
      const courses = await Thought.find()
      .populate('thoughts');
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Create thought
  async createThoughtToUser (req, res) {
    console.log('create thought')
    console.log(req.body)
    console.log(Thought)
    try {
      const thought = await Thought.create(req.body);
      console.log(thought)


      const user = await User.findOneAndUpdate(
        {_id: req.params.userId},
        { $addToSet: { thoughts: thought } },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: 'No user found with that ID' })
      }

      res.json(user);

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },


 // Get a thought
  async getSingleThought(req, res) {
    try {
      const thoughts = await Thought.findOne({ _id: req.params.thoughtId })
      .populate('thoughts');

      if (!thoughts) {
        return res.status(404).json({ message: 'No thoughts with that ID' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },


 
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({ _id: req.params.courseId });

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      await User.deleteMany({ _id: { $in: user.thoughts } });
      res.json({ message: 'Course and students deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  
  // async updateThought(req, res) {
  //   try {
  //     const thought = await Thought.findOneAndUpdate(
  //       { _id: req.params.courseId },
  //       { $set: req.body },
  //       { runValidators: true, new: true }
  //     );

  //     if (!thoughts) {
  //       return res.status(404).json({ message: 'No thought with this id!' });
  //     }

  //     res.json(course);
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // },

  async addReaction(req, res) {
    console.log(req.params.thoughtId)
    console.log(req.body);

    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res
          .status(404)
          .json({ message: 'No thought found with that ID ' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async removeReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { _id: req.params.reactionId } } },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res
          .status(404)
          .json({ message: 'No thought found with that ID' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

};
