const fs = require("fs");

// Create

fs.writeFile(
  "Homework-4/employees.json",
  '{"name": "Employee 1 Name", "salary": 2000}',
  "utf-8",
  (err) => {
    if (err) console.log(err);
    console.log("Data has been created");
  }
);

// Read

fs.readFile("Homework-4/employees.json", "utf-8", (err, data) => {
  if (err) console.log(err);
  console.log(data);
  console.log("Data has been read");
});

// Update

fs.appendFile(
  "Homework-4/employees.json",
  ',\n{"name": "Employee 2 Name", "salary": 2500}',
  "utf-8",
  (err, data) => {
    if (err) console.log(err);
    console.log(data);
    console.log("Data has been updated");
  }
);

// Delete

fs.unlink("Homework-4/employees.json", (err) => {
  if (err) console.log(err);
  console.log("Homework-4/employees.json has been deleted");
});
