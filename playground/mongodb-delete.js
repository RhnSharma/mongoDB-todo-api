//const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, db) => {
    if (err) {
      return console.log("Unable to connect to MongoDB server.");
    }
    console.log("Connected to MongoDB server");

    //delete many
    /* db.collection("Todos")
      .deleteMany({ text: "Eat Lunch" })
      .then(result => {
        console.log(result);
      });
*/

    //delete one
    /* db.collection("Todos")
      .deleteOne({ text: "Eat lunch" })
      .then(result => {
        console.log(result);
      });
*/

    //findOneAndDelete
    /*db.collection("Todos")
      .findOneAndDelete({ completed: false })
      .then(result => {
        console.log(result);
      });*/

    //  db.collection("Users").deleteMany({ name: "Rohan" });

    db.collection("Users")
      .findOneAndDelete({
        _id: new ObjectID("5b93fe85b4e5d108e8e24bdf")
      })
      .then(results => {
        console.log(JSON.stringify(results, undefined, 2));
      });

    // db.close();
  }
);
