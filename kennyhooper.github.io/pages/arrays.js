var people = [

 person1 = {
 name: "David",
 age: 67,
 contact : {phoneNmber: 4245678912,
            email: "kennyhooper@gmail.com"}},

 person2 = {
 name: "Che",
 age: 33,
 contact : {phoneNumber: 1234567899,
            email: "cher@gmail.com"}},

 person3 = {
 name: "Allan",
 age: 23,
 contact : {phoneNumber: 2345678911,
            email: "allan@gmail.com"}},

  ] ;

  console.log(people[0]);
console.log(people[people.length - 1]);

var lastPerson = people.pop();

console.log(lastPerson.name + "\n" + lastPerson.contact.phoneNumber);

people.unshift(lastPerson);

console.log(people);
