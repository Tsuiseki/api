import mongoose from 'mongoose';
import express from 'express';
import restify from 'express-restify-mongoose';
import bodyParser from 'body-parser';
import { models } from '@tsuiseki/common';

// mongoose
mongoose.connect(process.env.MONGO_URL)

// restify
const router = express.Router();

restify.serve(router, models.Show);
restify.serve(router, models.ShowSource);

// setup express instance
const app = express();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/', router);

app.listen(port);
