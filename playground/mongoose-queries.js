const { ObjectID } = require("mongodb");
const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");

var id = "5b96a34690ffaec403538ada";

//User.findById

User.findById(id)
  .then(user => {
    if (!user) {
      console.log("ID not found");
    }
    console.log("User By Id", user);
  })
  .catch(e => console.log(e));

/*
Todo.findById(id)
  .then(todo => {
    if (!todo) {
      return console.log("ID not found");
    }
    console.log("Todo By Id", todo);
  })
  .catch(e => console.log(e));
*/
/*
if (!ObjectID.isValid(id)) {
  console.log("ID not valid");
}*/
/*
Todo.find({
  _id: id
}).then(todos => {
  console.log("Todos", todos);
});

Todo.findOne({
  _id: id
}).then(todo => {
  console.log("Todo", todo);
});
*/
