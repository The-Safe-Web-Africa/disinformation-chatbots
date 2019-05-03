require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const botometerAnalyserRouter = require('./botometerAnalyser/routes');
const sendToAnalysisRouter = require('./sendToAnalysis/routes');
const mediaScaleRouter = require('./mediaScale/routes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/botometer/', botometerAnalyserRouter);
app.use('/sendToAnalysis/', sendToAnalysisRouter);
app.use('/media-scale/', mediaScaleRouter);

module.exports = app;
