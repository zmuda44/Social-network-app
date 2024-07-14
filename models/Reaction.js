// This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.

const { Schema, model } = require('mongoose');
const UserSchema = require('./User');

const ReactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      // default: newObjectId()
    },
    reactionBody: {
      type: String,
      require: true,
      max_length: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    toJSON: {
      // getters: true,
    },
  }
);

const Reaction = model('reaction', ReactionSchema);

module.exports = Reaction;