// 11. given the seat number print the seat position in the bus
function busSeat(seatNumber){
    if(seatNumber <= 30 && seatNumber > 0){
        if(seatNumber % 6 === 1){
            console.log("The seat is Side Lower ")
        }else if(seatNumber % 6 === 2){
            console.log("The seat is Side Upper ")
        }else if(seatNumber % 6 === 3 || seatNumber % 6 === 4){
            console.log("The seat is Lower Berth ")
        }else if(seatNumber % 6 === 5 || seatNumber % 6 === 0){
            console.log("The seat is Upper Berth")
        }
    }else{
        console.log("Enter a valid seat number !")
    }
}
let seatNumber = 12
busSeat(seatNumber)