const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const marioModel = require('./models/marioChar');

// Middlewares
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// your code goes here
app.get("/mario", async (req, res) => {
    try {
      const userdata = await marioModel.find();
      res.json({
        status: "success",
        userdata,
      });
    } catch (e) {
      res.status(400).json({
        message: e.message,
      });
    }
  });
  app.get("/mario/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const userdata = await marioModel.find({ _id: id });
      res.json({
        status: "success",
        userdata,
      });
    } catch (e) {
      res.status(400).json({
        message: e.message,
      });
    }
  });
  ///// create data
  app.post("/mario", async (req, res) => {
    try {
      const data = req.body;
      const userdata = await marioModel.create(data);
      res.status(201).json({
        message: "newly saved Mario character",
        userdata,
      });
    } catch (e) {
      res.status(400).json({
        message: "name or weight is missing",
      });
    }
  });
  app.patch("/mario/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const data = await marioModel.updateOne({ _id: id }, req.body);
      res.json({
        data,
      });
    } catch (e) {
      res.status(200).json({
        message: e.message,
      });
    }
  });
  app.delete("/mario/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const data = await marioModel.deleteOne({ _id: id });
      res.status(200).json({
        message: "character deleted",
        data,
      });
    } catch (e) {
      res.status(400).json({
        message: e.message,
      });
    }
  });


module.exports = app;