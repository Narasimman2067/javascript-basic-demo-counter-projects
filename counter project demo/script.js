function increment(){
    const number =Number(document.getElementById("number").innerHTML)
    document.getElementById("number").innerHTML =number+1
}
function decrement(){
    const number =Number(document.getElementById("number").innerHTML)
    document.getElementById("number").innerHTML =number-1
}
function neutral(){
    
    document.getElementById("number").innerHTML =0
}