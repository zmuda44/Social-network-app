const { Thought, User } = require('../models');

//look for courses or courses

module.exports = {
  // Get all courses
  async getThoughts(req, res) {
    try {
      const courses = await Thought.find()
      .populate('thoughts');
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a course
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
  // Create a course
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      res.json(course);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
 
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
