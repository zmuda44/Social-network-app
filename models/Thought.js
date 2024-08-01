const { Schema, model } = require('mongoose');

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
      // Use a getter method to format the timestamp on query
    },
    // toJSON: {
    //   // getters: true,
    // },
  }
);

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      max_length: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [ReactionSchema]

    
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;

// reactions: [reactionSchema]