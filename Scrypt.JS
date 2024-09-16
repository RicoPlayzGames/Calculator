function getnumbers(value){

    let display= document.getElementById("display").value +=value;
    console.log(display);
    
}
function rekenen(){

    const display= document.getElementById("display");
    try {
        display.value= eval(display.value);
    }
    catch (error) {
        display.value= "infinite";
    }
}
function cleardisplay(){

    document.getElementById("display").value=""
}
function remove(value){
   let display= document.getElementById("discplay").value -=value;
    comsole.log(display);
}
