// /thoughts

const router = require('express').Router();

const { Router } = require('express');
const {
  getThoughts,
  getSingleThought,
  // createThought,
  deleteThought,
  addThought,
  removeThought,
  createThoughtToUser,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts)
// .post(createThought)

// /api/thoughts/user/:userId
router.route('/user/:userId').post(createThoughtToUser);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);

// /api/thoguhts/:thoughtId/ 
// router.route('/:userId/thoughts').post(addThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction)

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;