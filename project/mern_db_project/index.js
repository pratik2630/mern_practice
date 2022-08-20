const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017";

const client = new MongoClient(uri);

async function db_connection() {
  const database = client.db("MERN1");
  const students = database.collection("students");
  // students.insertOne({"name":"Pratik"}) manual way

  mydoc = {
    name: "xyz",
    phone: 9326543210,
    marks: 51,
    remarks: "good",
  }; //js object

  const result = await students.insertOne(mydoc);

  const sdata = await students.findOne(
    { name: "xyz" },
    { projection: { name: 1, _id: 0, phone: 1 } }
  );
  
  console.log(sdata.name);
  console.log(sdata.phone);
  console.log("Done");

  await client.close();
} // to avoid "promise{<pending>}" issue
db_connection();
