//accepts a number as a parameter. Every 1000 milliseconds decrements 1 and console.logs it. Once the number'value becomes 0, stops & log “DONE!”
function countdown(n){
  let intervalID = setInterval(()=>{
    n--
    if(n <= 0){
      clearInterval(intervalID)
      console.log('DONE!')}
    else console.log(n)
  },1000)
}
console.log(countdown(3))
//undefined
// 2
// 1
// DONE!
