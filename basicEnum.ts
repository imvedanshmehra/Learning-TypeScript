enum Role {
  // can also assign our own values to enum values
  ADMIN = 50,
  DEVELOPER = 30,
  MANAGER = 'Manager',
}

const person = {
  name: 'Vedansh',
  age: 20,
  hobbies: ['Travelling', 'Coding', 'Biking'],
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  console.log('Is Admin');
}

console.log(person);
