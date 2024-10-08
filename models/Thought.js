const { Schema, Types, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const formatDate = (date) => {
  return new Date(date).toLocaleString();
};

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      require: true,
      min_length: 1,
      max_length: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: formatDate      
    }
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min_length: 1,
      max_length: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: formatDate
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema]    
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
})

const Thought = model('thought', thoughtSchema);

module.exports = Thought;

