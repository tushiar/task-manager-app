const express = require("express");
const Task = require("../models/task");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/tasks", auth, async (req, res) => {
  const task = new Task({ ...req.body, owner: req.user._id });
  try {
    await task.save();
    res.send(task);
  } catch (error) {
    res.send(error);
  }
});

router.get("/tasks", auth, async (req, res) => {
  
  const match={}
  if (req.query.completed) {

    match.completed = req.query.completed === "true";
  }

  try {
    // console.log(req)
    await req.user
      .populate({
        path: "tasks",
        match,
        options: {
          skip: parseInt(req.query.skip)
        }
      })
      .execPopulate();
    res.send(req.user.tasks);
  } catch (error) {
    res.status(500).send();
  }
});

// router.get('/tasks/:id', async (req, res) => {
//   const _id = req.params.id
//   try {
//       const taskByID= await Task.findById(_id)
//       if (!taskByID) {
//           return res.status(404).send()
//       }

//       res.send(taskByID)

//   } catch (error) {
//        res.status(500).send()
//   }

// })

router.get("/tasks/:id", auth, async (req, res) => {
  const _id = req.params.id;
  try {
    const taskByID = await Task.findOne({ _id, owner: req.user._id });
    if (!taskByID) {
      return res.status(404).send();
    }

    res.send(taskByID);
  } catch (error) {
    res.status(500).send();
  }
});

router.patch("/tasks/:id", async (req, res) => {
  const _id = req.params.id;
  const updateParam = Object.keys(req.body);
  const validationParam = ["completed", "description"];
  const isValid = updateParam.every((param) => validationParam.includes(param));

  if (!isValid) return res.status(400).send("Invalid Field!!");
  try {
    const taskByID = await Task.findById(_id);

    updateParam.forEach((field) => (taskByID[field] = req.body[field]));

    await taskByID.save();

    // const taskByID= await Task.findByIdAndUpdate(_id, req.body, {new:true, runValidators: true})
    if (!taskByID) {
      return res.status(404).send();
    }
    res.send(taskByID);
  } catch (error) {
    res.status(500).send();
  }
});

router.delete("/tasks/:id", async (req, res) => {
  const _id = req.params.id;
  console.log(req);
  try {
    const taskByID = await Task.findByIdAndDelete(_id);
    if (!taskByID) {
      return res.status(404).send();
    }
    res.send(taskByID);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;
