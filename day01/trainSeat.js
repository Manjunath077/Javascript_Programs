// 10. given the seat number print the seat position in the train
function trainSeat(seatNumber){
    if(seatNumber <= 80 && seatNumber > 0){
        if(seatNumber % 8 === 1){
            console.log("The Seat is Side Lower")
        }else if(seatNumber % 8 === 2){
            console.log("The seat is Side Upper")
        }else if(seatNumber % 8 === 3 || seatNumber % 8 === 6){
            console.log("The seat is Lower Berth")
        }else if(seatNumber % 8 === 4 || seatNumber % 8 === 7){
            console.log("The seat is Middle Berth")
        }else if(seatNumber % 8 === 5 || seatNumber % 8 === 0){
            console.log("The seat is Upper Berth")
        }
    }else{ 
        console.log("Enter a valid seat number !")
    }
}
let seatNumber = 80
trainSeat(seatNumber)