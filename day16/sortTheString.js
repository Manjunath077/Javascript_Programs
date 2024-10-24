// Given a string sort it in ascending order 

function sortTheString(str){
    let res = []
    res = str.toLowerCase().split('')
    for(let i=0;i<res.length;i++){
        for(let j=i+1;j<res.length;j++){
            if(res[i]>res[j]){
                let temp = res[i]
                res[i] = res[j]
                res[j] = temp             
            }
        }
    }
    console.log(res.join(''))
}
let str = 'AnUraG'
sortTheString(str)
