const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  company: {
    type: String,
  },
  website: {
    type: String,
  },
  location: {
    type: String,
  },
  status: {
    type: String,
    required: true,
  },
  platform: {
    type: [String],
    required: true,
  },
  bio: {
    type: String,
  },
  githubusername: {
    type: String,
  },
  recent: [
    {
      title: {
        type: String,
        required: true,
      },
      platform: {
        type: String,
        required: true,
      },
      hours: {
        type: String,
        required: true,
      },
    },
  ],
  favorite: [
    {
      title: {
        type: String,
        required: true,
      },
      platform: {
        type: String,
        required: true,
      },
      hours: {
        type: String,
        required: true,
      },
    },
  ],
  social: {
    youtube: {
      type: String,
    },
    twitter: {
      type: String,
    },
    facebook: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    instagram: {
      type: String,
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("profile", ProfileSchema);
