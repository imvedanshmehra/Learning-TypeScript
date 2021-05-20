const person: {
  name: string;
  age: number;
  hobbies: string[];
  // can only contian a number and a string
  role: [number, string];
} = {
  name: 'Vedansh',
  age: 20,
  hobbies: ['Travelling', 'Coding', 'Biking'],
  role: [1, 'Admin'],
};

// TS- does not checks when we use push method on tuples
person.role.push('Developer');

console.log(person);
