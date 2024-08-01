// /thoughts

const router = require('express').Router();

const { Router } = require('express');
const {
  getThoughts,
  getSingleThought,
  createThoughtToUser,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts)
// .post(createThought)

// /api/thoughts/user/:userId
router.route('/user/:userId').post(createThoughtToUser);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction)

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;