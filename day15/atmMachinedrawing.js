// input : [10,20,50,100,200,500,1000,2000] ,amount = 1500, 
// output : minimum combination : 1000 + 500 

function atmMachineDrawing(notes,amount){
    let res = []
    for(let i=notes.length-1;i>=0;i--){
        while(amount >= notes[i]){
            res.push(notes[i])
            amount = amount - notes[i]
        }
        if(amount == 0){
            return res
        }
    }
    return res
}
let notes = [10,20,50,100,200,500,1000,2000]
let amount = 1250
console.log(atmMachineDrawing(notes,amount))



// i = notes.length-1
// while(amount != 0 && i != 0){
//     if(amount<=notes[i]){
//         amount = amount - notes[i]
//     }
//     res.push(notes[i])
//     i--
// }