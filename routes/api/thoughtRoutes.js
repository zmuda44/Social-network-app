// /thoughts

const router = require('express').Router();

const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  addThought,
  removeThought,
  addThoughtToUser,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought)

// /api/thoughts/user/:userId
router.route('/user/:userId').post(addThoughtToUser);

// /api/thoughts/:thoughtId
// router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);

// /api/thoguhts/:thoughtId/     assignments
// router.route('/:userId/thoughts').post(addThought);

// /api/students/:studentId/     assignments/:assignmentId
// router.route('/:userId/thoughts/:thoughtId').delete(removeThought);

module.exports = router;