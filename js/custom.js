//  var d = document.getElementById("humpty");
//  var pCounter = 0;
//  for (var i = 0; i < d.childNodes.length; i++) {
//    if (d.childNodes[i].nodeType === 1 ) {
//      pCounter++;
//    }
//    if (pCounter === 2) {
//      d.childNodes[i].innerHTML = "All his men.";
//      break;
//   }
// } 
function dr(){
    var number=[];
    for(i=0;i<5;i++){
        var num=number.push(prompt("Enter a number"));
    }
    var count=0;
    for(x=0;x<number.length;x++){
        if(number[x]==9){
            count++;
        }
        
    }
    if(count>=1){
        alert(count);
    }
    else{
        alert("There is no number 9 presence");
    }
    if(number==9){
        alert("There is number nine ");
    }
    else{
        alert("Theres no such number");
    }
    
//}
//dr();
