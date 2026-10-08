//Student Score Analysis//

let name = "Andi";
let assignment = 80;
let midterm = 75
let final_exam = 90;

//Weignt//
const assignment_weight = 0.3;
const midterm_weight = 0.3;
const final_exam_weight = 0.4;

//Final score
const final_score = (assignment * assignment_weight) + (midterm * midterm_weight) + (final_exam * final_exam_weight);


//Pass or fail
const status = final_score >= 70 ? "Passed" : "Failed";



let category;
if (final_score >= 85) {
    category = "Excellent";
} else if (final_score >= 70) {
    category = "Good";
} else {
    category = "Failed";
}
console.log(`
Name: ${name}
Assignment: ${assignment}
Midterm: ${midterm}
Final Exam: ${final_exam}
Final Score: ${final_score}
Status: ${status}
Category: ${category}
`); 0