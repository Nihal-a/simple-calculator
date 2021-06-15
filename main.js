function btnClick(val){
    console.log(val);
    document.getElementById('screen').value+=val;
}
function clearScreen(){
    document.getElementById('screen').value='';
}
function eqlClick(){
    let values = document.getElementById('screen').value
    const result = eval(values)
    document.getElementById('screen').value = result
}