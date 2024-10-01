// 5. given a marks of three subjects of a student a,b,c print whether the student is pass or fail passing criteria 35 marks

function passOrFail(marks1,marks2,marks3,pass){
    if(marks1 < pass || marks2 < pass || marks3 < pass){
        console.log("Student is failed !")
    }else{
        console.log("Student is passed !")
    }
}
let marks1 = 100
let marks2 = 35
let marks3 = 40
let pass = 35
passOrFail(marks1,marks2,marks3,pass)