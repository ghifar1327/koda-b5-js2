let subtotal = 1.5e6
if (subtotal>0){
    if (subtotal>= 5e5){
        console.log(subtotal-(subtotal * 5/100))
    }else if (subtotal > 1e6){
        console.log(subtotal-(subtotal * 10/100))
    }else {
        console.log(subtotal)
    }
}else{
    console.log("subtotal: invalid");
}
