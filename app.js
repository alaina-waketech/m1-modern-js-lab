import { users } from "./data.js";

const findUserById = (id) => {
  const user = users.find((u) => u.id === id);

  if (user == null) return "Error: User not found";

  const { name, email } = user;
 return `ID: ${id} | Name: ${name} | Email: ${email}`;
};

//test cases for fuctions
//id that exists
console.log(findUserById(2));
//id that doesn't
console.log(findUserById(99));
