// Clone Object
var student1 = {
    id: 1,
    name: 'Name1'
}
// var student2 = student1
// student2.id = 2
// console.log(student1.id, student2.id)

var student2 = JSON.parse(JSON.stringify(student1))
student2.id = 2
student2.name = 'Name2'
console.log(student1.name, student2.name)
console.log(student1.id, student2.id)

var student3 = JSON.parse(JSON.stringify(student1))
student3.id = 3
student3.name = 'Name3'
console.log(student1.name, student2.name, student3.name)
console.log(student1.id, student2.id, student3.id)