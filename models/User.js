const { Schema, Types, model } = require('mongoose');
const thoughtSchema = require('./Thought')

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trimmed: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    thoughts: [
      {type: Schema.Types.ObjectId,
      ref: 'thought'
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user'
      }
    ]
  },
  {
    toJSON: {
        virtuals: true,
    },
    id: false,
  }
);

userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
})

const User = model('user', userSchema)

module.exports = User;


// assignmentId: {
//   type: Schema.Types.ObjectId,
//   default: () => new Types.ObjectId(),
// },

// userName: {
//   type: String,
//   unique: true,
//   required: true,
//   maxlength: 50,
//   minlength: 4,
//   default: 'Unnamed assignment',
// },


    // thoughts: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: 'thought',
    //   },
    // ],
    // friends: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: 'user', 
    //     // self reference
    //   },
    // ],