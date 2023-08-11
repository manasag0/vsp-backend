
const express = require('express');
const { default: mongoose } = require("mongoose");

const videoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    videoUrl: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      required: true,
    },
    views: {
      type: Number,
      required: true,
    },
    visibility: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Video = mongoose.model("videos", videoSchema);
module.exports = Video;

