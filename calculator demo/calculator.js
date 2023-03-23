function display(value){
document.getElementById("textarea").value+=value
}


function calculate(){
    let value =document.getElementById("textarea").value
    let answer=eval(value)
    document.getElementById('textarea').value=answer

}
function clr(){
    document.getElementById("textarea").value=''
}