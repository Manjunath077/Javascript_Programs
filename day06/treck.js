// given a string which contains u and d where u is up and d is down count the nummber of valleies does the person cross

function treck(str){
    let msl = 0
    let valley = 0
    for(let i=0;i<str.length;i++){
        if(str[i] === 'U' || str[i] === 'u'){
            msl++
        }else if(str[i] === "D" || str[i] === "d"){
            msl--
        }
        if(msl === 0 && (str[i] == 'U' || str[i] == 'u')){
            valley++
        }
    }
    console.log(`Number of valley's crossed :`,valley)
}
// let str = "UD'DU''DDUU'"
// let str = "UDDUDDUU"
let str = "UDDDUDUU"
// let str = "UDUDU"
treck(str)