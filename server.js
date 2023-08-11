const express = require('express');
require('./db/mongoose.js')();
const mongoose=require('mongoose')
url="localhost//27017:/clone"
mongoose.connect(url)

