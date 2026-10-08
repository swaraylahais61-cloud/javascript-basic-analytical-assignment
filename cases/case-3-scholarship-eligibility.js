// Student Scholarship Eligibility

const student = "Rina";
const averageScore = 90;
const attendance = 88;
const familyIncome = 2000000;
const isOrgMember = true;

const hasPassedBasic = (averageScore >= 80) && (attendance >= 90);
const basicRequirementStatus = hasPassedBasic ? "Passed" : "Failed";

let scholarshipCategory;

if (hasPassedBasic && familyIncome <= 3000000 && isOrgMember) {
    scholarshipCategory = "Category A";
} else if (hasPassedBasic && familyIncome <= 5000000 && isOrgMember) {
    scholarshipCategory = "Category B";
} else {
    scholarshipCategory = "Not Eligible";
}

console.log(`Student: ${student}
Average Score: ${averageScore}
Attendance: ${attendance}%
Family Income: Rp${familyIncome}
Organization Member: ${isOrgMember}

Basic Requirement: ${basicRequirementStatus}
Scholarship Category: ${scholarshipCategory}`);
