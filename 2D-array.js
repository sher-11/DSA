'use strict';
/*
Statement :-
Given a list of N students, every student is marked for M subjects. Each student is denoted by an index value. Their teacher Ms. Margaret must ignore the marks of any 1 subject for every student. For this she decides to ignore the subject which has the lowest class average.
Your task is to help her find that subject, calculate the total marks of each student in all the other subjects and then finally return the array of the total marks scored by each student.

Input Specification:
input1:
An integer value N denoting number of students

input2:
An integer value M denoting number of subjects

input3:
A 2-D integer array of size N'M containing the marks of all students in each subject.

Output Specification:

Return an integer array of size N containing the total marks of each student afte deducting the score for that one subject.

Example 1:
INPUT
3 5
75 76 65 87 87
78 76 68 56 89
67 87 78 77 65
OUTPUT
325 299 296

Example 2:
INPUT
3 3
50 30 70 
30 70 99 
99 20 30
OUTPUT
120 129 129
*/


function calculateAverage(N, M, students) {
    let totals = Array(N).fill(0);

    let lowIndex = 0,
        lowValue = Number.MAX_VALUE;

    for (let i = 0; i < M; i++) {
        let subject = 0;

        for (let j = 0; j < N; j++) {
            console.log(students[j][i])
            let marks = students[j][i];
            subject += marks;
            totals[j] += marks; 
        }

        if(lowValue > subject) {
            lowIndex = i,
            lowValue = subject;
        }
    }
    for (let i = 0; i < N; i++) {
        totals[i] -= students[i][lowIndex]
    }

    return totals;
}

const students = [
    [75, 76, 65, 87, 87],
    [78, 76, 68, 56, 89],
    [67, 87, 78, 77, 65]
];
let N = students.length;
let M = students[0].length;
console.log(N, M)

console.log(calculateAverage(N, M, students));



