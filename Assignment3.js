
/*function calculateResult(marks) {
    if (marks >= 50) {
        return "Pass";
    } else {
        return "Fail";
    }
}

const displayResult = (name, result) => {
    console.log(`${name} - ${result}`);
};

const learners = [
    { name: "Anu", marks: 75 },
    { name: "Rahul", marks: 42 },
    { name: "Meena", marks: 68 },
    { name: "Arun", marks: 35 }
];

for (const learner of learners) {
    const result = calculateResult(learner.marks);
    displayResult(learner.name, result);
}*/




/*const students = [
    { name: "John", marks: 85, grade: "A" },
    { name: "David", marks: 72, grade: "B" },
    { name: "Peter", marks: 90, grade: "A+" },
    { name: "Sarah", marks: 65, grade: "C" }
];

console.log("All Students:");

students.forEach((student) => {
    console.log(
        `${student.name} - ${student.marks} - ${student.grade}`
    );
});


const studentNames = students.map((student) => student.name);

console.log("\nStudent Names:");
console.log(studentNames);

const highScorers = students.filter((student) => student.marks >= 80);

console.log("\nStudents who scored 80 or above:");
console.log(highScorers);
*/




function getData(callback) {
    setTimeout(() => {
        callback("Data received successfully");
    }, 1000);
}

getData((message) => {
    console.log(message);
});

