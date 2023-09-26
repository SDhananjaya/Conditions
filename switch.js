//window.alert("this is a switch condition")

document.write("<h2>This is a switch condition</h2>")
// switch condition
var a=10;
switch (a){
    case 0:document.write("a is 0");
    break;
    case 5:document.write("a is 5");
    break;
    case 10:document.write("a is 10");
   // break;
   document.write("<br/>")
   // document.write("<br/>");
    default:document.write("a value not matched with any case");
}

document.write("<h2>This is a while condition</h2>")
var b=0;
while(b<10){
    document.write(b);
   
    b++;
}

document.write("<h2>This is a while loop condition</h2>");
var c=0;
//for (c=10;c>0;c--){
 for (c=0;c<10;c++){   
    document.write(c)
    document.write("<br/>");
    
}
