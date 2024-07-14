const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addThought,
  removeThought,
} = require('../../controllers/UserController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// /api/students/:studentId/assignments
// router.route('/:userId/thoughts').post(addThought);

// /api/students/:studentId/assignments/:assignmentId
// router.route('/:userId/thoughts/:thoughtId').delete(removeThought);

module.exports = router;
