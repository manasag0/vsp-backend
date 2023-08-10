const express = require('express');
require('./db/mongoose.js')();
const mongoose=require('mongoose')
mongoose.connect(url)