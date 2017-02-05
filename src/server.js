import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import { models } from '@tsuiseki/common';

// routes
const router = express.Router();

router.get('/', function(req, res) {
  res.json({message: 'hello world'});
});

// setup express instance
const app = express();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api', router);

app.listen(port);
