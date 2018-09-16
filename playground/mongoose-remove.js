const { ObjectID } = require("mongodb");

const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");

//Todo.remove({}).then(result => {
//console.log(result);
//});

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

Todo.findOneAndRemove({ _id: "5b9cf058cb89e475d1b60dca" }).then(todo => {});

Todo.findByIdAndRemove("5b9cf058cb89e475d1b60dca").then(todo => {
  console.log(todo);
});
