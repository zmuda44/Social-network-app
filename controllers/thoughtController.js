const { Thought, User } = require('../models');

//look for courses or courses

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

  async createThought (req, res) {
    console.log('create thought')
    console.log(req.body)
    console.log(Thought)
    try {
      const thought = await Thought.create(req.body);
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },



  //   // Add a thought to a user
  async addThoughtToUser(req, res) {
    console.log('You are adding a thought to a user');
    console.log(req.body);
    try {

      const user = await User.findOneAndUpdate(
        {_id: req.params.userId},
        { $addToSet: { thoughts: req.body } },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: 'No user found with that ID' })
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },







  // Get a thought
  // async getSingleThought(req, res) {
  //   try {
  //     const thoughts = await Thought.findOne({ _id: req.params.thoughtId })
  //     .populate('thoughts');

  //     if (!thoughts) {
  //       return res.status(404).json({ message: 'No thoughts with that ID' });
  //     }

  //     res.json(thought);
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // },


 
  // async deleteThought(req, res) {
  //   try {
  //     const thought = await Thought.findOneAndDelete({ _id: req.params.courseId });

  //     if (!thought) {
  //       return res.status(404).json({ message: 'No thought with that ID' });
  //     }

  //     await Student.deleteMany({ _id: { $in: course.students } });
  //     res.json({ message: 'Course and students deleted!' });
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // },

  
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
};
