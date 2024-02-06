var output = []
var count = 1;
function fizzBuzz(){

    while (count <= 100){
    
if (count % 3 === 0 && count % 5 === 0){
    output.push("fizzBuzz")
    
}
    
else if (count % 3 === 0){
    output.push("fizz")
}
else if(count % 5 === 0){
    output.push("buzz")
    
}

else{
    output.push(count)
}
count ++;
    }
    console.log(output);

}
fizzBuzz()

for (var i = 1; i < length; i++){
    console.log(i);
}
var cart = 1
for(var i =1; i < cart.length; i++){
    cart++
}

console.log(cart)
function  fibonacciGenerator(n){
    var outputs = []
        if (n === 1){
            outputs=[0]
        }else if(n === 2){
            outputs=[0,1];
        }
        else{
            outputs = [0,1]
       for(var i = 2; i < n; i++){
          outputs.push(outputs[outputs.length - 2] + outputs[outputs.length - 1]);
    
       }
        }
     return outputs
    }
    