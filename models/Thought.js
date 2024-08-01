const { Schema, model } = require('mongoose');
// const UserSchema = require('./User');


// const ReactionSchema = new Schema(
//   {
//     reactionId: {
//       type: Schema.Types.ObjectId,
//       // default: newObjectId()
//     },
//     reactionBody: {
//       type: String,
//       require: true,
//       max_length: 280,
//     },
//     username: {
//       type: String,
//       required: true,
//     },
//     createdAt: {
//       type: Date,
//       default: Date.now,
//     },
//     toJSON: {
//       // getters: true,
//     },
//   }
// );

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      max_length: 280,
    },
    // createdAt: {
    //   type: Date,
    //   default: Date.now,
    // },
    username: {
      type: String,
      required: true,
    }

    
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