// Given 3 subjects find the average and print the rank with pass or fail
function rankOfStudent(marks1,marks2,marks3){
    let average = Math.floor((marks1 + marks2 + marks3) / 3)
    if(marks1 >= pass && marks2 >= pass && marks3 >= pass){
        if(average >= 90){
            console.log("Passed with Distinction")
        }else if(75 <= average && average < 90){
            console.log("Passed with First Class")
        }else if(50 <= average && average < 75 ){
            console.log("Passed with Second Class")
        }else{
            console.log("Passed with Just Pass")
        }
    }else{
        console.log("Student Failed !")
    }
}
let marks1 = 90
let marks2 = 95
let marks3 = 99
let pass = 35
rankOfStudent(marks1,marks2,marks3)