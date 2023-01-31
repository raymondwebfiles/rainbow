document.write("my js lesson starts here!"+"<br>");
// if else
let a=1;
let b=2;
let c=1;
if(a != b){
    document.write("Correct!"+"<br>");
} else{
    document.write("Wrong"+"<br>"+"<br>");
}

// array
let prutas=[];
display=prutas.push("mangga");
document.write("Array: "+prutas+"<br><br>");
display=prutas.push("pinya");
display=prutas.push("ubas");
display=prutas.push("lansones");

document.write("Array: "+prutas[0]+"<br>");
document.write("Array: "+prutas[1]+"<br>");
document.write("Array: "+prutas[2]+"<br>");
document.write("Array: "+prutas[3]+"<br><br><hr>");

prutas[1]="pakwan";
document.write("Array: "+prutas[0]+"<br>");
document.write("Array: "+prutas[1]+"<br>");
document.write("Array: "+prutas[2]+"<br>");
document.write("Array: "+prutas[3]+"<br><br><hr>");

//for loop and switch
for(let i=0; i<=prutas.length; i++){
    switch(i){
        case 1:
            document.write("Index 1<br>");
            break;
        case 2:
            document.write("Index 2<br>");
            break;
        default:
            document.write("No index matched<br>");
            break;
    }
}
document.write("<hr>");

//function and calling
let num1=2; num2=3 ; sum=0;
function add(plus){
    sum=num1+num2;
    document.write("The sum of two numbers are: "+sum+"<br><hr>");
}
add(sum);

//for inside function
let gulay=["kangkong","okra","kalabasa","kamote"];
function laman(arguments){
    for(let ctr=0; ctr<=arguments; ctr++){
        document.write("Function with array"+ctr+":  "+gulay[ctr]+"<br>");
    }
}
laman(gulay.length);

document.write("<hr>");
//gulay variable declared na sa taas
function switchloop(kahon){
    for(let f=0; f<=kahon; f++){
        switch(f){
            case 0:
                document.write("Index 0 : "+gulay[f]+"<br>");
                break;
            case 1:
                document.write("Index 1 : "+gulay[f]+"<br>");
                break;
            case 2:
                document.write("Index 2 : "+gulay[f]+"<br>");
                break;
            case 3:
                document.write("Index 3 : "+gulay[f]+"<br>");
                break;
            default:
                document.write("Index not matched"+"<br>");
                break;
        }
    }
}
switchloop(gulay.length);

document.write("<hr>");

//declared functiong with arguments
let x="cheers";
let newfunction = function(){
    document.write("Second way to declare function  "+"<strike>"+x+"</strike>"+"<br>");
}
newfunction();

document.write("<hr>");

let anotherfunction = (content) => {
    document.write("Third way to declare anotherfunction "+content+"<br>");
}
anotherfunction("HelloWorld!");