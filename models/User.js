const { Schema, Types } = require('mongoose');

const userSchema = new Schema(
  {

    userName: {
      type: String,
      unique: true,
      required: true,
      trimmed: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // must match a valid email address (look into moongoose's validation)
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thought',
      },
    ],

    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user', 
        // self reference
      },
    ],



  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = userSchema;


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